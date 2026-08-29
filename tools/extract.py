#!/usr/bin/env python3
"""One-time extractor: read the map pages and write data/maps.js and data/rooms.js.

Kept in the repository for provenance.  After the extraction the data files are
the source and build.py writes the pages; this script is not run again.
"""
import glob, html, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, ".."))

def one(pattern, text, what, path, flags=0, required=True):
    m = re.search(pattern, text, flags)
    if not m:
        if required:
            raise SystemExit("%s: could not find %s" % (path, what))
        return None
    return m

def parse_map(path):
    s = open(path, encoding="utf-8").read()
    fn = os.path.basename(path)
    rec = {"id": fn[:-5]}
    parts = rec["id"].split("__")
    rec["year"] = int(parts[0].lstrip("c"))
    rec["approx"] = parts[0].startswith("c")
    rec["region"] = parts[1]
    rec["maker"] = parts[2] if len(parts) > 3 else ""

    rec["title"] = one(r"<h1>(.*?)</h1>", s, "h1", path, re.S).group(1)
    rec["byline"] = one(r'<p class="byline">(.*?)</p>', s, "byline", path, re.S).group(1)
    rec["brief"] = one(r'<div class="brief">(.*?)</div>', s, "brief", path, re.S).group(1)

    plate = one(r'<div class="plateview"([^>]*)>\s*<img([^>]+?)/?>\s*</div>', s, "plateview", path, re.S)
    attrs = lambda blob: dict(re.findall(r'([a-z-]+)="([^"]*)"', blob))
    div_attrs, img_attrs = attrs(plate.group(1)), attrs(plate.group(2))
    rec["image"] = {"src": img_attrs["src"], "alt": img_attrs.get("alt", ""),
                    "width": int(img_attrs["width"]), "height": int(img_attrs["height"])}
    if div_attrs.get("data-dzi"):
        rec["image"]["dzi"] = div_attrs["data-dzi"]

    prose = one(r'<div class="prose">(.*?)</div>\s*<dl class="meta">', s, "prose", path, re.S).group(1)
    dec = re.search(r'<p class="subhead">In the Deccan timeline</p><p>(.*?)</p>\s*$', prose, re.S)
    rec["deccan"] = []
    if dec:
        prose = prose[:dec.start()]
        for href, label in re.findall(r'<a href="https://naniwadekar\.com/deccan/#([^"]+)">(.*?)</a>', dec.group(1)):
            rec["deccan"].append({"id": href, "label": label})
    rec["prose"] = prose.rstrip()

    meta = one(r'<dl class="meta">\s*(.*?)\s*</dl>', s, "meta list", path, re.S).group(1)
    rows = re.findall(r"<dt>(.*?)</dt><dd>(.*?)</dd>", meta, re.S)
    if len(rows) != meta.count("<dt>"):
        raise SystemExit("%s: metadata rows did not parse cleanly" % path)
    rec["meta"] = [[k, v] for k, v in rows]

    back = one(r'<a class="back" href="([^"]+)">←\s*(.*?)</a>', s, "back link", path, re.S)
    rec["room_file"], rec["room_label"] = back.group(1), back.group(2)

    nav = one(r'<nav class="mapnav">(.*?)</nav>', s, "mapnav", path, re.S).group(1)
    for cls in ("prev", "next"):
        m = re.search(r'<a class="%s" href="([^"]+)"><span class="dir">(.*?)</span>'
                      r'<span class="nt">(.*?)</span></a>' % cls, nav, re.S)
        rec[cls] = {"href": m.group(1), "dir": m.group(2), "title": m.group(3)} if m else None

    ld = one(r'<script type="application/ld\+json">(.*?)</script>', s, "json-ld", path, re.S).group(1)
    rec["ld"] = json.loads(ld)

    dm = one(r'<meta content="([^"]*)" name="description"\s*/?>', s, "description", path, 0, required=False) or \
         one(r'<meta name="description" content="([^"]*)"\s*/?>', s, "description", path, 0)
    desc = dm.group(1)
    rec["description"] = desc
    rec["page_title"] = one(r"<title>(.*?)</title>", s, "title tag", path, re.S).group(1)
    return rec

def parse_room(path):
    s = open(path, encoding="utf-8").read()
    fn = os.path.basename(path)
    m = re.search(r"<h1>(.*?)</h1>", s, re.S)
    intro = re.search(r'<p class="intro">(.*?)</p>', s, re.S)
    desc = re.search(r'<meta content="([^"]*)" name="description"', s)
    grid = {}
    for a in re.findall(r'<a class="plate".*?</a>', s, re.S):
        href = re.search(r'href="((?:c)?1\d{3}__[^"]+)\.html"', a).group(1)
        img = dict(re.findall(r'([a-z-]+)="([^"]*)"', re.search(r"<img([^>]+)>", a).group(1)))
        cap = re.search(r'<span class="t">(.*?)</span><span class="d">(.*?)</span>', a, re.S)
        grid[href] = {"short": cap.group(1), "date_label": cap.group(2),
                      "thumb": {"alt": img.get("alt", ""), "width": int(img["width"]), "height": int(img["height"])}}
    return {"n": int(fn[:2]), "file": fn, "title": m.group(1).strip() if m else fn[3:-5].replace("-", " "),
            "intro": intro.group(1).strip() if intro else "",
            "description": desc.group(1) if desc else "",
            "maps": list(grid), "grid": grid}

def main():
    maps = [parse_map(p) for p in sorted(glob.glob(os.path.join(ROOT, "1*.html")) +
                                         glob.glob(os.path.join(ROOT, "c1*.html")))]
    rooms = [parse_room(p) for p in sorted(glob.glob(os.path.join(ROOT, "0[0-9]_*.html")))]
    seen = {}
    for r in rooms:
        for i, mid in enumerate(r["maps"]):
            seen.setdefault(mid, (r["n"], i))
    for m in maps:
        m["room"] = seen.get(m["id"], (None, None))[0]
        for r in rooms:
            if m["id"] in r["grid"]:
                m.update(r["grid"][m["id"]])
                break
    for r in rooms:
        del r["grid"]
    missing = [m["id"] for m in maps if m["room"] is None]
    if missing:
        print("warning: not listed in any room:", missing, file=sys.stderr)
    os.makedirs(os.path.join(ROOT, "data"), exist_ok=True)
    with open(os.path.join(ROOT, "data", "maps.js"), "w", encoding="utf-8") as f:
        f.write("/* maps.js – edit the JSON between the brackets; keep this first line and the closing semicolon. */\n")
        f.write("window.GAZE_MAPS = " + json.dumps(maps, ensure_ascii=False, indent=1) + ";\n")
    with open(os.path.join(ROOT, "data", "rooms.js"), "w", encoding="utf-8") as f:
        f.write("/* rooms.js – the seven rooms and the maps hung in each, in order. */\n")
        f.write("window.GAZE_ROOMS = " + json.dumps(rooms, ensure_ascii=False, indent=1) + ";\n")
    print("extracted %d maps and %d rooms" % (len(maps), len(rooms)))

if __name__ == "__main__":
    main()
