(function(){var t=Math.min,u=Math.max;function a(a,b){0<=a.className.indexOf(b)||(a.className=a.className+" "+b)}function b(a,b){a.className=a.className.replace(new RegExp("\\b"+b+"\\b","g"),"")}function c(){e();var a=w.naturalWidth,b=w.naturalHeight;const c=d();z.width=c.width>a?a:c.width,z.height=c.height-60>b?b:c.height-60,P.drawImage(w,0,0,a,b,0,0,z.width,z.height);const f=z.toDataURL(z);V.src=f}function d(){return{width:u(document.documentElement.clientWidth||0,window.innerWidth||0),height:u(document.documentElement.clientHeight||0,window.innerHeight||0)}}function e(){Q=[],R=0,S=null,T=null,U=!1,x=new Image,b(z,"crop"),a(F,"hide"),a(G,"hide"),b(E,"hide"),z.removeEventListener("mousedown",j),z.removeEventListener("touchstart",j),z.removeEventListener("mousemove",l),z.removeEventListener("touchmove",l),z.removeEventListener("mouseup",m),z.removeEventListener("touchend",m)}function f(){P.clearRect(0,0,z.width,z.height),P.drawImage(A,0,0)}function g(){A.width=z.width,A.height=z.height,A.getContext("2d").drawImage(z,0,0)}function h(a,b){var c=Math.round,d=z.getBoundingClientRect();return{x:c(a)-d.left*(z.width/d.width),y:c(b)-d.top*(z.height/d.height)}}function i(){a(z,"crop"),b(F,"hide"),a(E,"hide"),Q=[],R=0,Q.push(z.toDataURL()),x.src=w.src,g(),k(),z.addEventListener("mousedown",j),z.addEventListener("touchstart",j),z.addEventListener("mousemove",l),z.addEventListener("touchmove",l),z.addEventListener("mouseup",m),z.addEventListener("touchend",m),p()}function j(b){b.preventDefault(),a(G,"hide"),f(),S=h("undefined"==typeof b.clientX?b.touches[0].clientX:b.clientX,"undefined"==typeof b.clientY?b.touches[0].clientY:b.clientY),U=!0,k()}function k(){P.save(),P.globalAlpha=.5,P.fillStyle="black",P.fillRect(0,0,z.width,z.height),P.restore()}function l(a){a.preventDefault();var b=h("undefined"==typeof a.clientX?a.touches[0].clientX:a.clientX,"undefined"==typeof a.clientY?a.touches[0].clientY:a.clientY);if(U){var c=t(S.x,b.x),d=u(S.x,b.x),e=t(S.y,b.y),g=u(S.y,b.y);f(),k(),P.save(),P.beginPath(),P.rect(c,e,d-c,g-e),P.clip(),P.drawImage(V,0,0),P.restore()}}function m(a){a.preventDefault();var c="undefined"==typeof a.clientX?a.changedTouches[0].clientX:a.clientX,d="undefined"==typeof a.clientY?a.changedTouches[0].clientY:a.clientY;T=h(c,d),U=!1,G.style.top=d+"px",G.style.left=c+"px",b(G,"hide")}function n(){var b=t(S.x,T.x),c=u(S.x,T.x),d=t(S.y,T.y),e=u(S.y,T.y);a(G,"hide");var f=new Image;f.src=z.toDataURL(),f.onload=function(){P.clearRect(0,0,z.width,z.height),z.width=c-b,z.height=e-d,P.drawImage(f,b,d,c-b,e-d,0,0,c-b,e-d),g(),Q.push(z.toDataURL()),R=Q.length-1,x.src=Q[R],p()}}function o(){a(G,"hide"),f()}function p(){Q.length&&0!=R?b(H,"disabled"):a(H,"disabled"),Q.length&&R!=Q.length-1?b(I,"disabled"):a(I,"disabled")}function q(){if(Q.length&&0!=R){var a=Q[--R],b=new Image;b.src=a,x.src=a,b.onload=function(){P.clearRect(0,0,z.width,z.height),z.width=b.naturalWidth,z.height=b.naturalHeight,P.drawImage(b,0,0),g()},p()}}function r(){if(Q.length&&R!=Q.length-1){var a=Q[++R],b=new Image;b.src=a,x.src=a,b.onload=function(){P.clearRect(0,0,z.width,z.height),z.width=b.naturalWidth,z.height=b.naturalHeight,P.drawImage(b,0,0),g()},p()}}function s(){w.src===Q[R]?c():w.src=Q[R]}var v="undefined"==typeof chrome?"undefined"==typeof browser?void 0:browser:chrome,w=new Image,x=new Image,z=document.getElementById("target"),A=document.createElement("canvas"),B=document.getElementById("download"),C=document.getElementById("print"),D=document.getElementById("crop"),E=document.getElementById("controls"),F=document.getElementById("cropControls"),G=document.getElementById("confirmControls"),H=document.getElementById("crop-back"),I=document.getElementById("crop-forward"),J=document.getElementById("crop-stop"),K=document.getElementById("confirm-crop"),L=document.getElementById("cancel-crop"),M=document.getElementById("instruction"),N=document.getElementById("boxclose"),O=document.getElementById("copyToClipboard"),P=z.getContext("2d"),Q=[],R=0,S=null,T=null,U=!1,V=new Image;(function(){w.addEventListener("load",c,!1),v.runtime.onMessage.addListener(function(a,b,c){"update_url"===a.method&&(w.src=a.url,c({success:!0}))}),B.addEventListener("click",function(){var a=document.createElement("a");a.download="screenshot.jpg",a.href=w.src,document.body.appendChild(a),a.click(),document.body.removeChild(a)}),C.addEventListener("click",function(){window.print()}),O.addEventListener("click",function(){a(M,"visible")}),N.addEventListener("click",function(){b(M,"visible")}),D.addEventListener("click",i),K.addEventListener("click",n),L.addEventListener("click",o),H.addEventListener("click",q),I.addEventListener("click",r),J.addEventListener("click",s)})()})();