(()=>{"use strict";var e={731:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){this.name=e,this.age=t}return e.prototype.getName=function(){return this.name},e.prototype.getAge=function(){return this.age},e}();t.default=o},695:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sub=t.add=void 0,t.add=function(e,t){return e+t},t.sub=function(e,t){return e-t}},607:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=o(695),u=r(o(731));console.log("Hello Webpack!!!"),console.log((0,n.add)(10,5)),console.log((0,n.sub)(5,2));var a=new u.default("Jack",32);console.log(a.getName(),a.getAge())}},t={};!function o(r){var n=t[r];if(void 0!==n)return n.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,o),u.exports}(607)})();