function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");const l={formEl:document.querySelector(".form")};function a(o,n){new Promise(((e,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?e({position:o,delay:n}):t({position:o,delay:n})}),n)})).then((({position:o,delay:n})=>{e(i).Notify.warning(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(i).Notify.warning(`❌ Rejected promise ${o} in ${n}ms`)}))}l.formEl.addEventListener("submit",(function(e){e.preventDefault();const o=l.formEl.delay.value,n=l.formEl.amount.value,t=l.formEl.step.value;for(let e=1;e<=n;e+=1)a(e,Number(o)+(e-1)*Number(t))}));
//# sourceMappingURL=03-promises.98ccf515.js.map
