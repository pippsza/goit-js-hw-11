import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=t=>`
  
    <li class="gallery-card"> <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
        </a><div class="info">
        <div>
        <h5>Likes</h5>
        <p>${t.likes}</p>
      </div>
      <div>
        <h5>Views</h5>
        <p>${t.views}</p>
      </div>
      <div>
        <h5>Comments</h5>
        <p>${t.comments} </p>
      </div>
      <div>
        <h5>Downloads</h5>
        <p>${t.downloads}</p>
      </div>
    </div>
    </li>
  `,h=t=>"<p>Loading images, please wait...</p>",p=t=>{const i=new URLSearchParams({q:t,key:"48288384-c73711b953ffb418f1a2cd50e",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},c=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),m=t=>{t.preventDefault(),a.innerHTML=h();const i=t.currentTarget.elements.user_query.value.trim();if(i===""){n.show({color:"red",titleColor:"red",title:"Fields must be filled!",position:"topRight"}),a.innerHTML="",c.reset();return}p(i).then(o=>{if(o.total===0){a.innerHTML="",c.reset(),n.show({color:"red",titleColor:"red",title:" Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.refresh();return}const s=o.hits.map(e=>u(e)).join("");a.innerHTML=s,new d(".js-gallery a",{captionsData:"alt",captionDelay:250})}).catch(o=>{n.show({color:"red",titleColor:"red",title:`Нажаль сталася помилка!
        ${o}`,position:"topRight"})})};c.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
