import{a as d,S as y,i as a}from"./assets/vendor-1AYLTIiv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const b="50781688-4c5e14a62117c7affe0b16869",L="https://pixabay.com/api/";function u(o){return d.get(L,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>((!t.hits||t.hits.length===0)&&console.warn("Sorry, there are no images matching your search query:",o),t)).catch(t=>{console.error("Error message:",t.message)})}u("cat").then(o=>{console.log("Знайдені зображення:",o.hits)});const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),S=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(o){const t=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:n,comments:g,downloads:h})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${i}" alt="${e.split(" ").slice(0,3).join(" ").replace(/,+$/,"")}" class="gallery-img" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${g}</p>
          <p><b>Downloads:</b> ${h}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){f.innerHTML=""}function w(){m.classList.add("is-visible")}function c(){m.classList.remove("is-visible")}const p=document.querySelector(".form"),l=p.querySelector('input[name="search-text"]');p.addEventListener("submit",$);function $(o){o.preventDefault();const t=l.value.trim();if(!t){a.warning({message:"Please enter a search query!",position:"topRight",backgroundColor:"#f1c40f"});return}q(),w(),u(t).then(i=>{if(c(),!i.hits.length){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red"});return}v(i.hits)}).catch(i=>{c(),a.error({message:`Something went wrong: ${i.message}`,position:"topRight"}),console.error("Error fetching images:",i)}).finally(()=>{l.value=""})}
//# sourceMappingURL=index.js.map
