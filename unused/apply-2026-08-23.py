#!/usr/bin/env python3
"""One-off edit script for Curiosities: run from the GitHub folder. `--dry` reports without writing."""
import sys, os, re, json, glob, io
DRY = "--dry" in sys.argv
ROOT = os.path.expanduser(sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else ".")
EG = os.path.join(ROOT, "european-gaze"); SITE = os.path.join(ROOT, "mihirnani.github.io")
changed = []
def rd(p): return io.open(p, encoding="utf-8").read()
def wr(p, s, old=None):
    if old is not None and old == s: return
    changed.append(os.path.relpath(p, ROOT))
    if not DRY:
        io.open(p + ".new", "w", encoding="utf-8", newline="").write(s); os.replace(p + ".new", p)

NEW_G = "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html"
NEW_H = "1911__Deccan__Murray-Handbook__Hampi-Ruins-of-Vijayanagar.html"

# ---------- 1. Deccan data: related_maps for the two new plates ----------
ep = os.path.join(SITE, "deccan", "data", "entries.js")
raw = rd(ep)
head, body = raw[:raw.index("[")], raw[raw.index("["):raw.rstrip().rstrip(";").rindex("]") + 1]
tail = raw[raw.index(body) + len(body):]
entries = json.loads(body)
assert json.dumps(entries, indent=1, ensure_ascii=False) == body, "entries.js is not in json.dumps(indent=1) form; refusing to rewrite"
ADD = {NEW_G: ["golconda-diamonds", "hyderabad-founded-1591", "company-factories", "bijapur-golconda-fall-1687"],
       NEW_H: ["founding-of-vijayanagara-1336", "hampi-virupaksha", "vijayanagara-city", "domingos-paes", "talikota-1565"]}
byid = {e["id"]: e for e in entries}
for fn, ids in ADD.items():
    for i in ids:
        e = byid[i]; e.setdefault("related_maps", [])
        if fn not in e["related_maps"]: e["related_maps"].append(fn)
wr(ep, head + json.dumps(entries, indent=1, ensure_ascii=False) + tail, raw)

# ---------- 2. Deccan: open map links in a new tab ----------
ap = os.path.join(SITE, "deccan", "app.js"); s = rd(ap)
s2 = s.replace("""'<a href="' + EG + fn + '">'""", """'<a href="' + EG + fn + '" target="_blank" rel="noopener">'""")
s2 = s2.replace("""<a href="' + EG + '">map collection</a>""", """<a href="' + EG + '" target="_blank" rel="noopener">map collection</a>""")
wr(ap, s2, s)
for f in ["index.html", "about.html"]:
    p = os.path.join(SITE, "deccan", f); s = rd(p)
    s2 = s.replace('<a class="navlink" href="https://naniwadekar.com/european-gaze/">Maps</a>', '<a class="navlink" href="https://naniwadekar.com/european-gaze/" target="_blank" rel="noopener">Maps</a>')
    s2 = s2.replace('Companion to <a href="https://naniwadekar.com/european-gaze/">', 'Companion to <a href="https://naniwadekar.com/european-gaze/" target="_blank" rel="noopener">')
    s2 = s2.replace('sixty-five European maps of India from 1519 to 1946', 'sixty-seven European maps of India from 1519 to 1946')
    s2 = s2.replace('<a href="https://naniwadekar.com/european-gaze/">The European Gaze on India</a>, sixty-seven', '<a href="https://naniwadekar.com/european-gaze/" target="_blank" rel="noopener">The European Gaze on India</a>, sixty-seven')
    wr(p, s2, s)
swp = os.path.join(SITE, "deccan", "deccan-sw.js")
if os.path.exists(swp) and "--skip-deccan-sw" not in sys.argv:
    s = rd(swp); m = re.search(r'const VERSION = "v(\d+)"', s)
    if m: wr(swp, s.replace(m.group(0), 'const VERSION = "v%d"' % (int(m.group(1)) + 1)), s)

# ---------- 3. Root page count ----------
p = os.path.join(SITE, "index.html"); s = rd(p)
wr(p, s.replace("Sixty-five European maps of India, 1519 to 1946", "Sixty-seven European maps of India, 1519 to 1946"), s)

# ---------- 4. Essays feed: stylesheet PI ----------
PI = '<?xml-stylesheet type="text/xsl" href="feed.xsl"?>'
p = os.path.join(SITE, "essays", "build.py"); s = rd(p)
wr(p, s.replace("""feed = ['<?xml version="1.0" encoding="UTF-8"?>',\n""", """feed = ['<?xml version="1.0" encoding="UTF-8"?>', '%s',\n""" % PI), s)
p = os.path.join(SITE, "essays", "feed.xml"); s = rd(p)
if PI not in s: wr(p, s.replace('<?xml version="1.0" encoding="UTF-8"?>\n', '<?xml version="1.0" encoding="UTF-8"?>\n' + PI + "\n", 1), s)

# ---------- 5. Map plates: theme key bug ----------
BAD = "<script>(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();</script>"
GOOD = """<script>(function(){
  var theme='light';
  try {
    var saved=localStorage.getItem('root-theme');
    if(saved==='light'||saved==='dark') theme=saved;
    else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches) theme='dark';
  } catch(e) {}
  document.documentElement.setAttribute('data-theme',theme);
})();</script>"""
plates = sorted(glob.glob(os.path.join(EG, "1*.html")) + glob.glob(os.path.join(EG, "c1*.html")))
nfix = 0
for p in plates:
    s = rd(p)
    if BAD in s: nfix += 1; wr(p, s.replace(BAD, GOOD), s)
