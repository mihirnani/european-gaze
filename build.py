#!/usr/bin/env python3
"""The European Gaze on India — page builder.  Run from anywhere:  python3 build.py

The collection's text lives as Markdown in the curiosities-text repository beside
this one (maps/<id>.md and maps/rooms/), and data/maps.js and data/rooms.js are
built from it – JSON behind a `window.NAME =` wrapper, so a browser can also read
it as a script.  This script assembles that data and writes every map page and
every room page from it.

    data/maps.js    one record per map: title, byline, brief, prose, the
                    catalogue metadata as an ordered list of rows, the image,
                    the links into the Deccan timeline, and the room it hangs in
    data/rooms.js   the seven rooms, their intros, and the maps in each, in
                    hanging order

Everything else on a map page — the head, the structured data, the masthead, the
previous/next walk, the footer, the scripts — is derived here.  So: to add a map,
add a record and list it in its room; to change the navigation of all 75 pages,
edit SECTIONS below.  The generated pages are never edited by hand.

The four hand-written pages (index, reading, places, about) keep their bodies;
this script only refreshes their head, masthead and footer.

No dependencies beyond the standard library.
"""
import html, json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = "https://naniwadekar.com"
BASE = SITE + "/european-gaze/"
COLLECTION = "The European Gaze on India"
TAGLINE = "India through foreign eyes"

SECTIONS = [("Deccan", SITE + "/deccan/"), ("Basalt", SITE + "/basalt-and-laterite/"),
            ("Birds", SITE + "/sahyadri-birds/"), ("Atlas", SITE + "/atlas/"),
            ("Text", SITE + "/text/")]
LOCAL_NAV = [("Reading", "reading.html"), ("Places", "places.html"), ("About", "about.html")]

# ---------------------------------------------------------------- data
def load(name, var):
    path = os.path.join(ROOT, "data", name)
    text = open(path, encoding="utf-8").read()
    m = re.search(r"window\.[A-Za-z0-9_]+\s*=\s*", text)
    if not m:
        raise SystemExit("no window.<NAME> = ... assignment in " + path)
    body = text[m.end():].strip().rstrip(";")
    try:
        return json.loads(body)
    except json.JSONDecodeError as err:
        raise SystemExit("%s is not valid JSON after the wrapper: %s" % (path, err))

# ---------------------------------------------------------------- helpers
def txt(s):
    """The plain-text form of a snippet of the collection's HTML."""
    return html.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()

def esc(s):
    return html.escape("" if s is None else str(s), quote=True)

def room_title(n, rooms):
    return "%02d %s" % (n, rooms[n]["title"])

# ---------------------------------------------------------------- shell
THEME_BOOT = """<script>(function(){
  var theme='light';
  try {
    var saved=localStorage.getItem('root-theme');
    if(saved==='light'||saved==='dark') theme=saved;
    else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches) theme='dark';
  } catch(e) {}
  document.documentElement.setAttribute('data-theme',theme);
})();</script>"""

PWA = ('<link href="european-gaze.webmanifest" rel="manifest"/>'
       '<link href="european-gaze-icon-180.png" rel="apple-touch-icon"/>'
       '<meta content="#ece3d1" media="(prefers-color-scheme: light)" name="theme-color"/>'
       '<meta content="#0d0d0f" media="(prefers-color-scheme: dark)" name="theme-color"/>'
       '<meta content="yes" name="apple-mobile-web-app-capable"/>'
       '<meta content="black-translucent" name="apple-mobile-web-app-status-bar-style"/>'
       '<meta content="European Gaze" name="apple-mobile-web-app-title"/>'
       '<link href="european-gaze-icon-192.png" rel="icon" sizes="192x192" type="image/png"/>')

MASTHEAD = ('<div class="masthead"><a class="site" href="index.html">%s</a>\n'
            '<span class="yrs">%s</span>\n'
            '<span class="nav-break" aria-hidden="true"></span>\n'
            '<a class="navlink home" href="%s/">Curiosities</a>\n'
            '%s%s'
            '<button class="theme-toggle" id="themeBtn" type="button" aria-label="Switch to dark theme">Dark</button></div>'
            ) % (COLLECTION, TAGLINE, SITE,
                 "".join('<a class="navlink" href="%s">%s</a>\n' % (href, label) for label, href in SECTIONS),
                 "".join('<a class="navlink" href="%s">%s</a>\n' % (href, label) for label, href in LOCAL_NAV))

