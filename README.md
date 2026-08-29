# The European Gaze on India

Part of [Curiosities](https://naniwadekar.com/). A non-commercial study
collection of European maps of India, 1519–1946, arranged in seven rooms.

## Where the content lives

    data/maps.js     one record per map: title, byline, brief, prose, the
                     catalogue metadata as an ordered list of rows, the image,
                     the links into the Deccan timeline, and the room it hangs in
    data/rooms.js    the seven rooms, their intros, and the maps in each, in
                     hanging order

These two files are the collection. Everything else about a map page — the head,
the structured data, the masthead, the previous/next walk through the rooms, the
footer, the scripts — is derived.

## Building

    python3 build.py

writes all 68 map pages and all 7 room pages, and refreshes the shared masthead
on the four hand-written pages (`index`, `reading`, `places`, `about`), which
keep their own heads, scripts and bodies.

**The map and room pages are generated. Do not edit them.** To change a map, edit
its record in `data/maps.js` and run the build. To add a map, add a record and
list its id in the right room in `data/rooms.js`.

`tools/extract.py` is the one-time script that lifted the data out of the pages
in August 2026, kept for provenance; it is not run again.

The sister repository's atlas reads `data/maps.js` directly
(`mihirnani.github.io/atlas/tools/make_gaze.py`), so the map layer of the atlas
now comes from this data rather than from parsing these pages.
