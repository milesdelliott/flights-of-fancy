webpackJsonp([1],{"8Q4f":function(t){t.exports={typewriter:"typewriter__1JQVa",letter:"letter__f4V_n",up:"up__1B39F",word:"word__2rXSW",phrase:"phrase__2zSgr"}},Yu7N:function(t,e,r){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){function e(){return 20*(2*Math.random()-1)}function n(t,e,r,n,o,s,i,a){return t?o?"transform: translateX("+(n<e.length/2?"-":"+")+"1em) rotateZ("+s+"deg)":n!==r?"":"transform: translate"+i+"("+a+"1em) rotateZ("+s+"deg)":""}return r.i(i.h)("span",{class:p.a.word}," ",t.text.split("").map(function(o,s){return r.i(i.h)("span",{style:n(t.currentWord,t.text,t.letter,s,t.splitWord,e(),t.axis,t.sign),class:p.a.letter},o)}))}Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"default",function(){return u});var i=r("KM04"),a=(r.n(i),r("8Q4f")),p=r.n(a),u=function(t){function e(){var e=n(this,t.call(this));return e.state={phrase:"flights of fancy",current:[0,0],splitWord:1},e}return o(e,t),e.prototype.createWordMap=function(t,e){return t.split(" ").map(function(t,r){return r==e?1:t.length})},e.prototype.getNextLetter=function(t,e){var r=t[0],n=t[1],o=n===e[r]-1,s=r===e.length-1;return n=o?0:n+1,r=o?r+1:r,r=s&&o?0:r,[r,n]},e.prototype.componentDidMount=function(){var t=this;this.setState({wordMap:this.createWordMap(this.state.phrase,this.state.splitWord)}),this.letterTimer=setInterval(function(){t.setState({current:t.getNextLetter(t.state.current,t.state.wordMap)})},750)},e.prototype.componentWillUnmount=function(){clearInterval(this.letterTimer)},e.prototype.render=function(){var t=this;return r.i(i.h)("section",{class:p.a.typewriter+" flight"},r.i(i.h)("h1",{class:p.a.phrase},this.state.phrase.split(" ").map(function(e,n){return r.i(i.h)(s,{text:e,currentWord:n===t.state.current[0],letter:t.state.current[1],splitWord:n==t.state.splitWord,axis:"Y",sign:0===n?"-":"+",key:n})})))},e}(i.Component)}});
//# sourceMappingURL=route-typewriter.chunk.7be60.js.map