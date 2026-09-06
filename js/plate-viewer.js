/* The European Gaze on India – deep-zoom plate viewer.
   Progressive enhancement: replaces the static plate image with an
   OpenSeadragon viewer when tiles are available; falls back silently.

   The viewer starts dormant: the wheel scrolls the page and a finger swipe
   scrolls the page, even over the plate, so a reader on a phone or a narrow
   window is never trapped inside the map on the way to the commentary.
   One click or tap on the plate wakes it – scroll or pinch to zoom, drag
   to pan – and a click elsewhere, or Escape, puts it back to sleep. */
(function () {
  'use strict';
  var pv = document.querySelector('.plateview');
  if (!pv || typeof OpenSeadragon === 'undefined') return;
  var dzi = pv.getAttribute('data-dzi');
  if (!dzi) return;

  var img = pv.querySelector('img');
  var staticWrap = pv.querySelector('a') || img;
  var note = pv.querySelector('.zoom');

  var box = document.createElement('div');
  box.className = 'osd-box';
  var w = img && img.getAttribute('width');
  var h = img && img.getAttribute('height');
  if (w && h) box.style.aspectRatio = w + ' / ' + h;
  pv.insertBefore(box, pv.firstChild);

  var viewer = OpenSeadragon({
    element: box,
    tileSources: dzi,
    prefixUrl: 'js/osd-images/',
    animationTime: 0.45,
    blendTime: 0.1,
    maxZoomPixelRatio: 1.6,
    minZoomImageRatio: 0.95,
    visibilityRatio: 0.85,
    showRotationControl: false,
    navigatorSizeRatio: 0.14,
    /* dormant until the plate is clicked or tapped: see wake() */
    gestureSettingsMouse: { scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dragToPan: true },
    gestureSettingsTouch: { scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dragToPan: false, pinchToZoom: true, pinchRotate: false }
  });

  var HINT_ASLEEP = 'Click or tap the plate to explore it';
  var HINT_AWAKE = 'Scroll or pinch to zoom · drag to pan · double-click to zoom in · Esc to release';
  var awake = false;

  /* OpenSeadragon writes touch-action: none on its own elements; while the viewer
     sleeps, every one of them lets a vertical swipe through to the page instead. */
  function setTouch(value) {
    box.style.touchAction = value;
    box.querySelectorAll('*').forEach(function (el) { el.style.touchAction = value; });
  }
  function wake() {
    if (awake) return;
    awake = true;
    viewer.gestureSettingsMouse.scrollToZoom = true;
    viewer.gestureSettingsTouch.dragToPan = true;
    setTouch('none');
    box.classList.add('awake');
    if (note) note.textContent = HINT_AWAKE;
  }
  function sleep() {
    if (!awake) return;
    awake = false;
    viewer.gestureSettingsMouse.scrollToZoom = false;
    viewer.gestureSettingsTouch.dragToPan = false;
    setTouch('pan-y');
    box.classList.remove('awake');
    if (note) note.textContent = HINT_ASLEEP;
  }

  viewer.addOnceHandler('open', function () {
    if (staticWrap && staticWrap.parentNode) staticWrap.style.display = 'none';
    if (!note) {
      note = document.createElement('span');
      note.className = 'zoom';
      pv.appendChild(note);
    }
    note.textContent = HINT_ASLEEP;
    setTouch('pan-y');

    /* While asleep, the wheel and a finger belong to the page: the events are
       stopped on the way down, before OpenSeadragon's own listeners see them,
       and the browser scrolls as usual.  A tap (a touch that does not move)
       wakes the viewer; so does any mouse press on the plate. */
    var touchStart = null;
    function asleepTouch(ev) {
      if (awake || ev.pointerType === 'mouse') return;
      ev.stopPropagation();
      if (ev.type === 'pointerdown') touchStart = [ev.clientX, ev.clientY];
      else if (ev.type === 'pointerup' && touchStart) {
        if (Math.abs(ev.clientX - touchStart[0]) < 10 && Math.abs(ev.clientY - touchStart[1]) < 10) wake();
        touchStart = null;
      }
    }
    box.addEventListener('wheel', function (ev) { if (!awake) ev.stopPropagation(); }, { capture: true, passive: true });
    ['pointerdown', 'pointermove', 'pointerup', 'pointercancel'].forEach(function (type) {
      box.addEventListener(type, asleepTouch, { capture: true });
    });
    ['touchstart', 'touchmove', 'touchend', 'touchcancel'].forEach(function (type) {
      box.addEventListener(type, function (ev) { if (!awake) ev.stopPropagation(); }, { capture: true, passive: true });
    });
    viewer.addHandler('canvas-press', function (ev) {
      if (ev.pointerType !== 'touch') wake();      /* a mouse press or drag is intent enough */
    });
    viewer.addHandler('canvas-click', function (ev) { if (ev.quick) wake(); });
    box.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { sleep(); ev.stopPropagation(); }
    });
    document.addEventListener('pointerdown', function (ev) {
      if (!box.contains(ev.target)) sleep();
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') sleep();
    });
  });

  viewer.addOnceHandler('open-failed', function () {
    /* Tiles unreachable: remove the viewer, keep the static plate. */
    try { viewer.destroy(); } catch (e) {}
    if (box.parentNode) box.parentNode.removeChild(box);
  });
})();
