(()=>{"use strict";var t={d:(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n)};t.d({},{Ig:()=>M,Md:()=>h,zM:()=>_,YA:()=>b,q_:()=>L,AQ:()=>y});var n="first-page",e="easy-page",a="medium-page",i="hard-page",c="loading-page";function r(t){return new Promise((function(n){return setTimeout(n,t)}))}var s=0,d=0,o="";function u(){clearInterval(o),s=0,d=0}var l=function(t,e){t.innerHTML='\n    <div class="interface-timer">00.00</div>\n    <div class="result '.concat("result-congrats"===e.gameStatus||"result-dead"===e.gameStatus?"result_open":"hidden",'">\n            <div class="result-wrapper ').concat("result-congrats"===e.gameStatus||"result-dead"===e.gameStatus?"result-wrapper_open":"",'">\n                <div class="result-img">\n                    <img src="./img/').concat("result-dead"===e.gameStatus?"dead":"celebration",'.png" alt="" />\n                </div>\n                <div class="result-title">Вы ').concat("result-dead"===e.gameStatus?"Проиграли":"Выйграли",'!</div>\n                <div class="result-text">Затраченное время:</div>\n                <div class="result-time">01.20</div>\n                <button id="restart-button" class="result-button">Играть снова</button>\n            </div>\n    </div>\n    <button class="control-button" id="control-button">').concat("playing-the-game"===e.gameStatus?"Начать заново":"Начать","</div>\n    ");var a=t.querySelector(".interface-timer"),i=t.querySelector(".result-time");"playing-the-game"===e.gameStatus&&function(t){o=setInterval((function(){60==++d&&(s++,d=0),t.innerHTML=(s<10?"0":"")+s+"."+(d<10?"0":"")+d}),1e3)}(a),"result-congrats"!==e.gameStatus&&"result-dead"!==e.gameStatus||(i.innerHTML=e.time,u()),t.querySelector("#restart-button").addEventListener("click",(function(){b(c),M(h),u(),r(1e3).then((function(){b(n),M(h)}))}))},f=["hearts","clubs","diamonds","spades"],m=["6","7","8","9","10","J","Q","K","A"],v=[],g=function(t,n,e){for(var a=0;a<e.length;a++)e[a]={suit:"".concat(t[Math.floor(4*Math.random())]),value:"".concat(n[Math.floor(9*Math.random())])};e.forEach((function(t){e.push(t)})),e.sort((function(){return Math.random()-.5}))},p=function(t){return t.map((function(t){return'\n            <div class="scene scene--card">\n            <div data-card="'.concat(t.value,"-").concat(t.suit,'" class="card-flip">\n                <div class="card__face card__face--front">\n                <div class="card">\n                        <div class="card-left">\n                            <div class="card-name">').concat(t.value,'</div>\n                            <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/').concat(t.suit,'.png" alt=""></div>\n                        </div>\n                        <div class="card-suit"><img width="35px" src="./img/suit/').concat(t.suit,'.png" alt=""></div>\n                        <div class="card-right">\n                            <div class="card-name">').concat(t.value,'</div>\n                            <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/').concat(t.suit,'.png" alt=""></div>\n                        </div>\n                </div>          \n                </div>\n                <div class="card__face card__face--back"></div>\n            </div>\n        </div>\n        ')})).join("")},h=n,y={time:"0",difficulty:"",gameStatus:""},b=function(t){h=t},_=function(t){y.gameStatus=t},L=function(t){y.time=t},M=function(t){[e,n,i,a,c].includes(t)&&(t===n&&(y.gameStatus="choose-difficulty-level",S()),t===e&&(y.difficulty="easy",y.gameStatus="on-the-game-page",y.time="00.00",S()),t===a&&(y.difficulty="medium",y.gameStatus="on-the-game-page",y.time="00.00",S()),t===i&&(y.difficulty="hard",y.gameStatus="on-the-game-page",y.time="00.00",S()),t===c&&S())},S=function(){var t=document.getElementById("app");return h===e||h===a||h===i?function(t){var e="";switch(y.difficulty){case"easy":v.length=3,g(f,m,v),e='\n            <div class="interface-container"></div>\n            <div class="cards-container cards-container_easy">\n            '.concat(p(v),"                     \n            </div>                                                                                           \n            ");break;case"medium":v.length=6,g(f,m,v),e='\n            <div class="interface-container"></div>\n            <div class="cards-container cards-container_medium">\n            '.concat(p(v),"                         \n            </div>                                                                                           \n            ");break;case"hard":v.length=9,g(f,m,v),e='\n            <div class="interface-container"></div>\n            <div class="cards-container cards-container_hard"> \n            '.concat(p(v),"                     \n            </div>                                                                                           \n            ")}t.innerHTML=e;var a=document.querySelector(".interface-container");l(a,y),document.getElementById("control-button").addEventListener("click",(function(){s()}));var i=document.querySelectorAll(".card-flip"),s=function(){var t=[],e=document.getElementById("death"),s=document.getElementById("right"),f=document.getElementById("start");o(i),f.play(),f.volume=.3,r(5e3).then((function(){_("playing-the-game"),l(a,y);var f=document.querySelector(".interface-timer");o(i),i.forEach((function(i){if(i instanceof HTMLElement){var o=i.dataset.card;i.addEventListener("click",(function(){d(i),r(1e3).then((function(){t.push(o),t.length%2==0&&(t[0]!==t[1]||t[2]!==t[3]||t[4]!==t[5]||t[6]!==t[7]||t[8]!==t[9]||t[10]!==t[11]||t[12]!==t[13]||t[14]!==t[15]||t[16]!==t[17]?(e.play(),r(1e3).then((function(){L(f.innerHTML),_("result-dead"),l(a,y)}))):(s.play(),s.volume=.5,L(f.innerHTML)),t.length===v.length&&(_("result-congrats"),L(f.innerHTML),l(a,y)))}))})),document.getElementById("control-button").addEventListener("click",(function(){u(),b(c),M(h),r(1e3).then((function(){b(n),M(h)}))}))}}))}))},d=function(t){t.classList.toggle("is-flipped")},o=function(t){t.forEach((function(t){t.classList.toggle("is-flipped")}))};o(i)}(t):h===n?function(t){t.innerHTML='\n    <section class="first-page">\n        <div class="first-page__wrapper">\n            <div class="first-page__title">Выбери<br>сложность</div>\n            <div class="first-page__difficulties">  \n                <div class="first-page__btn-wrapper"> \n                    <input type="radio" id="easy" name="difficulty" value="1">\n                    <label for="easy">1</label>\n                    \n                    <input type="radio" id="medium" name="difficulty" value="2">\n                    <label for="medium">2</label>\n                    \n                    <input type="radio" id="hard" name="difficulty" value="3">\n                    <label for="hard">3</label>\n                </div> \n            </div>\n            <button type="submit" id="start" class="first-page__start-btn">Старт</button>\n        </div>\n    </section>\n    ';var n=document.getElementById("easy"),s=document.getElementById("medium"),d=document.getElementById("hard"),o=document.getElementById("start"),u=[n,s,d];u.forEach((function(t){t.addEventListener("click",(function(){u.forEach((function(t){t.removeAttribute("checked")})),t.setAttribute("checked","")}))})),o.addEventListener("click",(function(){n.hasAttribute("checked")&&(b(c),M(h),r(1e3).then((function(){b(e),M(h)}))),s.hasAttribute("checked")&&(b(c),M(h),r(1e3).then((function(){b(a),M(h)}))),d.hasAttribute("checked")&&(b(c),M(h),r(1e3).then((function(){b(i),M(h)})))}))}(t):h===c?function(t){t.innerHTML='\n  <div class="loader__wrapper">\n<svg class="loader" version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">\n      <animateTransform \n         attributeName="transform" \n         attributeType="XML" \n         type="rotate"\n         dur="2s" \n         from="0 50 50"\n         to="360 50 50" \n         repeatCount="indefinite" />\n  </path>\n <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">\n      <animateTransform \n         attributeName="transform" \n         attributeType="XML" \n         type="rotate"\n         dur="1s" \n         from="0 50 50"\n         to="-360 50 50" \n         repeatCount="indefinite" />\n  </path>\n <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n  L82,35.7z">\n      <animateTransform \n         attributeName="transform" \n         attributeType="XML" \n         type="rotate"\n         dur="2s" \n         from="0 50 50"\n         to="360 50 50" \n         repeatCount="indefinite" />\n  </path>\n</svg>\n</div>\n'}(t):void 0};M(h)})();