FOOTER = ('<footer><span class="foot-line">Part of <a href="%s/">Curiosities</a>. A non-commercial study '
          'collection.</span> <span class="foot-line">Errors may be pointed out by writing to '
          '<a class="mail" href="#" data-u="mihir" data-d="naniwadekar.in">mihir [at] naniwadekar [dot] in</a>.'
          '</span></footer>') % SITE

MAIL_SCRIPT = """<script>(function(){var l=document.querySelectorAll("a.mail");for(var i=0;i<l.length;i++){var a=l[i],m=a.getAttribute("data-u")+"@"+a.getAttribute("data-d");a.href="mailto:"+m;a.textContent=m;}})();</script>"""

THEME_SCRIPT = """<script>(function(){
  var b=document.getElementById('themeBtn');
  if(!b) return;
  function sync(){
    var dark=document.documentElement.getAttribute('data-theme')==='dark';
    b.textContent=dark?'Light':'Dark';
    b.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
  }
  b.addEventListener('click',function(){
    var next=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',next);
    try { localStorage.setItem('root-theme',next); } catch(e) {}
    sync();
  });
  sync();
})();</script>"""

ARROW_SCRIPT = """<script>(function(){var p=document.querySelector('.mapnav .prev'),n=document.querySelector('.mapnav .next');document.addEventListener('keydown',function(e){var active=document.activeElement;if(active && active!==document.body && active!==document.documentElement) return;if(e.key==='ArrowLeft'&&p)location.href=p.getAttribute('href');if(e.key==='ArrowRight'&&n)location.href=n.getAttribute('href');});})();</script>"""

VIEWER = '<script src="js/openseadragon.min.js"></script><script src="js/plate-viewer.js"></script>'

# The attribution the Rumsey licence asks for, on every page whose image is theirs.
RUMSEY_CREDIT = ('<dt>Image</dt><dd>David Rumsey Map Collection, David Rumsey Map Center, Stanford University '
                 'Libraries · <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" '
                 'rel="noopener noreferrer">CC BY-NC-SA 3.0</a></dd>')

def head(page_title, desc, url, og_image, card="summary_large_image", og_type="article", extra=""):
    return """<head>
<meta charset="utf-8"/><meta content="width=device-width,initial-scale=1.0" name="viewport"/><meta content="{desc}" name="description"/>
<meta content="light dark" name="color-scheme"/>
<title>{title}</title>
{boot}<link href="style.css" rel="stylesheet"/>
{pwa}<link href="{url}" rel="canonical"/><meta content="{title}" property="og:title"/><meta name="twitter:card" content="{card}"><meta property="og:site_name" content="Curiosities"><meta content="{desc}" property="og:description"/><meta content="{type}" property="og:type"/><meta content="{url}" property="og:url"/><meta content="{img}" property="og:image"/>{extra}
</head>""".format(desc=esc(desc), title=esc(page_title), boot=THEME_BOOT, pwa=PWA, url=url,
                  card=card, type=og_type, img=og_image, extra=extra)

def page(rel, head_html, body_html, viewer=False):
    doc = ("<!DOCTYPE html>\n<html lang=\"en\">" + head_html + "<body>\n" + MASTHEAD + "\n" + body_html + "\n"
           + FOOTER + "\n" + MAIL_SCRIPT + "\n" + THEME_SCRIPT
           + (VIEWER if viewer else "") + "</body></html>\n")
    open(os.path.join(ROOT, rel), "w", encoding="utf-8").write(doc)
    return rel

# ---------------------------------------------------------------- structured data
LD_FROM_META = [("alternateName", ("Full title", "Title"), None),
                ("creator", ("Author",), "Person"),
                ("contributor", ("Engraver",), "Person"),
                ("version", ("Edition",), None),
                ("genre", ("Type",), None),
                ("publisher", ("Publisher",), "Organization"),
                ("locationCreated", ("Place",), None),
                ("size", ("Dimensions",), None),
                ("identifier", ("Archive identifier",), None)]

