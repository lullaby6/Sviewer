var CopyImageClipboard=function(n){"use strict";function t(n,t,o,e){return new(o||(o=Promise))((function(i,r){function c(n){try{a(e.next(n))}catch(n){r(n)}}function u(n){try{a(e.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,u)}a((e=e.apply(n,t||[])).next())}))}function o(n){return t(this,void 0,void 0,(function*(){const t=yield fetch(`${n}`);return yield t.blob()}))}function e(n){return n.type.includes("jpeg")}function i(n){return n.type.includes("png")}function r(n){return t(this,void 0,void 0,(function*(){return new Promise((function(t,o){const e=document.createElement("img");e.crossOrigin="anonymous",e.src=n,e.onload=function(n){const o=n.target;t(o)},e.onabort=o,e.onerror=o}))}))}function c(n){return t(this,void 0,void 0,(function*(){return new Promise((function(t,o){const e=document.createElement("canvas"),i=e.getContext("2d");if(i){const{width:r,height:c}=n;e.width=r,e.height=c,i.drawImage(n,0,0,r,c),e.toBlob((function(n){n?t(n):o("Cannot get blob from image element")}),"image/png",1)}}))}))}function u(n){return t(this,void 0,void 0,(function*(){const t=URL.createObjectURL(n),o=yield r(t);return yield c(o)}))}function a(n){return t(this,void 0,void 0,(function*(){const t={[n.type]:n},o=new ClipboardItem(t);yield navigator.clipboard.write([o])}))}return n.canCopyImagesToClipboard=function(){var n;const t="undefined"!=typeof fetch,o="undefined"!=typeof ClipboardItem,e=!!(null===(n=null===navigator||void 0===navigator?void 0:navigator.clipboard)||void 0===n?void 0:n.write);return t&&o&&e},n.convertBlobToPng=u,n.copyBlobToClipboard=a,n.copyImageToClipboard=function(n){return t(this,void 0,void 0,(function*(){const t=yield o(n);if(e(t)){const n=yield u(t);return yield a(n),t}if(i(t))return yield a(t),t;throw new Error("Cannot copy this type of image to clipboard")}))},n.createImageElement=r,n.getBlobFromImageElement=c,n.getBlobFromImageSource=o,n.isJpegBlob=e,n.isPngBlob=i,n.requestClipboardWritePermission=function(){var n;return t(this,void 0,void 0,(function*(){if(!(null===(n=null===navigator||void 0===navigator?void 0:navigator.permissions)||void 0===n?void 0:n.query))return!1;const{state:t}=yield navigator.permissions.query({name:"clipboard-write"});return"granted"===t}))},Object.defineProperty(n,"__esModule",{value:!0}),n}({});
document.querySelector(".bx-copy").addEventListener("click", (event) => {
	CopyImageClipboard.copyImageToClipboard(img.src);
});