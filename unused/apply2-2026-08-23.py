import os, re, glob, json, html, io
EG='european-gaze'; SITE='mihirnani.github.io'
def rd(p): return io.open(p,encoding='utf-8').read()
def wr(p,s):
    io.open(p+'.new','w',encoding='utf-8',newline='').write(s); os.replace(p+'.new',p)
n=0
# 1. masthead Deccan link
for p in glob.glob(EG+'/*.html'):
    s=rd(p); old='<a class="navlink" href="about.html">About</a>'
    if old in s and 'deccan/">Deccan</a>' not in s:
        wr(p, s.replace(old,'<a class="navlink" href="https://naniwadekar.com/deccan/">Deccan</a>\n'+old,1)); n+=1
print('masthead:',n)
# 2. JSON-LD per plate
strip=lambda h: html.unescape(re.sub('<[^>]+>','',h)).strip()
KEY={'Author':'creator','Publisher':'publisher','Place':'locationCreated','Dimensions':'size','Engraver':'contributor','Archive identifier':'identifier','Type':'genre','Edition':'version','Full title':'alternateName','Title':'alternateName'}
m=0
for p in sorted(glob.glob(EG+'/1*.html')+glob.glob(EG+'/c1*.html')):
    s=rd(p)
    if 'application/ld+json' in s: continue
    g=lambda rx: (re.search(rx,s,re.S) or [None,None])[1]
    d={'@context':'https://schema.org','@type':'Map','name':strip(g(r'<h1>(.*?)</h1>')),
       'url':g(r'<link href="([^"]+)" rel="canonical"'),'image':g(r'<meta content="([^"]+)" property="og:image"'),
       'description':html.unescape(g(r'<meta name="description" content="([^"]*)"') or ''),
       'inLanguage':'en','isAccessibleForFree':True,
       'isPartOf':{'@type':'Collection','name':'The European Gaze on India','url':'https://naniwadekar.com/european-gaze/'}}
    date=g(r'<dt>Date</dt><dd>(.*?)</dd>')
    if date: d['temporalCoverage']=strip(date); y=re.search(r'\d{4}',date); d['datePublished']=y.group(0) if y else strip(date)
    for dt,dd in re.findall(r'<dt>(.*?)</dt><dd>(.*?)</dd>',s,re.S):
        dt=strip(dt); v=strip(dd)
        if dt in KEY and v: d[KEY[dt]]=v
        if dt=='Source record':
            u=re.search(r'href="([^"]+)"',dd); 
            if u: d['sameAs']=html.unescape(u.group(1)); d['holdingArchive']=v
    for k in ('creator','publisher','contributor'):
        if k in d: d[k]={'@type':'Organization' if k=='publisher' else 'Person','name':d[k]}
    if 'holdingArchive' in d: d['holdingArchive']={'@type':'ArchiveOrganization','name':d['holdingArchive']}
    d={k:v for k,v in d.items() if v}
    block='<script type="application/ld+json">'+json.dumps(d,ensure_ascii=False,separators=(',',':'))+'</script>\n</head>'
    assert '</head>' in s
    wr(p, s.replace('</head>',block,1)); m+=1
print('json-ld:',m)
# 3. root sitemap index + robots
idx='''<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://naniwadekar.com/sitemap.xml</loc><lastmod>2026-08-23</lastmod></sitemap>
  <sitemap><loc>https://naniwadekar.com/european-gaze/sitemap.xml</loc><lastmod>2026-08-23</lastmod></sitemap>
  <sitemap><loc>https://naniwadekar.com/deccan/sitemap.xml</loc><lastmod>2026-08-23</lastmod></sitemap>
  <sitemap><loc>https://naniwadekar.com/essays/sitemap.xml</loc><lastmod>2026-08-23</lastmod></sitemap>
  <sitemap><loc>https://naniwadekar.com/sahyadri-birds/sitemap.xml</loc><lastmod>2026-08-23</lastmod></sitemap>
</sitemapindex>
'''
io.open(SITE+'/sitemap-index.xml','w',encoding='utf-8',newline='').write(idx)
r=rd(SITE+'/robots.txt')
if 'sitemap-index.xml' not in r: wr(SITE+'/robots.txt', r.replace('Sitemap: https://naniwadekar.com/sitemap.xml','Sitemap: https://naniwadekar.com/sitemap-index.xml\nSitemap: https://naniwadekar.com/sitemap.xml'))
# sw bump
p=EG+'/european-gaze-sw.js'; s=rd(p); s=re.sub(r'const VERSION = "v(\d+)"',lambda k:'const VERSION = "v%d"'%(int(k.group(1))+1),s); wr(p,s)
