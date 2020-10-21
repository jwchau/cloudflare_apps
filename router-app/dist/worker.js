!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1),{socials:s,samples:o}=n(2);addEventListener("fetch",t=>{t.respondWith(async function(t){const e=new r;e.get("/links",t=>function(t){const e=JSON.stringify(links);return new Response(e,{headers:{"content-type":"application/json"}})}()),e.get("/",()=>fetch("https://static-links-page.signalnerve.workers.dev"));const n=(new HTMLRewriter).on("div#links",new i(o)).on("div#profile",new l).on("img#avatar",new a("https://john-chau.com/face.png","Me")).on("h1#name",new c("John Chau")).on("div#social",new l).on("div#social",new i(s)),u=await e.route(t);return n.transform(u)}(t.request))});class i{constructor(t){this.urls=t}async element(t){for(let e=0;e<this.urls.length;e++)t.append(`<a href="${this.urls[e].url}">${this.urls[e].name}</a>`,{html:!0})}}class a{constructor(t,e){this.dest=t,this.desc=e}element(t){t.setAttribute("src",this.dest),t.setInnerContent(this.desc)}}class c{constructor(t){this.content=t}element(t){t.setInnerContent(this.content)}}class l{element(t){t.removeAttribute("style")}}},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),s=n("delete"),o=n("get"),i=n("head"),a=n("options"),c=n("patch"),l=n("post"),u=n("put"),h=n("trace"),p=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([r,p(t)],e)}delete(t,e){return this.handle([s,p(t)],e)}get(t,e){return this.handle([o,p(t)],e)}head(t,e){return this.handle([i,p(t)],e)}options(t,e){return this.handle([a,p(t)],e)}patch(t,e){return this.handle([c,p(t)],e)}post(t,e){return this.handle([l,p(t)],e)}put(t,e){return this.handle([u,p(t)],e)}trace(t,e){return this.handle([h,p(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}},function(t,e){class n{constructor(t,e){this.name=t,this.url=e}static zip(...t){if(r.length!==s.length)return[];for(let e=0;e<t.length;e++);return[]}toString(){return this.name+" => "+this.url}}let r=["Worker","LinkedIn","Personal Site","Github"],s=["https://links-app.jwchau.workers.dev/","https://linkedin.com/in/jwchau","https://john-chau.com","https://github.com/jwchau"];const o=n.zip(r,s);r=["A sample URL","Another sample URL","A final sample URL"],s=["https://asampleurl.com","https://anothersampleurl.com","https://afinalsampleurl.com"];const i=n.zip(r,s);t.exports={socials:o,samples:i}}]);