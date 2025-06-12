import{a as h,S as d,i as a}from"./assets/vendor-1AYLTIiv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y="50781688-4c5e14a62117c7affe0b16869",b="https://pixabay.com/api/";function l(o){return h.get(b,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>((!t.hits||t.hits.length===0)&&console.warn("Sorry, there are no images matching your search query:",o),t)).catch(t=>{console.error("Error message:",t.message)})}l("cat").then(o=>{console.log("Знайдені зображення:",o.hits)});const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function S(o){const t=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:r,views:s,comments:p,downloads:g})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${i}" alt="${e.split(" ").slice(0,3).join(" ").replace(/,+$/,"")}" class="gallery-img" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${p}</p>
          <p><b>Downloads:</b> ${g}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){u.innerHTML=""}function q(){f.classList.add("is-visible")}function c(){f.classList.remove("is-visible")}const m=document.querySelector(".form"),w=m.querySelector('input[name="search-text"]');m.addEventListener("submit",$);function $(o){o.preventDefault();const t=w.value.trim();if(!t){a.warning({message:"Please enter a search query!",position:"topRight",backgroundColor:"#f1c40f"});return}v(),q(),l(t).then(i=>{if(c(),!i.hits.length){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red"});return}S(i.hits)}).catch(i=>{c(),a.error({message:`Something went wrong: ${i.message}`,position:"topRight"}),console.error("Error fetching images:",i)})}
//# sourceMappingURL=index.js.map
