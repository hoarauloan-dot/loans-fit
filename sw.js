// Loan's Fit : cache d'interface uniquement, aucune donnée de suivi dans Cache Storage.
const BASE=new URL('./',self.location.href).href;
const PREFIX='loans-fit:'+BASE+':';
const CACHE=PREFIX+'v2.0-dark-marble';
const ASSETS=['index.html','style.css','app.js','manifest.json','icon-180.png','icon-192.png','icon-512.png','logo.png'].map(x=>new URL(x,BASE).href);
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);
 const cleanUrl=new URL(url.pathname,url.origin).href;
 if(req.method!=='GET'||!url.href.startsWith(BASE))return;
 if(req.mode==='navigate'){
   event.respondWith(caches.open(CACHE).then(c=>c.match(new URL('index.html',BASE).href)).then(r=>r||fetch(req)));
 }else if(ASSETS.includes(cleanUrl)){
   event.respondWith(caches.open(CACHE).then(c=>c.match(cleanUrl)).then(r=>r||fetch(req)));
 }
});
