"use strict";console.log("HELLO");var btnOpen=document.querySelector("#btnOpen"),btnClose=document.querySelector("#btnClose");function openMobileMenu(){console.log("run open mobile menu"),btnOpen.setAttribute("aria-expanded","true")}function closeMobileMenu(){console.log("run close mobile menu"),btnOpen.setAttribute("aria-expanded","false")}btnOpen.addEventListener("click",openMobileMenu),btnClose.addEventListener("click",closeMobileMenu);
//# sourceMappingURL=script.js.map