(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.getElementById("list"),r=[{title:"Personalize",text:"Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!",img:"https://i.postimg.cc/63s9kd1y/img-1.png",grid:"grid-1"},{title:"Write & Understand",text:"Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!",img:"https://i.postimg.cc/7L8dDmw8/img-2.png",grid:"grid-2"},{title:"Alivio!",text:"Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!",img:"https://i.postimg.cc/X7BsJd2V/img-3.png",grid:"grid-3"}];console.log(r);function u(o){return`<li class="work-list_element ${r[o].grid}">
        <h2 class="work-list_title">${r[o].title}</h2>
        <p class="work-list-text">${r[o].text}</p>
        <img src="${r[o].img}" alt="" class="work-list-img" />
      </li>`}function d(){l.innerHTML="";for(let o=0;o<r.length;o++)l.insertAdjacentHTML("beforeend",u(o))}d();const c=document.getElementById("menu-container"),g=document.getElementById("btn-open"),m=document.getElementById("btn-close");g.onclick=()=>{c.classList.add("is-open")};m.onclick=()=>{c.classList.remove("is-open")};