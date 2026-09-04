# The European Gaze on India

Part of [Curiosities](https://naniwadekar.com/). A non-commercial study
collection of European maps of India, 1519–1946, arranged in seven rooms.

## Where the content lives

The text is Markdown in the `curiosities-text` repository beside this one:
`maps/<id>.md`, one per map (catalogue metadata in the front matter, then the
brief and the commentary), and `maps/rooms/`, the seven rooms with their
introductions and hanging order. The build assembles them into

    data/maps.js     one record per map: title, byline, brief, prose, the
                     catalogue metadata as an ordered list of rows, the image,
                     the links into the Deccan timeline, and the room it hangs in
    data/rooms.js    the seven rooms, their intros, and the maps in each, in
                     hanging order

which are generated and not edited by hand. Everything else about a map page — the head,
the structured data, the masthead, the previous/next walk through the rooms, the
footer, the scripts — is derived.

## Images and type

`img/display` and `img/thumb` are what the pages show; `img/dzi` holds the deep-zoom
tiles. The full-resolution masters live in `img/` on the maintainer's machine only
and are ignored by git (the deployed site has to stay under GitHub Pages' 1 GB).
Every Rumsey image carries the credit its CC BY-NC-SA 3.0 licence asks for; the
build adds that row from the source record. Type is self-hosted from
`/assets/fonts/` in the sister repository, so no page calls a third party.

## Adding a map

The step-by-step recipe (images, tiles, the record, the room, the sitemap, the service
worker) is in `mihirnani.github.io/MAINTAINING.md`, with the other routines for the site.

## Building

    python3 build.py

writes all 68 map pages and all 7 room pages, and refreshes the shared masthead
on the four hand-written pages (`index`, `reading`, `places`, `about`), which
keep their own heads, scripts and bodies.

**The map and room pages and the data files are generated. Do not edit them.** To
change a map, edit `../curiosities-text/maps/<id>.md` and run the build. To add a
map, add a file there and list its id in the right room in `maps/rooms/`.

The data was lifted out of the hand-written pages in August 2026 (commit `9c39139`,
which holds the one-time script that did it) and moved on to the Markdown repository
in September.

The sister repository's atlas reads `data/maps.js` directly
(`mihirnani.github.io/tools/atlas_gaze.py`), so the map layer of the atlas
now comes from this data rather than from parsing these pages.
