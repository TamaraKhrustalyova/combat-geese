(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();$(".responsive").slick({prevArrow:'<button type="button" class="my-slick-prev"><svg class="slick_arrow"><use href="/combat-geese/assets/sprite-8eda3afe.svg#icon-arrow"></use></svg></button>',nextArrow:'<button type="button" class="my-slick-next"><svg class="slick_arrow"><use href="/combat-geese/assets/sprite-8eda3afe.svg#icon-arrow"></use></svg></button>',infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!0,slidesToShow:3,variableWidth:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(s){for(var o=this,n=(o.document||o.ownerDocument).querySelectorAll(s),e=0;n[e]&&n[e]!==o;)++e;return Boolean(n[e])}),typeof r.closest!="function"&&(r.closest=function(s){for(var o=this;o&&o.nodeType===1;){if(o.matches(s))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),s=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");r.forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+t+'"]');c.classList.add("active"),s.classList.add("active")})}),o.forEach(function(n){n.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),s.classList.remove("active")})}),document.body.addEventListener("keyup",function(n){var e=n.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1)});(()=>{const r=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),r.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};s.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(r.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
