/* places.js – the places index for The European Gaze on India.
   window.GAZE_PLACES is a JSON array; edit between the brackets and keep the closing semicolon.
   Each place: id, name, modern, kind, variants (older spellings), deccan (entries in the Deccan
   collection at https://naniwadekar.com/deccan/#id) and maps. Each map link carries `sources`:
   'deccan'  – the Deccan collection's related_maps field names this sheet for an entry at this place (see `via`);
   'notes'   – the sheet's own page text names the place (the spelling found is in `matched`);
   'region'  – only the sheet's filename region tag (Bombay, Malabar, Deccan) puts the place within its frame;
   'plate'   – the place was seen on the plate itself (the spelling read there is in `matched`).
   Built by a script (site-notes/build_places.py) from the page texts and the Deccan entries. On 2026-08-26 every
   notes- and region-only link was checked against the plate (kept ones carry 'plate' as well; the rest were removed)
   and places plainly seen on those 29 sheets were added with 'plate' alone. Deccan-sourced links are unchecked.
   Generated 2026-08-26. */
window.GAZE_PLACES = [
 {
  "id": "ahmadnagar",
  "name": "Ahmadnagar",
  "modern": "Ahmednagar (Ahilyanagar), Maharashtra",
  "kind": "city and kingdom",
  "variants": [
   "Ahmadnagar",
   "Ahmednagar",
   "Ahmednuggur",
   "Amednagar",
   "Ahmed-nagar"
  ],
  "deccan": [
   {
    "id": "ahmadnagar-nizam-shahis",
    "title": "Ahmadnagar",
    "date": "1490–1565"
   },
   {
    "id": "chand-bibi-1595",
    "title": "Chand Bibi and the siege of Ahmadnagar",
    "date": "1595–1600"
   },
   {
    "id": "akbar-ahmadnagar-1600",
    "title": "Akbar takes Ahmadnagar",
    "date": "August 1600"
   },
   {
    "id": "aurangzeb-dies-1707",
    "title": "Aurangzeb dies at Ahmadnagar",
    "date": "3 March 1707"
   }
  ],
  "maps": [
   {
    "file": "1600__India__Quad__India-Orientalis.html",
    "title": "India orientalis",
    "year": 1600,
    "date": "1600",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "akbar-ahmadnagar-1600"
    ],
    "matched": []
   },
   {
    "file": "1682__India__DuVal__Empire-du-Mogol.html",
    "title": "Empire du Mogol",
    "year": 1682,
    "date": "1682",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "akbar-ahmadnagar-1600",
     "aurangzeb-dies-1707"
    ],
    "matched": []
   },
   {
    "file": "1719__India__Chatelain__Genealogie-des-Empereurs-Mogols.html",
    "title": "Genealogy of the Mughal Emperors",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "aurangzeb-dies-1707"
    ],
    "matched": []
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Amednagur"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "ahmadnagar-nizam-shahis",
     "chand-bibi-1595"
    ],
    "matched": []
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ahmednuggur"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ahmednuggur"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ahmadnagar"
    ]
   }
  ]
 },
 {
  "id": "arcot",
  "name": "Arcot",
  "modern": "Arcot, Tamil Nadu",
  "kind": "fort and nawabi",
  "variants": [
   "Arcot",
   "Arcate",
   "Arkat"
  ],
  "deccan": [
   {
    "id": "carnatic-wars-arcot-1751",
    "title": "The Carnatic wars",
    "date": "1746–1763"
   }
  ],
  "maps": [
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "carnatic-wars-arcot-1751"
    ],
    "matched": []
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "carnatic-wars-arcot-1751"
    ],
    "matched": []
   },
   {
    "file": "1763__India__Dury__East-Indies.html",
    "title": "East Indies",
    "year": 1763,
    "date": "1763",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "carnatic-wars-arcot-1751"
    ],
    "matched": []
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Arcot"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Arcot"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Arcot"
    ]
   }
  ]
 },
 {
  "id": "aurangabad",
  "name": "Aurangabad",
  "modern": "Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
  "kind": "city",
  "variants": [
   "Aurangabad",
   "Aurungabad",
   "Aurengabad",
   "Sambhajinagar"
  ],
  "deccan": [
   {
    "id": "malik-ambar",
    "title": "Malik Ambar",
    "date": "c. 1548–1626"
   }
  ],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aureng Abad"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aureng Abat"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aurungabad"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aurungabad"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aurungabad"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aurungabad"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "malik-ambar"
    ],
    "matched": [
     "Aurangabad",
     "Aurungabad"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aurungabad"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aurungabad"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Aurangabad"
    ]
   }
  ]
 },
 {
  "id": "bangalore",
  "name": "Bangalore",
  "modern": "Bengaluru, Karnataka",
  "kind": "city",
  "variants": [
   "Bangalore",
   "Bengaluru",
   "Bangalur"
  ],
  "deccan": [
   {
    "id": "shahji-bhonsle",
    "title": "Shahji Bhonsle",
    "date": "1594–1664"
   }
  ],
  "maps": [
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bangalore"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bangalore"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Banglore"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bangalore"
    ]
   }
  ]
 },
 {
  "id": "bassein",
  "name": "Bassein",
  "modern": "Vasai, Maharashtra",
  "kind": "Portuguese fort-town",
  "variants": [
   "Bassein",
   "Baçaim",
   "Bacaim",
   "Vasai",
   "Baçaím"
  ],
  "deccan": [
   {
    "id": "bassein-1739",
    "title": "Bassein, 1739",
    "date": "February–May 1739"
   },
   {
    "id": "treaty-of-bassein-1802",
    "title": "Poona and the Treaty of Bassein",
    "date": "25 October – 31 December 1802"
   }
  ],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Baseim"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bassein"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bacaim"
    ]
   },
   {
    "file": "1764__Bombay__Bellin__Plan-de-Bombay.html",
    "title": "Plan de Bombay",
    "year": 1764,
    "date": "1764",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "bassein-1739"
    ],
    "matched": []
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "treaty-of-bassein-1802"
    ],
    "matched": []
   },
   {
    "file": "1810__Bombay__dApres-de-Mannevillette__Plan-du-Port-de-Bombay.html",
    "title": "Plan du Port de Bombay",
    "year": 1810,
    "date": "1810",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "bassein-1739",
     "treaty-of-bassein-1802"
    ],
    "matched": []
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bassein"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bassein"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bassein"
    ]
   }
  ]
 },
 {
  "id": "belgaum",
  "name": "Belgaum",
  "modern": "Belagavi, Karnataka",
  "kind": "city",
  "variants": [
   "Belgaum",
   "Belagavi",
   "Belgam"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Belgaum"
    ]
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Belgam"
    ]
   }
  ]
 },
 {
  "id": "bellary",
  "name": "Bellary",
  "modern": "Ballari, Karnataka",
  "kind": "city and district",
  "variants": [
   "Bellary",
   "Ballari",
   "Ballary"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ballari"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ballari"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bellary"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bellary"
    ]
   }
  ]
 },
 {
  "id": "bhima",
  "name": "The Bhima",
  "modern": "Bhima river",
  "kind": "river",
  "variants": [
   "Bhima",
   "Beema",
   "Bheema"
  ],
  "deccan": [],
  "maps": []
 },
 {
  "id": "bidar",
  "name": "Bidar",
  "modern": "Bidar, Karnataka",
  "kind": "city and fort",
  "variants": [
   "Bidar",
   "Beder",
   "Bedar",
   "Bider"
  ],
  "deccan": [
   {
    "id": "afaqi-dakhni-factions",
    "title": "Afaqis and Dakhnis",
    "date": "c. 1430–1500"
   },
   {
    "id": "bidar",
    "title": "Bidar",
    "date": "c. 1430–1619"
   },
   {
    "id": "move-to-bidar-1430",
    "title": "The move to Bidar",
    "date": "c. 1425–1432"
   },
   {
    "id": "mahmud-gawan",
    "title": "Mahmud Gawan",
    "date": "1453–1481"
   },
   {
    "id": "athanasius-nikitin",
    "title": "Afanasy Nikitin in the Deccan",
    "date": "c. 1469–1472"
   },
   {
    "id": "mahmud-gawan-madrasa",
    "title": "The Madrasa of Mahmud Gawan",
    "date": "1472"
   },
   {
    "id": "bahmani-collapse-1490s",
    "title": "The Bahmani collapse",
    "date": "1482–1528"
   },
   {
    "id": "bahmani-successor-sultanates",
    "title": "The Bahmani break-up",
    "date": "c. 1490–1518"
   }
  ],
  "maps": [
   {
    "file": "1525__India__Ptolemy-Grueninger__Tabula-Moderna-Indiae.html",
    "title": "Tab. Moderna Indiae",
    "year": 1525,
    "date": "1525",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "move-to-bidar-1430",
     "bahmani-successor-sultanates"
    ],
    "matched": []
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bider"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Beder"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Beder"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Beder"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Beder"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Beder"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bidar"
    ]
   }
  ]
 },
 {
  "id": "bijapur",
  "name": "Bijapur",
  "modern": "Vijayapura, Karnataka",
  "kind": "city",
  "variants": [
   "Bijapur",
   "Bejapoor",
   "Visiapour",
   "Visapor",
   "Visapour",
   "Beejapore",
   "Bejapore",
   "Bijapore",
   "Vijayapura"
  ],
  "deccan": [
   {
    "id": "bijapur-adil-shahis",
    "title": "Bijapur under the Adil Shahis",
    "date": "1490–1558"
   },
   {
    "id": "ibrahim-adil-shah-ii",
    "title": "Ibrahim Adil Shah II and the Kitab-i-Nauras",
    "date": "r. 1580–1627"
   },
   {
    "id": "gol-gumbaz",
    "title": "Gol Gumbaz",
    "date": "1656"
   }
  ],
  "maps": [
   {
    "file": "1596__India-Arabia__Linschoten__Southwest-Asia.html",
    "title": "South-west Asia: Arabia, the Red Sea and India",
    "year": 1596,
    "date": "1596",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "ibrahim-adil-shah-ii"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Bijapur",
     "Visiapour"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Visapour"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Visapour"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Visapour"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Visiapur"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Visiapur"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Visiapour"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bijapoor"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bijapoor"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bijapour"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "bijapur-adil-shahis",
     "ibrahim-adil-shah-ii",
     "gol-gumbaz"
    ],
    "matched": [
     "Bijapur",
     "Bejapoor"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Beejapoor"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Beejapoor"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bijapur"
    ]
   }
  ]
 },
 {
  "id": "bombay",
  "name": "Bombay",
  "modern": "Mumbai, Maharashtra",
  "kind": "city and harbour",
  "variants": [
   "Bombay",
   "Bombaim",
   "Bombaye",
   "Mumbai",
   "Bombain"
  ],
  "deccan": [
   {
    "id": "bombay-hereditary-offices-act-1874",
    "title": "The Watan Act",
    "date": "1874, in force 5 February 1875"
   }
  ],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bumbay"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bumbay"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombaim"
    ]
   },
   {
    "file": "1764__Bombay__Bellin__Plan-de-Bombay.html",
    "title": "Plan de Bombay",
    "year": 1764,
    "date": "1764",
    "room": "04",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1810__Bombay__dApres-de-Mannevillette__Plan-du-Port-de-Bombay.html",
    "title": "Plan du Port de Bombay",
    "year": 1810,
    "date": "1810",
    "room": "04",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "bombay-hereditary-offices-act-1874"
    ],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1893__Bombay__Bartholomew__Bombay-City-Plan.html",
    "title": "Bombay: City Plan",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1893__Bombay__Bartholomew__Bombay-and-Environs.html",
    "title": "Bombay and Environs",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Bombay"
    ]
   }
  ]
 },
 {
  "id": "burhanpur",
  "name": "Burhanpur",
  "modern": "Burhanpur, Madhya Pradesh",
  "kind": "city",
  "variants": [
   "Burhanpur",
   "Brampour",
   "Burhampur",
   "Boorhanpoor",
   "Brampur"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Brampore"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Burhanpoor"
    ]
   }
  ]
 },
 {
  "id": "calicut",
  "name": "Calicut",
  "modern": "Kozhikode, Kerala",
  "kind": "port",
  "variants": [
   "Calicut",
   "Calecut",
   "Kozhikode",
   "Callicut",
   "Calecute",
   "Calicute"
  ],
  "deccan": [
   {
    "id": "calicut-1498",
    "title": "The Portuguese at Calicut",
    "date": "20 May 1498"
   }
  ],
  "maps": [
   {
    "file": "1519__IndianOcean__Hollanda-Reinel__Folio-3-recto-North-Indian-ocean.html",
    "title": "Northern Indian Ocean with Arabia and India",
    "year": 1519,
    "date": "1519",
    "room": "06",
    "sources": [
     "deccan"
    ],
    "via": [
     "calicut-1498"
    ],
    "matched": []
   },
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "calicut-1498"
    ],
    "matched": [
     "Calicut",
     "Calecut"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Callecut"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Composite.html",
    "title": "Map of the Province of Malabar",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calicut"
    ]
   }
  ]
 },
 {
  "id": "cape-comorin",
  "name": "Cape Comorin",
  "modern": "Kanyakumari, Tamil Nadu",
  "kind": "cape",
  "variants": [
   "Cape Comorin",
   "Comorin",
   "Kanyakumari",
   "Kanniyakumari",
   "Comori"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "C. Comeri"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "C. Commoryn"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cap de Comorin"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "C. Comorin"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "C. Comorin"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cap. Comorin"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Cape Comorin",
     "Comorin"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Cape Comorin",
     "Comorin"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cape Comorin"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cape Comorin"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Comorin"
    ]
   }
  ]
 },
 {
  "id": "carnatic",
  "name": "The Carnatic",
  "modern": "Carnatic (Karnataka coastal plain, Tamil Nadu)",
  "kind": "region",
  "variants": [
   "Carnatic",
   "Carnatick",
   "Karnatak",
   "Carnate"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Carnate"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Carnate"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Carnate"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Carnate"
    ]
   },
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Karnatic"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Carnatic"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Carnatic"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Carnatic"
    ]
   }
  ]
 },
 {
  "id": "ceylon",
  "name": "Ceylon",
  "modern": "Sri Lanka",
  "kind": "island",
  "variants": [
   "Ceylon",
   "Ceilan",
   "Zeilan",
   "Sri Lanka",
   "Taprobana",
   "Seylan"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1597__IndianOcean__Ortelius__Erythraei-Maris-Periplus.html",
    "title": "The Periplus of the Erythraean Sea",
    "year": 1597,
    "date": "1597",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Taprobana"
    ]
   },
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceilam"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceilan"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ceylon"
    ]
   }
  ]
 },
 {
  "id": "chaul",
  "name": "Chaul",
  "modern": "Chaul (Revdanda), Maharashtra",
  "kind": "port",
  "variants": [
   "Chaul",
   "Chaoul",
   "Cheul",
   "Revdanda"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Chaul"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Chaul"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Choul"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Choul"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Chaul"
    ]
   },
   {
    "file": "1764__Bombay__Bellin__Plan-de-Bombay.html",
    "title": "Plan de Bombay",
    "year": 1764,
    "date": "1764",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Chaul"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Choul"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Choul"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Chaul"
    ]
   }
  ]
 },
 {
  "id": "cochin",
  "name": "Cochin",
  "modern": "Kochi, Kerala",
  "kind": "port",
  "variants": [
   "Cochin",
   "Kochi",
   "Cochim"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Composite.html",
    "title": "Map of the Province of Malabar",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Sheet-1.html",
    "title": "Map of the Province of Malabar – Sheet 1",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cochin"
    ]
   }
  ]
 },
 {
  "id": "coromandel",
  "name": "Coromandel",
  "modern": "Coromandel coast, Tamil Nadu and Andhra Pradesh",
  "kind": "coastal region",
  "variants": [
   "Coromandel",
   "Choromandel",
   "Cormandel"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cormanel"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel Coast"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel Coast"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Coromandel"
    ]
   }
  ]
 },
 {
  "id": "cuddapah",
  "name": "Cuddapah",
  "modern": "Kadapa, Andhra Pradesh",
  "kind": "city",
  "variants": [
   "Cuddapah",
   "Kadapa",
   "Cudapah"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cadapa"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cadapa"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cuddapa"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cuddapah"
    ]
   }
  ]
 },
 {
  "id": "daman",
  "name": "Daman",
  "modern": "Daman, Dadra and Nagar Haveli and Daman and Diu",
  "kind": "Portuguese enclave",
  "variants": [
   "Daman",
   "Damão",
   "Damaon",
   "Damaun"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Damon"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Damon"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Daman"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Daman"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Damaun"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Daman"
    ]
   },
   {
    "file": "1946__Ministerio-das-Colonias__Goa-Daman-Diu.html",
    "title": "Carta demográfica do Estado da Índia – Goa, Damão and Diu",
    "year": 1946,
    "date": "1946",
    "room": "07",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Daman",
     "Damão"
    ]
   }
  ]
 },
 {
  "id": "daulatabad",
  "name": "Daulatabad",
  "modern": "Daulatabad (Devagiri), Maharashtra",
  "kind": "hill fort",
  "variants": [
   "Daulatabad",
   "Dowlatabad",
   "Deogir",
   "Devagiri",
   "Doltabad",
   "Dowletabad"
  ],
  "deccan": [
   {
    "id": "tughluq-daulatabad-1327",
    "title": "Tughluq moves the capital to Daulatabad",
    "date": "1327 · Prologue"
   },
   {
    "id": "fall-of-ahmadnagar-1636",
    "title": "The end of Ahmadnagar",
    "date": "1636"
   }
  ],
  "maps": [
   {
    "file": "1654__India__Sanson__India-Below-and-Beyond-the-Ganges.html",
    "title": "India below and beyond the Ganges, or the Empire of the Great Mogul",
    "year": 1654,
    "date": "1654",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "fall-of-ahmadnagar-1636"
    ],
    "matched": []
   },
   {
    "file": "1682__India__DuVal__Empire-du-Mogol.html",
    "title": "Empire du Mogol",
    "year": 1682,
    "date": "1682",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "fall-of-ahmadnagar-1636"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Doltabad"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Douli Abad"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Dultabat"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Dowlatabad"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Dowlatabad"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "tughluq-daulatabad-1327"
    ],
    "matched": []
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Dowlutabad"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Daulatabad"
    ]
   }
  ]
 },
 {
  "id": "deccan",
  "name": "The Deccan",
  "modern": "The Deccan plateau",
  "kind": "region",
  "variants": [
   "Deccan",
   "Decan",
   "Dekhan",
   "Dekkan",
   "Dakhan"
  ],
  "deccan": [
   {
    "id": "deccan-famine-1630",
    "title": "The Deccan famine of 1630–32",
    "date": "1630–1632"
   }
  ],
  "maps": [
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Dacan"
    ]
   },
   {
    "file": "1654__India__Sanson__India-Below-and-Beyond-the-Ganges.html",
    "title": "India below and beyond the Ganges, or the Empire of the Great Mogul",
    "year": 1654,
    "date": "1654",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "deccan-famine-1630"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Deccan",
     "Decan"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Decan"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Decam"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Decan"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Deccan"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan",
     "notes",
     "region"
    ],
    "via": [
     "deccan-famine-1630"
    ],
    "matched": [
     "Deccan"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "region",
     "plate"
    ],
    "via": [],
    "matched": []
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "region",
     "plate"
    ],
    "via": [],
    "matched": []
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "region",
     "plate"
    ],
    "via": [],
    "matched": []
   }
  ]
 },
 {
  "id": "dharwar",
  "name": "Dharwar",
  "modern": "Dharwad, Karnataka",
  "kind": "city",
  "variants": [
   "Dharwar",
   "Dharwad",
   "Darwar"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Darwar"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Darwar"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Darwar"
    ]
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Dharwar"
    ]
   }
  ]
 },
 {
  "id": "diu",
  "name": "Diu",
  "modern": "Diu",
  "kind": "Portuguese enclave",
  "variants": [
   "Diu",
   "Dio"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Diu"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Diu"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Diu"
    ]
   },
   {
    "file": "1946__Ministerio-das-Colonias__Goa-Daman-Diu.html",
    "title": "Carta demográfica do Estado da Índia – Goa, Damão and Diu",
    "year": 1946,
    "date": "1946",
    "room": "07",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Diu"
    ]
   }
  ]
 },
 {
  "id": "berar",
  "name": "Ellichpur / Berar",
  "modern": "Amravati division (Berar), Maharashtra",
  "kind": "province",
  "variants": [
   "Berar",
   "Ellichpur",
   "Elichpur",
   "Ellichpoor",
   "Amravati",
   "Amraoti"
  ],
  "deccan": [
   {
    "id": "berar-assignment-1853",
    "title": "The Berar assignment",
    "date": "21 May 1853"
   },
   {
    "id": "cotton-boom-1861",
    "title": "The cotton boom and bust",
    "date": "1861–1865"
   }
  ],
  "maps": [
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Berar"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Berar"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "berar-assignment-1853"
    ],
    "matched": []
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "cotton-boom-1861"
    ],
    "matched": []
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "berar-assignment-1853",
     "cotton-boom-1861"
    ],
    "matched": [
     "Berar"
    ]
   }
  ]
 },
 {
  "id": "ellora",
  "name": "Ellora",
  "modern": "Ellora caves, Maharashtra",
  "kind": "cave temples",
  "variants": [
   "Ellora",
   "Elora",
   "Verul"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Ellora"
    ]
   }
  ]
 },
 {
  "id": "goa",
  "name": "Goa",
  "modern": "Goa (Old Goa / Velha Goa and Panaji)",
  "kind": "Portuguese capital",
  "variants": [
   "Goa",
   "Velha Goa",
   "Old Goa",
   "Goa Velha",
   "Panaji",
   "Panjim"
  ],
  "deccan": [
   {
    "id": "portuguese-goa-1510",
    "title": "Albuquerque takes Goa",
    "date": "25 November 1510"
   }
  ],
  "maps": [
   {
    "file": "1519__IndianOcean__Hollanda-Reinel__Folio-3-recto-North-Indian-ocean.html",
    "title": "Northern Indian Ocean with Arabia and India",
    "year": 1519,
    "date": "1519",
    "room": "06",
    "sources": [
     "deccan"
    ],
    "via": [
     "portuguese-goa-1510"
    ],
    "matched": []
   },
   {
    "file": "1596__India-Arabia__Linschoten__Southwest-Asia.html",
    "title": "South-west Asia: Arabia, the Red Sea and India",
    "year": 1596,
    "date": "1596",
    "room": "01",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "portuguese-goa-1510"
    ],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   },
   {
    "file": "1946__Ministerio-das-Colonias__Goa-Daman-Diu.html",
    "title": "Carta demográfica do Estado da Índia – Goa, Damão and Diu",
    "year": 1946,
    "date": "1946",
    "room": "07",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Goa"
    ]
   }
  ]
 },
 {
  "id": "godavari",
  "name": "The Godavari",
  "modern": "Godavari river",
  "kind": "river",
  "variants": [
   "Godavari",
   "Godavery",
   "Godaveri",
   "Godavery"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Godavery River"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Godavery R."
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "R. Godavery"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Godavery R."
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "R. Godavari"
    ]
   }
  ]
 },
 {
  "id": "golconda",
  "name": "Golconda",
  "modern": "Golconda fort, Hyderabad, Telangana",
  "kind": "fort and kingdom",
  "variants": [
   "Golconda",
   "Golkonda",
   "Golconde",
   "Golcondæ",
   "Golchonda",
   "Golcunda"
  ],
  "deccan": [
   {
    "id": "golconda-diamonds",
    "title": "Golconda and its diamonds",
    "date": "1518–1590"
   },
   {
    "id": "bijapur-golconda-fall-1687",
    "title": "Aurangzeb takes Bijapur and Golconda",
    "date": "1686–1687"
   },
   {
    "id": "madanna-akkanna",
    "title": "Madanna and Akkanna at Golconda",
    "date": "c. 1674–1686"
   }
  ],
  "maps": [
   {
    "file": "1570__India__Ortelius__Indiae-Orientalis.html",
    "title": "Indiae Orientalis",
    "year": 1570,
    "date": "1570",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "golconda-diamonds"
    ],
    "matched": []
   },
   {
    "file": "1682__India__DuVal__Empire-du-Mogol.html",
    "title": "Empire du Mogol",
    "year": 1682,
    "date": "1682",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "bijapur-golconda-fall-1687",
     "madanna-akkanna"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "golconda-diamonds",
     "bijapur-golconda-fall-1687",
     "madanna-akkanna"
    ],
    "matched": [
     "Golconda",
     "Golcondæ",
     "Golchonda"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconde"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconde"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconda"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golkonda"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golkonda"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconda"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconda"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconda"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconda"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "bijapur-golconda-fall-1687"
    ],
    "matched": []
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golconda"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Golkondah"
    ]
   }
  ]
 },
 {
  "id": "gujarat",
  "name": "Gujarat",
  "modern": "Gujarat",
  "kind": "region and state",
  "variants": [
   "Gujarat",
   "Guzerat",
   "Guzerate",
   "Guzarat",
   "Guzzerat",
   "Gujerat",
   "Cambaia"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Guzurat"
    ]
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Guzaratæ"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Guzarat"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Guzarat"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Guzerat"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Gujarat",
     "Guzerate"
    ]
   }
  ]
 },
 {
  "id": "gulbarga",
  "name": "Gulbarga",
  "modern": "Kalaburagi (Gulbarga), Karnataka",
  "kind": "city",
  "variants": [
   "Gulbarga",
   "Kalaburagi",
   "Calberga",
   "Culbarga",
   "Kulbarga"
  ],
  "deccan": [
   {
    "id": "gulbarga",
    "title": "Gulbarga",
    "date": "1347–c. 1430"
   },
   {
    "id": "hasan-gangu-bahmani-1347",
    "title": "The Bahmani revolt",
    "date": "3 August 1347"
   },
   {
    "id": "firuz-shah-bahmani",
    "title": "Firuz Shah Bahmani",
    "date": "r. 1397–1422"
   },
   {
    "id": "gesudaraz-gulbarga",
    "title": "Gesudaraz at Gulbarga",
    "date": "1400–1422"
   },
   {
    "id": "dakhni-sufi-shrines",
    "title": "Dakhni",
    "date": "c. 1400–1700"
   }
  ],
  "maps": [
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calberga"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calberga"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calberga"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Calberga"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "gulbarga",
     "dakhni-sufi-shrines"
    ],
    "matched": []
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Culburga"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kulburga"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kulbarga"
    ]
   }
  ]
 },
 {
  "id": "hyderabad",
  "name": "Hyderabad",
  "modern": "Hyderabad, Telangana",
  "kind": "city",
  "variants": [
   "Hyderabad",
   "Haiderabad",
   "Hydrabad",
   "Heiderabad",
   "Bagnagar",
   "Bhagnagar",
   "Bhagyanagar"
  ],
  "deccan": [
   {
    "id": "hyderabad-founded-1591",
    "title": "Hyderabad founded",
    "date": "1591"
   },
   {
    "id": "subsidiary-alliance-1798",
    "title": "The subsidiary alliance",
    "date": "1 September 1798"
   },
   {
    "id": "hyderabad-residency",
    "title": "The Hyderabad Residency",
    "date": "1803–1820s"
   },
   {
    "id": "bussy-hyderabad",
    "title": "Bussy and the French at Hyderabad",
    "date": "1751–1758, Circars to 1766"
   },
   {
    "id": "salar-jang-hyderabad",
    "title": "Salar Jang remakes Hyderabad",
    "date": "1853–1875, ministry to 1883"
   }
  ],
  "maps": [
   {
    "file": "1623__India__Mercator-Hondius__India-Orientalis.html",
    "title": "India Orientalis",
    "year": 1623,
    "date": "1623",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "hyderabad-founded-1591"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "hyderabad-founded-1591"
    ],
    "matched": [
     "Hyderabad"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Heiderabat"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Badnagar"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "bussy-hyderabad"
    ],
    "matched": []
   },
   {
    "file": "1763__India__Dury__East-Indies.html",
    "title": "East Indies",
    "year": 1763,
    "date": "1763",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "bussy-hyderabad"
    ],
    "matched": []
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "subsidiary-alliance-1798"
    ],
    "matched": []
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Hyderabad"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "subsidiary-alliance-1798"
    ],
    "matched": []
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Hyderabad"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "hyderabad-residency"
    ],
    "matched": []
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Hydrabad"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "hyderabad-residency"
    ],
    "matched": []
   },
   {
    "file": "1883__India__Letts__India-11.html",
    "title": "India No. 11: Statistical and General Map",
    "year": 1883,
    "date": "1883",
    "room": "05",
    "sources": [
     "deccan"
    ],
    "via": [
     "salar-jang-hyderabad"
    ],
    "matched": []
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "salar-jang-hyderabad"
    ],
    "matched": []
   }
  ]
 },
 {
  "id": "kolhapur",
  "name": "Kolhapur",
  "modern": "Kolhapur, Maharashtra",
  "kind": "city and state",
  "variants": [
   "Kolhapur",
   "Kolapoor",
   "Colapore",
   "Kolapur"
  ],
  "deccan": [
   {
    "id": "tarabai",
    "title": "Tarabai",
    "date": "1675–1761"
   },
   {
    "id": "jagirdars-and-saranjams",
    "title": "Jagirs and saranjams under the Company",
    "date": "1830s–1860s"
   }
  ],
  "maps": [
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "tarabai"
    ],
    "matched": []
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kolapoor"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kolapoor"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "jagirdars-and-saranjams"
    ],
    "matched": []
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "jagirdars-and-saranjams"
    ],
    "matched": []
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kolhapur"
    ]
   }
  ]
 },
 {
  "id": "konkan",
  "name": "The Konkan",
  "modern": "Konkan coast, Maharashtra and Goa",
  "kind": "coastal region",
  "variants": [
   "Konkan",
   "Cucan",
   "Concan",
   "Kokan"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cuncan"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Konkan",
     "Cucan"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Cuncan"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Concan"
    ]
   }
  ]
 },
 {
  "id": "krishna",
  "name": "The Krishna",
  "modern": "Krishna river",
  "kind": "river",
  "variants": [
   "Krishna",
   "Kistna",
   "Kistnah",
   "Crisna",
   "Krishnaveni"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Krishna"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Krishna R."
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Krishna R."
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kistnah R."
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kistna R."
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kistna R."
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Krishna R."
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kistnah R."
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "R. Kistnah"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "R. Kistna"
    ]
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Krischna"
    ]
   }
  ]
 },
 {
  "id": "kurnool",
  "name": "Kurnool",
  "modern": "Kurnool, Andhra Pradesh",
  "kind": "city",
  "variants": [
   "Kurnool",
   "Kurnul",
   "Kurnoul",
   "Curnool"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kurnoul"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Kurnool"
    ]
   }
  ]
 },
 {
  "id": "madras",
  "name": "Madras",
  "modern": "Chennai, Tamil Nadu",
  "kind": "city and presidency",
  "variants": [
   "Madras",
   "Chennai",
   "Fort St George",
   "Fort St. George",
   "Madraspatam",
   "Madraspatnam"
  ],
  "deccan": [
   {
    "id": "company-factories",
    "title": "Masulipatnam, Madras, Bombay",
    "date": "1611–1668"
   },
   {
    "id": "first-anglo-mysore-1769",
    "title": "The first Anglo-Mysore war",
    "date": "1767–1769"
   },
   {
    "id": "colin-mackenzie",
    "title": "Colin Mackenzie’s collection",
    "date": "1799–1821"
   },
   {
    "id": "lambton-gts-1802",
    "title": "Lambton and the Great Trigonometrical Survey",
    "date": "10 April 1802"
   }
  ],
  "maps": [
   {
    "file": "1654__India__Sanson__India-Below-and-Beyond-the-Ganges.html",
    "title": "India below and beyond the Ganges, or the Empire of the Great Mogul",
    "year": 1654,
    "date": "1654",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "company-factories"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "company-factories"
    ],
    "matched": []
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madraspatan"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madras patnam"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madraspatan"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madras ou Fort St George"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madras ou Fort St George"
    ]
   },
   {
    "file": "1763__India__Dury__East-Indies.html",
    "title": "East Indies",
    "year": 1763,
    "date": "1763",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "first-anglo-mysore-1769"
    ],
    "matched": []
   },
   {
    "file": "1764__Bombay__Bellin__Plan-de-Bombay.html",
    "title": "Plan de Bombay",
    "year": 1764,
    "date": "1764",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "company-factories"
    ],
    "matched": []
   },
   {
    "file": "1782__India__Rennell__Hindoostan-2-Sheet.html",
    "title": "Rennell’s Hindoostan",
    "year": 1782,
    "date": "1782",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "first-anglo-mysore-1769",
     "lambton-gts-1802"
    ],
    "matched": []
   },
   {
    "file": "1800__SouthIndia__Wilkinson__Southern-Province-of-Hindoostan.html",
    "title": "A New and Accurate Map of the Southern Province of Hindoostan",
    "year": 1800,
    "date": "1800",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "colin-mackenzie"
    ],
    "matched": []
   },
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "lambton-gts-1802"
    ],
    "matched": [
     "Madras",
     "Fort St George",
     "Fort St. George"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Sheet-1.html",
    "title": "Map of the Province of Malabar – Sheet 1",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "colin-mackenzie"
    ],
    "matched": []
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madras"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madras"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Madras"
    ]
   },
   {
    "file": "1922__India__Survey-of-India__GTS-Index.html",
    "title": "Index to the Great Trigonometrical Survey of India",
    "year": 1922,
    "date": "1922",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "lambton-gts-1802"
    ],
    "matched": []
   }
  ]
 },
 {
  "id": "madurai",
  "name": "Madurai",
  "modern": "Madurai, Tamil Nadu",
  "kind": "city",
  "variants": [
   "Madurai",
   "Madura",
   "Madure"
  ],
  "deccan": [
   {
    "id": "nayakas",
    "title": "The nayakas",
    "date": "c. 1529–1565 and after"
   },
   {
    "id": "madurai-southern-conquest",
    "title": "Madurai and the southern conquest",
    "date": "c. 1335–1378"
   }
  ],
  "maps": [
   {
    "file": "1525__India__Ptolemy-Grueninger__Tabula-Moderna-Indiae.html",
    "title": "Tab. Moderna Indiae",
    "year": 1525,
    "date": "1525",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "madurai-southern-conquest"
    ],
    "matched": []
   },
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "nayakas",
     "madurai-southern-conquest"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madure"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madure"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Madurai",
     "Madura"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madure"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madura"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madura"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Madura"
    ]
   }
  ]
 },
 {
  "id": "malabar",
  "name": "Malabar",
  "modern": "Malabar coast, Kerala",
  "kind": "coastal region",
  "variants": [
   "Malabar"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar Coast"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar Coast"
    ]
   },
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Composite.html",
    "title": "Map of the Province of Malabar",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Sheet-1.html",
    "title": "Map of the Province of Malabar – Sheet 1",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "notes",
     "region",
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Malabar"
    ]
   }
  ]
 },
 {
  "id": "malwa",
  "name": "Malwa",
  "modern": "Malwa plateau, Madhya Pradesh",
  "kind": "region",
  "variants": [
   "Malwa",
   "Malva",
   "Malwah"
  ],
  "deccan": [],
  "maps": []
 },
 {
  "id": "mangalore",
  "name": "Mangalore",
  "modern": "Mangaluru, Karnataka",
  "kind": "port",
  "variants": [
   "Mangalore",
   "Mangaluru",
   "Mangalor"
  ],
  "deccan": [
   {
    "id": "tipu-accession-mangalore-1784",
    "title": "Tipu Sultan and the Treaty of Mangalore",
    "date": "1782–1784"
   }
  ],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mangalor"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mangalor"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mangalor"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mangeloor"
    ]
   },
   {
    "file": "1782__India__Rennell__Hindoostan-2-Sheet.html",
    "title": "Rennell’s Hindoostan",
    "year": 1782,
    "date": "1782",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "tipu-accession-mangalore-1784"
    ],
    "matched": []
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "tipu-accession-mangalore-1784"
    ],
    "matched": []
   },
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Mangalore"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mangalore"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mangalore"
    ]
   }
  ]
 },
 {
  "id": "masulipatnam",
  "name": "Masulipatnam",
  "modern": "Machilipatnam, Andhra Pradesh",
  "kind": "port",
  "variants": [
   "Masulipatnam",
   "Masulipatam",
   "Machilipatnam",
   "Masulipatan",
   "Metchlepatam",
   "Mesulipatam"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Masulipatnam"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Masulipatam"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Masulapatan"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Masuli-patnam"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Masuli-patnam"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Masulipatam"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Masulipatam"
    ]
   }
  ]
 },
 {
  "id": "mysore",
  "name": "Mysore",
  "modern": "Mysuru, Karnataka",
  "kind": "city and state",
  "variants": [
   "Mysore",
   "Mysuru",
   "Maissur",
   "Meisur"
  ],
  "deccan": [
   {
    "id": "mysore-restored-1799",
    "title": "Mysore restored",
    "date": "30 June 1799"
   },
   {
    "id": "mysore-rendition-question",
    "title": "The Mysore question",
    "date": "1867, rendition 1881"
   }
  ],
  "maps": [
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Maissour"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Maissur"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Maissur"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Mysore"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Mysore"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "mysore-restored-1799"
    ],
    "matched": [
     "Mysore"
    ]
   },
   {
    "file": "1800__SouthIndia__Wilkinson__Southern-Province-of-Hindoostan.html",
    "title": "A New and Accurate Map of the Southern Province of Hindoostan",
    "year": 1800,
    "date": "1800",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "mysore-restored-1799"
    ],
    "matched": []
   },
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mysoor"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Composite.html",
    "title": "Map of the Province of Malabar",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Mysore"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mysore"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Mysore"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "deccan"
    ],
    "via": [
     "mysore-rendition-question"
    ],
    "matched": []
   },
   {
    "file": "1883__India__Letts__India-11.html",
    "title": "India No. 11: Statistical and General Map",
    "year": 1883,
    "date": "1883",
    "room": "05",
    "sources": [
     "deccan"
    ],
    "via": [
     "mysore-rendition-question"
    ],
    "matched": []
   }
  ]
 },
 {
  "id": "nagpur",
  "name": "Nagpur",
  "modern": "Nagpur, Maharashtra",
  "kind": "city",
  "variants": [
   "Nagpur",
   "Nagpore",
   "Nagpoor"
  ],
  "deccan": [],
  "maps": []
 },
 {
  "id": "narmada",
  "name": "The Narmada",
  "modern": "Narmada river",
  "kind": "river",
  "variants": [
   "Narmada",
   "Nerbudda",
   "Narbada",
   "Nerbuddah"
  ],
  "deccan": [],
  "maps": []
 },
 {
  "id": "pune",
  "name": "Pune / Poona",
  "modern": "Pune, Maharashtra",
  "kind": "city",
  "variants": [
   "Pune",
   "Poona",
   "Poonah",
   "Punah"
  ],
  "deccan": [
   {
    "id": "satara-and-pune",
    "title": "Chhatrapati and Peshwa",
    "date": "1708–1749"
   },
   {
    "id": "bajirao-i",
    "title": "Bajirao I",
    "date": "1700–1740"
   },
   {
    "id": "nana-phadnavis",
    "title": "Nana Phadnavis",
    "date": "1742–1800"
   },
   {
    "id": "pindaris-third-war-1817",
    "title": "The Pindaris and the third Anglo-Maratha war",
    "date": "1817–1818"
   },
   {
    "id": "deccan-commission",
    "title": "The Deccan Commission",
    "date": "1818–1826"
   },
   {
    "id": "pune-colonial",
    "title": "Pune under the Company",
    "date": "1818–1830s"
   },
   {
    "id": "elphinstone-report-1819",
    "title": "Elphinstone’s Report",
    "date": "25 October 1819"
   },
   {
    "id": "elphinstone-to-inam",
    "title": "The inheritance of grants",
    "date": "1831"
   },
   {
    "id": "inam-commission-1852",
    "title": "The Inam Commission",
    "date": "1852–1863"
   },
   {
    "id": "ranade-and-the-first-histories",
    "title": "Ranade and the first histories",
    "date": "1870–1900"
   },
   {
    "id": "phule-satyashodhak",
    "title": "Jotirao Phule",
    "date": "1848–1873"
   }
  ],
  "maps": [
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "bajirao-i"
    ],
    "matched": []
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "nana-phadnavis"
    ],
    "matched": []
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "pindaris-third-war-1817"
    ],
    "matched": []
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "satara-and-pune",
     "pindaris-third-war-1817",
     "deccan-commission",
     "pune-colonial",
     "elphinstone-report-1819",
     "elphinstone-to-inam"
    ],
    "matched": []
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "deccan-commission"
    ],
    "matched": []
   },
   {
    "file": "1831__India__John-Walker__Newly-Constructed-Map-of-India.html",
    "title": "Newly Constructed and Extended Map of India",
    "year": 1831,
    "date": "1831",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "elphinstone-to-inam"
    ],
    "matched": []
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Poonah"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "pune-colonial",
     "inam-commission-1852",
     "phule-satyashodhak"
    ],
    "matched": []
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Poona"
    ]
   },
   {
    "file": "1901__India__Cram-Murray-Aaron__Historical-Map-of-British-India.html",
    "title": "Historical Map of British India since A.D. 1751",
    "year": 1901,
    "date": "1901 issue (plate in use from 1891)",
    "room": "05",
    "sources": [
     "deccan"
    ],
    "via": [
     "ranade-and-the-first-histories"
    ],
    "matched": []
   }
  ]
 },
 {
  "id": "raichur",
  "name": "Raichur",
  "modern": "Raichur, Karnataka",
  "kind": "city and doab",
  "variants": [
   "Raichur",
   "Raichore",
   "Rachore",
   "Raichoor"
  ],
  "deccan": [
   {
    "id": "raichur-doab-frontier",
    "title": "The Raichur doab",
    "date": "c. 1350–1565"
   },
   {
    "id": "raichur-1520",
    "title": "The Battle of Raichur",
    "date": "19 May 1520"
   }
  ],
  "maps": [
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Rachore"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Rachore"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Rachore"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Racore"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "raichur-doab-frontier"
    ],
    "matched": []
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Raichoor"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Raichur"
    ]
   }
  ]
 },
 {
  "id": "raigad",
  "name": "Raigad",
  "modern": "Raigad fort, Maharashtra",
  "kind": "hill fort",
  "variants": [
   "Raigad",
   "Rairi",
   "Raigarh",
   "Rajgarh"
  ],
  "deccan": [
   {
    "id": "ashtapradhan",
    "title": "The Ashtapradhan",
    "date": "c. 1674"
   },
   {
    "id": "raigad-coronation-1674",
    "title": "The coronation at Raigad",
    "date": "6 June 1674"
   }
  ],
  "maps": []
 },
 {
  "id": "satara",
  "name": "Satara",
  "modern": "Satara, Maharashtra",
  "kind": "city and fort",
  "variants": [
   "Satara",
   "Sattara",
   "Sattarah"
  ],
  "deccan": [
   {
    "id": "satara-raj-1818",
    "title": "The Satara raj",
    "date": "1818–1848"
   },
   {
    "id": "satara-lapse-1848",
    "title": "The annexation of Satara",
    "date": "1848"
   }
  ],
  "maps": [
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Sattara"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Bejapoor-Bijapur.html",
    "title": "Bejapoor – Asie 102",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "satara-raj-1818"
    ],
    "matched": []
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "satara-lapse-1848"
    ],
    "matched": []
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Satara"
    ]
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "deccan"
    ],
    "via": [
     "satara-raj-1818",
     "satara-lapse-1848"
    ],
    "matched": []
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Satara"
    ]
   }
  ]
 },
 {
  "id": "seringapatam",
  "name": "Seringapatam",
  "modern": "Srirangapatna, Karnataka",
  "kind": "fort and capital of Mysore",
  "variants": [
   "Seringapatam",
   "Seringapatnam",
   "Srirangapatna",
   "Srirangapatnam",
   "Seringapatan"
  ],
  "deccan": [
   {
    "id": "haidar-ali-rises",
    "title": "Haidar Ali",
    "date": "c. 1720–1782"
   },
   {
    "id": "srirangapatna",
    "title": "Srirangapatna",
    "date": "1610–1799"
   },
   {
    "id": "tipu-reforms",
    "title": "Tipu’s state",
    "date": "1784–1799"
   },
   {
    "id": "tipu-embassies",
    "title": "Tipu’s embassies",
    "date": "1786–1798"
   },
   {
    "id": "seringapatam-1792",
    "title": "The Treaty of Seringapatam",
    "date": "18 March 1792"
   },
   {
    "id": "seringapatam-1799",
    "title": "Seringapatam, 1799",
    "date": "4 May 1799"
   }
  ],
  "maps": [
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Siranga patnam"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Chirangapatnam"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "tipu-embassies",
     "seringapatam-1792"
    ],
    "matched": []
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "haidar-ali-rises",
     "srirangapatna",
     "tipu-reforms",
     "seringapatam-1792",
     "seringapatam-1799"
    ],
    "matched": []
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "seringapatam-1799"
    ],
    "matched": [
     "Seringapatam"
    ]
   },
   {
    "file": "1800__SouthIndia__Wilkinson__Southern-Province-of-Hindoostan.html",
    "title": "A New and Accurate Map of the Southern Province of Hindoostan",
    "year": 1800,
    "date": "1800",
    "room": "03",
    "sources": [
     "deccan"
    ],
    "via": [
     "haidar-ali-rises",
     "srirangapatna",
     "seringapatam-1799"
    ],
    "matched": []
   },
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Seringapatam"
    ]
   },
   {
    "file": "1809__Malabar__Arrowsmith__Province-of-Malabar-Composite.html",
    "title": "Map of the Province of Malabar",
    "year": 1809,
    "date": "1809",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Seringapatam"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Seringapatam"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Seringapatam"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Seringapatam"
    ]
   }
  ]
 },
 {
  "id": "sholapur",
  "name": "Sholapur",
  "modern": "Solapur, Maharashtra",
  "kind": "city and fort",
  "variants": [
   "Sholapur",
   "Solapur",
   "Sholapoor",
   "Solapoor"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Solapour"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Soulapour"
    ]
   },
   {
    "file": "1788__India__Rennell__Hindoostan-Mogul-Empire-SurveyOfIndia.html",
    "title": "A Map of Hindoostan or the Mogul Empire",
    "year": 1788,
    "date": "1788",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Sollapour"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Sholapoor"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Sholapoor"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Shelapore"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Solapoor"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Sholapoor"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Sholapur"
    ]
   }
  ]
 },
 {
  "id": "surat",
  "name": "Surat",
  "modern": "Surat, Gujarat",
  "kind": "port",
  "variants": [
   "Surat",
   "Surate",
   "Suratte",
   "Surrat"
  ],
  "deccan": [
   {
    "id": "shaista-khan-surat",
    "title": "Shaista Khan and Surat",
    "date": "1663–1664"
   }
  ],
  "maps": [
   {
    "file": "1682__India__DuVal__Empire-du-Mogol.html",
    "title": "Empire du Mogol",
    "year": 1682,
    "date": "1682",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "shaista-khan-surat"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Suratte"
    ]
   },
   {
    "file": "1728__IndianOcean__Halley-Senex__Chart-of-the-East-Indian-Ocean.html",
    "title": "A chart of the East Indian Ocean",
    "year": 1728,
    "date": "1728",
    "room": "06",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Surrat"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Surat"
    ]
   },
   {
    "file": "1827__Deccan__Vandermaelen__Guzerate-Chandeish-Aurungabad.html",
    "title": "Guzerate, Chandeish et Aurungabad – Asie 93",
    "year": 1827,
    "date": "1827",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Soorut"
    ]
   },
   {
    "file": "1893__Deccan__Bartholomew__Section-X-Bombay-Berar.html",
    "title": "Section X: Bombay and Berar",
    "year": 1893,
    "date": "1893",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Surat"
    ]
   }
  ]
 },
 {
  "id": "tanjore",
  "name": "Tanjore",
  "modern": "Thanjavur, Tamil Nadu",
  "kind": "city",
  "variants": [
   "Tanjore",
   "Thanjavur",
   "Tanjaor",
   "Tanjaour"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Taniaor"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Taniaor"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tanschaur"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tanjore"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tanjore"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tanjore"
    ]
   }
  ]
 },
 {
  "id": "tapti",
  "name": "The Tapti",
  "modern": "Tapi (Tapti) river",
  "kind": "river",
  "variants": [
   "Tapti",
   "Tapi",
   "Taptee",
   "Tuptee"
  ],
  "deccan": [],
  "maps": []
 },
 {
  "id": "trichinopoly",
  "name": "Trichinopoly",
  "modern": "Tiruchirappalli, Tamil Nadu",
  "kind": "fort-city",
  "variants": [
   "Trichinopoly",
   "Tiruchirappalli",
   "Trichy",
   "Tritchinopoly"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tricharapali"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Trichinopoly"
    ]
   },
   {
    "file": "1848__Deccan__Morse__Southern-India.html",
    "title": "Southern India",
    "year": 1848,
    "date": "1848",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Trichinopoly"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Trichinopoly"
    ]
   }
  ]
 },
 {
  "id": "tungabhadra",
  "name": "The Tungabhadra",
  "modern": "Tungabhadra river",
  "kind": "river",
  "variants": [
   "Tungabhadra",
   "Toombuddra",
   "Tumbudra",
   "Tungabadra"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tungabadra R."
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tungabadra R."
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tungabadra R."
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Toongabudra R."
    ]
   },
   {
    "file": "1859__Deccan__Josenhans-Basel__Sud-Mahratta.html",
    "title": "Süd Mahratta (South Maratha)",
    "year": 1859,
    "date": "1859",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tungabhadra"
    ]
   },
   {
    "file": "1911__Deccan__Murray-Handbook__Hampi-Ruins-of-Vijayanagar.html",
    "title": "Hampi: Ruins of Vijayanagar",
    "year": 1911,
    "date": "1911",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Tungabhadra"
    ]
   }
  ]
 },
 {
  "id": "vellore",
  "name": "Vellore",
  "modern": "Vellore, Tamil Nadu",
  "kind": "fort",
  "variants": [
   "Vellore",
   "Velur",
   "Vellour"
  ],
  "deccan": [],
  "maps": [
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Vellur"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Vellour"
    ]
   },
   {
    "file": "1808__SouthIndia__Lambton-GTS__Peninsula-Triangulation-Asiatic-Researches.html",
    "title": "Triangulation across the Indian Peninsula",
    "year": 1808,
    "date": "1808 (London reprint 1811)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Vellore"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Vellore"
    ]
   },
   {
    "file": "1851__SouthIndia__Tallis-Martin__Southern-India-Bombay-and-Madras.html",
    "title": "Southern India, including the Presidencies of Bombay and Madras",
    "year": 1851,
    "date": "c.1851",
    "room": "05",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Vellore"
    ]
   }
  ]
 },
 {
  "id": "vijayanagara",
  "name": "Vijayanagara / Hampi",
  "modern": "Hampi, Karnataka",
  "kind": "ruined capital",
  "variants": [
   "Vijayanagara",
   "Vijayanagar",
   "Hampi",
   "Bisnagar",
   "Bisnaga",
   "Bisnagariæ",
   "Narsinga",
   "Narsingha",
   "Beejanuggur",
   "Bijanagar",
   "Anegundi",
   "Hampe"
  ],
  "deccan": [
   {
    "id": "founding-of-vijayanagara-1336",
    "title": "The founding of Vijayanagara",
    "date": "c. 1336–1346"
   },
   {
    "id": "hampi-virupaksha",
    "title": "Virupaksha and the sacred centre",
    "date": "before 1500"
   },
   {
    "id": "vijayanagara-temple-state",
    "title": "Temples and the nayankara",
    "date": "14th–15th century"
   },
   {
    "id": "deva-raya-ii",
    "title": "Deva Raya II",
    "date": "r. 1424–1446"
   },
   {
    "id": "abdur-razzaq-1443",
    "title": "Abdur Razzaq at Vijayanagara",
    "date": "1442–1444"
   },
   {
    "id": "saluva-usurpation-1485",
    "title": "The Saluva usurpation",
    "date": "1485"
   },
   {
    "id": "vijayanagara-city",
    "title": "Vijayanagara, the city",
    "date": "c. 1500"
   },
   {
    "id": "krishnadevaraya",
    "title": "Krishnadevaraya",
    "date": "r. 1509–1529"
   },
   {
    "id": "amuktamalyada",
    "title": "Amuktamalyada",
    "date": "c. 1510s–1520s"
   },
   {
    "id": "domingos-paes",
    "title": "Domingos Paes describes Vijayanagara",
    "date": "c. 1520–1522"
   },
   {
    "id": "rama-raya",
    "title": "Rama Raya",
    "date": "1542–1565"
   }
  ],
  "maps": [
   {
    "file": "1519__IndianOcean__Hollanda-Reinel__Folio-3-recto-North-Indian-ocean.html",
    "title": "Northern Indian Ocean with Arabia and India",
    "year": 1519,
    "date": "1519",
    "room": "06",
    "sources": [
     "deccan"
    ],
    "via": [
     "abdur-razzaq-1443"
    ],
    "matched": []
   },
   {
    "file": "1525__India__Ptolemy-Grueninger__Tabula-Moderna-Indiae.html",
    "title": "Tab. Moderna Indiae",
    "year": 1525,
    "date": "1525",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "founding-of-vijayanagara-1336",
     "deva-raya-ii",
     "vijayanagara-city",
     "krishnadevaraya",
     "domingos-paes"
    ],
    "matched": []
   },
   {
    "file": "1570__India__Ortelius__Indiae-Orientalis.html",
    "title": "Indiae Orientalis",
    "year": 1570,
    "date": "1570",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "vijayanagara-city"
    ],
    "matched": []
   },
   {
    "file": "1599__SouthIndia__Ruscelli-Rosaccio__Calecut-Nuova-Tavola.html",
    "title": "Calecut Nuova Tavola",
    "year": 1599,
    "date": "1599",
    "room": "01",
    "sources": [
     "deccan"
    ],
    "via": [
     "abdur-razzaq-1443"
    ],
    "matched": []
   },
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "notes",
     "plate"
    ],
    "via": [],
    "matched": [
     "Vijayanagara",
     "Bisnagar",
     "Bisnagariæ",
     "Narsinga"
    ]
   },
   {
    "file": "1708__BayOfBengal__Jaillot-Mortier__Andaman-Ceylon-Maldives.html",
    "title": "The Bay of Bengal, Ceylon, the Maldives and the Andaman Islands",
    "year": 1708,
    "date": "1708",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bisnagar"
    ]
   },
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bisnagar"
    ]
   },
   {
    "file": "1733__SouthIndia__Homann-Heirs__Malabar-Coromandel-Ceylon.html",
    "title": "Malabar, Coromandel and Ceylon",
    "year": 1733,
    "date": "1733",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bisnagar"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bisnagar"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bisnagar"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bisnagur"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Bisnagur"
    ]
   },
   {
    "file": "1911__Deccan__Murray-Handbook__Hampi-Ruins-of-Vijayanagar.html",
    "title": "Hampi: Ruins of Vijayanagar",
    "year": 1911,
    "date": "1911",
    "room": "04",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "founding-of-vijayanagara-1336",
     "hampi-virupaksha",
     "vijayanagara-city",
     "domingos-paes"
    ],
    "matched": [
     "Vijayanagara",
     "Vijayanagar",
     "Hampi",
     "Bisnagar",
     "Narsinga",
     "Anegundi"
    ]
   }
  ]
 },
 {
  "id": "warangal",
  "name": "Warangal",
  "modern": "Warangal, Telangana",
  "kind": "city and fort",
  "variants": [
   "Warangal",
   "Orangal",
   "Warangol",
   "Worangul"
  ],
  "deccan": [
   {
    "id": "papadu-revolt",
    "title": "Papadu",
    "date": "c. 1695–1710"
   }
  ],
  "maps": [
   {
    "file": "1706__Deccan__Van-der-Aa-Methold__Koninkryken-van-Golconda.html",
    "title": "The Kingdoms of Golconda, Tenasserim, Pegu and Arakan",
    "year": 1706,
    "date": "1706",
    "room": "02",
    "sources": [
     "deccan"
    ],
    "via": [
     "papadu-revolt"
    ],
    "matched": []
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Orangal"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Orangal"
    ]
   },
   {
    "file": "1792__SouthIndia__Faden__Peninsula-of-India-to-Cape-Comorin.html",
    "title": "A Map of the Peninsula of India to Cape Comorin",
    "year": 1792,
    "date": "1792 (issued 1793)",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Warangol"
    ]
   },
   {
    "file": "1800__India__Faden__India-Peninsula.html",
    "title": "A Map of the Peninsula of India to Cape Comorin, third edition",
    "year": 1800,
    "date": "1792",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Warangol"
    ]
   },
   {
    "file": "1820__India__Carey-Lavoisne__India.html",
    "title": "Geographical, Historical, and Statistical Map of India",
    "year": 1820,
    "date": "1820",
    "room": "03",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Warangole"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Warungul"
    ]
   }
  ]
 },
 {
  "id": "western-ghats",
  "name": "The Western Ghats",
  "modern": "Western Ghats (Sahyadri)",
  "kind": "mountain range",
  "variants": [
   "Western Ghats",
   "Ghats",
   "Ghauts",
   "Sahyadri",
   "Sahyadris",
   "Gauts"
  ],
  "deccan": [
   {
    "id": "railway-bhor-ghat",
    "title": "The railway climbs the ghats",
    "date": "1853–1863"
   }
  ],
  "maps": [
   {
    "file": "1719__SouthIndia__Chatelain__Carte-Nouvelle-des-Terres.html",
    "title": "Carte nouvelle des terres de Cucan, de Canara, de Malabar, de Madura",
    "year": 1719,
    "date": "1719",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Gatte"
    ]
   },
   {
    "file": "1752__India__dAnville__lInde-Composite.html",
    "title": "Carte de l’Inde",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Gattes"
    ]
   },
   {
    "file": "1752__SouthIndia__dAnville__Carte-de-lInde-Southern.html",
    "title": "Carte de l’Inde – southern sheets",
    "year": 1752,
    "date": "1752",
    "room": "02",
    "sources": [
     "plate"
    ],
    "via": [],
    "matched": [
     "Gattes"
    ]
   },
   {
    "file": "1856__Deccan__SDUK-Walker__India-III-Bombay.html",
    "title": "India III: Bombay",
    "year": 1856,
    "date": "",
    "room": "04",
    "sources": [
     "deccan",
     "notes"
    ],
    "via": [
     "railway-bhor-ghat"
    ],
    "matched": [
     "Ghats"
    ]
   },
   {
    "file": "1883__India__Letts__India-11.html",
    "title": "India No. 11: Statistical and General Map",
    "year": 1883,
    "date": "1883",
    "room": "05",
    "sources": [
     "deccan"
    ],
    "via": [
     "railway-bhor-ghat"
    ],
    "matched": []
   }
  ]
 }
];
