/* The European Gaze on India — deep-zoom plate viewer.
   Progressive enhancement: replaces the static plate image with an
   OpenSeadragon viewer when tiles are available; falls back silently. */
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
    gestureSettingsMouse: { clickToZoom: true, dblClickToZoom: true },
    gestureSettingsTouch: { pinchRotate: false }
  });

  viewer.addOnceHandler('open', function () {
    if (staticWrap && staticWrap.parentNode) staticWrap.style.display = 'none';
    if (!note) {
      note = document.createElement('span');
      note.className = 'zoom';
      pv.appendChild(note);
    }
    note.textContent = 'Scroll or pinch to zoom · drag to pan · double-click to zoom in';
  });

  viewer.addOnceHandler('open-failed', function () {
    /* Tiles unreachable: remove the viewer, keep the static plate. */
    try { viewer.destroy(); } catch (e) {}
    if (box.parentNode) box.parentNode.removeChild(box);
  });
})();
