import{i as u,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=r=>`
  
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
  `,h=r=>"<p>Loading images, please wait...</p>",p=r=>{const s=new URLSearchParams({q:r,key:"48288384-c73711b953ffb418f1a2cd50e",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),m=r=>{r.preventDefault(),n.innerHTML=h();const s=r.currentTarget.elements.user_query.value.trim();if(s===""){alert("Поле має бути заповнено!");return}p(s).then(o=>{if(o.total===0){n.innerHTML="",c.reset(),u.show({color:"red",titleColor:"red",title:" Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.refresh();return}const a=o.hits.map(e=>d(e)).join("");n.innerHTML=a,new l(".js-gallery a",{captionsData:"alt",captionDelay:250})}).catch(o=>{console.log(o)})};c.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