def structured(m):
    """The schema.org record for a map, derived from its own metadata rows.
    A record may carry an `ld` dictionary to override or add single fields."""
    meta = dict((k, v) for k, v in m["meta"])
    d = {"@context": "https://schema.org", "@type": "Map", "name": txt(m["title"]),
         "url": BASE + m["id"] + ".html", "image": BASE + m["image"]["src"],
         "inLanguage": "en", "isAccessibleForFree": True,
         "isPartOf": {"@type": "Collection", "name": COLLECTION, "url": BASE}}
    for key, labels, kind in LD_FROM_META:
        value = next((meta[l] for l in labels if meta.get(l)), None)
        if value is None:
            continue
        d[key] = {"@type": kind, "name": txt(value)} if kind else txt(value)
    d["temporalCoverage"] = d["datePublished"] = str(m["year"])
    source = meta.get("Source record")
    if source:
        url = re.search(r'href="([^"]+)"', source)
        if url:
            d["sameAs"] = html.unescape(url.group(1))
        d["holdingArchive"] = {"@type": "ArchiveOrganization", "name": txt(source)}
    d["description"] = txt(m["brief"])
    for key, value in (m.get("ld") or {}).items():
        if value is None:
            d.pop(key, None)
        else:
            d[key] = value
    order = ["@context", "@type", "name", "alternateName", "url", "image", "inLanguage", "isAccessibleForFree",
             "isPartOf", "temporalCoverage", "datePublished", "creator", "contributor", "version", "genre",
             "publisher", "locationCreated", "size", "identifier", "sameAs", "holdingArchive", "description"]
    return dict(sorted(d.items(), key=lambda kv: (order.index(kv[0]) if kv[0] in order else 99, kv[0])))

# ---------------------------------------------------------------- the walk
def walk(maps, rooms):
    """Previous and next for every map: through its room, then on to the neighbouring room."""
    by_id = {m["id"]: m for m in maps}
    links = {}
    for r in rooms.values():
        for i, mid in enumerate(r["maps"]):
            if i:
                p = by_id[r["maps"][i - 1]]
                prev = (p["id"] + ".html", "← Previous", txt(p["title"]))
            elif r["n"] > 1:
                prev = (rooms[r["n"] - 1]["file"], "← Previous room", room_title(r["n"] - 1, rooms))
            else:
                prev = None
            if i + 1 < len(r["maps"]):
                n = by_id[r["maps"][i + 1]]
                nxt = (n["id"] + ".html", "Next →", txt(n["title"]))
            elif r["n"] + 1 in rooms:
                nxt = (rooms[r["n"] + 1]["file"], "Next room →", room_title(r["n"] + 1, rooms))
            else:
                nxt = None
            links[mid] = (prev, nxt)
    return links

def nav(prev, nxt, extra_class=""):
    out = ['<nav class="mapnav%s"%s>' % (extra_class, ' aria-label="Rooms"' if extra_class else "")]
    for cls, link in (("prev", prev), ("next", nxt)):
        if link:
            out.append('<a class="%s" href="%s"><span class="dir">%s</span><span class="nt">%s</span></a>'
                       % (cls, link[0], link[1], esc(link[2])))
    out.append("</nav>")
    return "".join(out)

# ---------------------------------------------------------------- pages
def map_page(m, rooms, links):
    room = rooms[m["room"]]
    desc = txt(m["brief"])
    page_title = "%s (%s) – %s" % (txt(m["title"]), m.get("title_date", m["date_label"]), COLLECTION)
    url = BASE + m["id"] + ".html"
    img = m["image"]
    plate = ('<div class="plateview"%s><img alt="%s" src="%s" width="%d" height="%d"/></div>'
             % ((' data-dzi="%s"' % img["dzi"]) if img.get("dzi") else "",
                esc(img["alt"]), img["src"], img["width"], img["height"]))
    prose = m["prose"]
    if m.get("deccan"):
        prose += ('<p class="subhead">In the Deccan timeline</p><p>%s</p>'
                  % " · ".join('<a href="%s/deccan/#%s">%s</a>' % (SITE, esc(d["id"]), d["label"])
                               for d in m["deccan"]))
    if m.get("basalt"):
        prose += ('<p class="subhead">In Basalt and Laterite</p><p>%s</p>'
                  % " · ".join('<a href="%s/basalt-and-laterite/#%s">%s</a>' % (SITE, esc(d["id"]), d["label"])
                               for d in m["basalt"]))
    rows = "\n".join("<dt>%s</dt><dd>%s</dd>" % (k, v) for k, v in m["meta"])
    if any("davidrumsey.com" in v for k, v in m["meta"]):
        rows += "\n" + RUMSEY_CREDIT
    ld = json.dumps(structured(m), ensure_ascii=False, separators=(",", ":"))
    body = """<div class="wrap">
<p><a class="back" href="%s">← %s</a></p>
<div class="detail">
%s
<div>
<h1>%s</h1>
<p class="byline">%s</p>
<div class="brief">%s</div>
<div class="prose">%s</div>
<dl class="meta">
%s
</dl>
</div>
</div>
%s
</div>
%s""" % (room["file"], esc(room["title"]), plate, m["title"], m["byline"], m["brief"], prose, rows,
         nav(*links[m["id"]]), ARROW_SCRIPT)
    return page(m["id"] + ".html",
                head(page_title, desc, url, BASE + img["src"],
                     extra='<script type="application/ld+json">%s</script>' % ld),
                body, viewer=True)

