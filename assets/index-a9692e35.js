(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i=document.getElementById("list"),n=[{title:"Personalize",text:"Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!",img:"https://photos.app.goo.gl/pQmFhy1VmKUHV2Tg7"},{title:"Write & Understand",text:"Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!",img:"https://photos.app.goo.gl/VXEmJK8JfEbZ2EEKA"},{title:"Alivio!",text:"Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!",img:"https://photos.app.goo.gl/yoPPg7DNDkg8PF9P6"}];console.log(n);function u(o){return`<li class="work-list_element">
        <h2 class="work-list_title">${n[o].title}</h2>
        <p class="work-list-text">${n[o].text}</p>
        <img src="${n[o].img}" alt="" class="work-list-img" />
      </li>`}function d(){i.innerHTML="";for(let o=0;o<n.length;o++)i.insertAdjacentHTML("beforeend",u(o))}d();const a=document.getElementById("menu-container"),m=document.getElementById("btn-open"),p=document.getElementById("btn-close");m.onclick=()=>{a.classList.add("is-open")};p.onclick=()=>{a.classList.remove("is-open")};
