function _createForOfIteratorHelper(r,t){var e,n,a,o,i="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(i)return a=!(n=!0),{s:function(){i=i.call(r)},n:function(){var r=i.next();return n=r.done,r},e:function(r){a=!0,e=r},f:function(){try{n||null==i.return||i.return()}finally{if(a)throw e}}};if(Array.isArray(r)||(i=_unsupportedIterableToArray(r))||t&&r&&"number"==typeof r.length)return i&&(r=i),o=0,{s:t=function(){},n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,t){var e;if(r)return"string"==typeof r?_arrayLikeToArray(r,t):"Map"===(e="Object"===(e={}.toString.call(r).slice(8,-1))&&r.constructor?r.constructor.name:e)||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}mixins.search={data:function(){return{rawSearch:""}},watch:{search:function(r){var t,e=_createForOfIteratorHelper(this.$refs.timeline.childNodes);try{for(e.s();!(t=e.n()).done;){var n=t.value;!r||n.dataset.title.includes(r)?(n.style.opacity=1,n.style.visibility="visible",n.style.marginTop=0):(n.style.opacity=0,n.style.visibility="hidden",n.style.marginTop=-n.offsetHeight-30+"px")}}catch(r){e.e(r)}finally{e.f()}}},computed:{search:function(){return this.rawSearch.toLowerCase().replace(/\s+/g,"")}}};