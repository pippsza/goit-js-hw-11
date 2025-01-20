import{S as d,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=r=>`
  
    <li class="gallery-card"> <a class="gallery-link" href="${r.largeImageURL}">
      <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
        </a><div class="info">
        <div>
        <h5>Likes</h5>
        <p>${r.likes}</p>
      </div>
      <div>
        <h5>Views</h5>
        <p>${r.views}</p>
      </div>
      <div>
        <h5>Comments</h5>
        <p>${r.comments} </p>
      </div>
      <div>
        <h5>Downloads</h5>
        <p>${r.downloads}</p>
      </div>
    </div>
    </li>
  `,h=r=>"<p>Loading images, please wait...</p>",p=r=>{const i=new URLSearchParams({q:r,key:"48288384-c73711b953ffb418f1a2cd50e",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},c=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),m=new d(".js-gallery a",{captionsData:"alt",captionDelay:250}),f=r=>{r.preventDefault(),a.innerHTML=h();const i=r.currentTarget.elements.user_query.value.trim();if(i===""){n.show({color:"red",titleColor:"red",title:"Fields must be filled!",position:"topRight"}),a.innerHTML="",c.reset();return}p(i).then(o=>{if(o.total===0){a.innerHTML="",c.reset(),n.show({color:"red",titleColor:"red",title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=o.hits.map(e=>u(e)).join("");a.innerHTML=s,m.refresh()}).catch(o=>{n.show({color:"red",titleColor:"red",title:`An error occurred: ${o}`,position:"topRight"})})};c.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
