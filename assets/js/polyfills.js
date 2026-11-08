/* Tiny local compatibility shims. No third-party polyfill.io dependency. */
(function(){
  if (!Element.prototype.matches) Element.prototype.matches=Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  if (!Element.prototype.closest) Element.prototype.closest=function(s){var e=this;while(e){if(e.matches(s))return e;e=e.parentElement;}return null;};
  if (!window.requestAnimationFrame)window.requestAnimationFrame=function(f){return setTimeout(function(){f(Date.now())},16)};
  if (!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)};
  if (!('IntersectionObserver' in window)) {
    window.IntersectionObserver=function(callback){this.items=[];this.observe=function(el){this.items.push(el);callback([{target:el,isIntersecting:true,intersectionRatio:1}])};this.unobserve=function(){};this.disconnect=function(){};};
  }
})();