print("theme fix:", nfix, "plates")

# ---------- 6. Map plates: 'In the Deccan timeline' back-links from the data ----------
entries.sort(key=lambda e: (e["period"], 1 if e.get("coda") else 0, e.get("coda_order", 0), e["year"], e["id"]))
back = {}
for e in entries:
    for fn in e.get("related_maps", []): back.setdefault(fn, []).append(e)
SEC = re.compile(r'<p class="subhead">In the Deccan timeline</p><p>.*?</p>', re.S)
def esc(t): return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
for p in plates:
    fn = os.path.basename(p); s = rd(p)
    lst = back.get(fn, [])
    sec = '<p class="subhead">In the Deccan timeline</p><p>' + " · ".join('<a href="https://naniwadekar.com/deccan/#%s">%s (%s)</a>' % (e["id"], esc(e["title"]), esc(e["date_label"])) for e in lst) + "</p>" if lst else ""
    m = SEC.search(s)
    if m:
        if m.group(0) != sec:
            if DRY: print("  backlinks differ:", fn, "\n    old:", re.sub("<[^>]+>", "", m.group(0))[:200], "\n    new:", re.sub("<[^>]+>", "", sec)[:200])
            s2 = s[:m.start()] + sec + s[m.end():]
            wr(p, s2, s)
    elif sec:
        # insert at the end of the prose block, before the meta list
        anchor = '</div>\n    <dl class="meta">'
        if anchor not in s: print("  !! no anchor for backlinks in", fn); continue
        s2 = s.replace(anchor, sec + "\n" + anchor, 1); wr(p, s2, s)
        if DRY: print("  backlinks added:", fn, "->", [e["id"] for e in lst])
missing = [fn for fn in back if not os.path.exists(os.path.join(EG, fn))]
if missing: print("  !! related_maps pointing at missing plates:", missing)

# ---------- 7. Room grids, neighbour navigation, counts, sitemap, service worker ----------
def grid_item(fn, title, alt, year, w, h):
    return '<a class="plate" href="%s"><span class="mat"><img alt="%s" loading="lazy" src="img/thumb/%s.jpg" width="%d" height="%d"/></span><span class="cap"><span class="t">%s</span><span class="d">%s</span></span></a>' % (fn, alt, fn[:-5], w, h, title, year)
G_ITEM = grid_item(NEW_G, "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan", "De Koninkryken van Golconda, Tanassari, Pegu en Aracam", "1706", 700, 475)
H_ITEM = grid_item(NEW_H, "Hampi: Ruins of Vijayanagar", "Hampi: Ruins of Vijayanagar", "1911", 525, 700)
p = os.path.join(EG, "02_Baroque-Mughals-and-Companies.html"); s = rd(p)
if NEW_G not in s:
    i = s.index('<a class="plate" href="1708__BayOfBengal'); wr(p, s[:i] + G_ITEM + s[i:], s)
p = os.path.join(EG, "04_Home-Ground-Bombay-and-Deccan.html"); s = rd(p)
if NEW_H not in s:
    i = s.index("</div>", s.index('href="1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html"')); wr(p, s[:i] + H_ITEM + s[i:], s)
# nav
p = os.path.join(EG, "1703__SEAsia__Sanson__India-and-Southeast-Asia.html"); s = rd(p)
wr(p, s.replace('<a class="next" href="1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html"><span class="dir">Next →</span><span class="nt">The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands</span></a>',
                '<a class="next" href="%s"><span class="dir">Next →</span><span class="nt">The Kingdoms of Golconda, Tenasserim, Pegu and Arakan</span></a>' % NEW_G), s)
p = os.path.join(EG, "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html"); s = rd(p)
wr(p, s.replace('<a class="prev" href="1703__SEAsia__Sanson__India-and-Southeast-Asia.html"><span class="dir">← Previous</span><span class="nt">India and Southeast Asia</span></a>',
                '<a class="prev" href="%s"><span class="dir">← Previous</span><span class="nt">The Kingdoms of Golconda, Tenasserim, Pegu and Arakan</span></a>' % NEW_G), s)
p = os.path.join(EG, "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html"); s = rd(p)
old = '<nav class="mapnav"><a class="prev" href="1893__Bombay__Bartholomew__Bombay-and-Environs.html"><span class="dir">← Previous</span><span class="nt">Bombay and Environs</span></a></nav>'
assert old in s or NEW_H in s
wr(p, s.replace(old, old[:-6] + '<a class="next" href="%s"><span class="dir">Next →</span><span class="nt">Hampi: Ruins of Vijayanagar</span></a></nav>' % NEW_H), s)
# counts
for f in ["index.html", "about.html"]:
    p = os.path.join(EG, f); s = rd(p)
    wr(p, s.replace("sixty-five", "sixty-seven").replace("Sixty-five", "Sixty-seven"), s)
# sitemap
p = os.path.join(EG, "sitemap.xml"); s = rd(p)
for fn in [NEW_G, NEW_H]:
    if fn not in s:
        s = s.replace("</urlset>", "  <url><loc>https://naniwadekar.com/european-gaze/%s</loc><lastmod>2026-08-23</lastmod><priority>0.6</priority></url>\n</urlset>" % fn)
wr(p, s, rd(p))
# service worker version
p = os.path.join(EG, "european-gaze-sw.js"); s = rd(p)
m = re.search(r'const VERSION = "v(\d+)"', s)
wr(p, s.replace(m.group(0), 'const VERSION = "v%d"' % (int(m.group(1)) + 1)), s)

print(("DRY RUN – would change" if DRY else "changed"), len(changed), "files")
for c in changed: print("  ", c)