def room_page(r, rooms, by_id):
    plates = []
    for mid in r["maps"]:
        m = by_id[mid]
        plates.append('<a class="plate" href="%s.html"><span class="mat"><img alt="%s" loading="lazy" '
                      'src="img/thumb/%s.jpg" width="%d" height="%d"/></span><span class="cap">'
                      '<span class="t">%s</span><span class="by">%s</span><span class="d">%s</span></span></a>'
                      % (mid, esc(m["thumb"]["alt"]), mid, m["thumb"]["width"], m["thumb"]["height"],
                         m["short"], m["byline"], m["date_label"]))
    prev = (rooms[r["n"] - 1]["file"], "← Previous room", room_title(r["n"] - 1, rooms)) if r["n"] - 1 in rooms else None
    nxt = (rooms[r["n"] + 1]["file"], "Next room →", room_title(r["n"] + 1, rooms)) if r["n"] + 1 in rooms else None
    page_title = "%s – %s" % (r["file"][3:-5].replace("-", " "), COLLECTION)
    body = """<div class="wrap">
<p><a class="back" href="index.html">← All rooms</a></p>
<div class="chapter-head measure">
<p class="eyebrow">%s</p>
<h1>%s</h1>
<p class="intro">%s</p>
</div>
<div class="grid">%s</div>
%s
</div>""" % (r.get("eyebrow", "Room %02d" % r["n"]), r["title"], r["intro"], " ".join(plates),
             nav(prev, nxt, " roomnav"))
    first = by_id[r["maps"][0]]
    return page(r["file"], head(page_title, r["description"], BASE + r["file"],
                                BASE + first["image"]["src"], og_type="website"), body)

def refresh_masthead(rel):
    """The four hand-written pages (index, reading, places, about) keep everything
    of their own - their heads, their page scripts, their bodies. Only the shared
    masthead is written from here, so a change to SECTIONS reaches every page."""
    path = os.path.join(ROOT, rel)
    text = original = open(path, encoding="utf-8").read()
    text, n = re.subn(r'<div class="masthead">.*?</div>', lambda m: MASTHEAD, text, count=1, flags=re.S)
    if n != 1:
        raise SystemExit("%s: could not find the masthead to replace" % rel)
    if text != original:
        open(path, "w", encoding="utf-8").write(text)
        return True
    return False

HAND_WRITTEN = ["index.html", "reading.html", "places.html", "about.html"]

def assemble():
    """The data files are built from the Markdown in ../curiosities-text when it is there."""
    script = os.path.join(ROOT, "..", "curiosities-text", "tools", "assemble.py")
    if os.path.exists(script):
        import subprocess
        if subprocess.run([sys.executable, script, "gaze"]).returncode:
            raise SystemExit("curiosities-text: assemble failed")

def main():
    assemble()
    maps = load("maps.js", "GAZE_MAPS")
    rooms = {r["n"]: r for r in load("rooms.js", "GAZE_ROOMS")}
    by_id = {m["id"]: m for m in maps}
    listed = [mid for r in rooms.values() for mid in r["maps"]]
    missing = [m["id"] for m in maps if m["id"] not in listed]
    unknown = [mid for mid in listed if mid not in by_id]
    if missing or unknown:
        raise SystemExit("rooms and maps disagree: not hung %s; no such map %s" % (missing, unknown))
    links = walk(maps, rooms)
    for m in maps:
        map_page(m, rooms, links)
    for r in rooms.values():
        room_page(r, rooms, by_id)
    touched = [rel for rel in HAND_WRITTEN
               if os.path.exists(os.path.join(ROOT, rel)) and refresh_masthead(rel)]
    print("european gaze: %d map pages, %d room pages written; mastheads refreshed on %d hand-written pages"
          % (len(maps), len(rooms), len(touched)))

if __name__ == "__main__":
    main()
