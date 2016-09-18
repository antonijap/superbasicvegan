"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,s,e){return s&&t(i.prototype,s),e&&t(i,e),i}}();!function(t){function i(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}var s=function(){function s(i,e){_classCallCheck(this,s),this.$element=i,this.options=t.extend({},s.defaults,this.$element.data(),e),this._init(),Foundation.registerPlugin(this,"Sticky")}return _createClass(s,[{key:"_init",value:function(){var i=this.$element.parent("[data-sticky-container]"),s=this.$element[0].id||Foundation.GetYoDigits(6,"sticky"),e=this;i.length||(this.wasWrapped=!0),this.$container=i.length?i:t(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":s}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,t(window).one("load.zf.sticky",function(){""!==e.options.anchor?e.$anchor=t("#"+e.options.anchor):e._parsePoints(),e._setSizes(function(){e._calc(!1)}),e._events(s.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){for(var i=""==this.options.topAnchor?1:this.options.topAnchor,s=""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor,e=[i,s],n={},o=0,a=e.length;o<a&&e[o];o++){var c;if("number"==typeof e[o])c=e[o];else{var h=e[o].split(":"),r=t("#"+h[0]);c=r.offset().top,h[1]&&"bottom"===h[1].toLowerCase()&&(c+=r[0].getBoundingClientRect().height)}n[o]=c}this.points=n}},{key:"_events",value:function(i){var s=this,e=this.scrollListener="scroll.zf."+i;this.isOn||(this.canStick&&(this.isOn=!0,t(window).off(e).on(e,function(){0===s.scrollCount?(s.scrollCount=s.options.checkEvery,s._setSizes(function(){s._calc(!1,window.pageYOffset)})):(s.scrollCount--,s._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(){s._setSizes(function(){s._calc(!1),s.canStick?s.isOn||s._events(i):s.isOn&&s._pauseListeners(e)})}))}},{key:"_pauseListeners",value:function(i){this.isOn=!1,t(window).off(i),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(t,i){return t&&this._setSizes(),this.canStick?(i||(i=window.pageYOffset),void(i>=this.topPoint?i<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0))):(this.isStuck&&this._removeSticky(!0),!1)}},{key:"_setSticky",value:function(){var t=this,i=this.options.stickTo,s="top"===i?"marginTop":"marginBottom",e="top"===i?"bottom":"top",n={};n[s]=this.options[s]+"em",n[i]=0,n[e]="auto",n.left=this.$container.offset().left+parseInt(window.getComputedStyle(this.$container[0])["padding-left"],10),this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+e).addClass("is-stuck is-at-"+i).css(n).trigger("sticky.zf.stuckto:"+i),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}},{key:"_removeSticky",value:function(t){var i=this.options.stickTo,s="top"===i,e={},n=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,o=s?"marginTop":"marginBottom",a=t?"top":"bottom";e[o]=0,e.bottom="auto",t?e.top=0:e.top=n,e.left="",this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+i).addClass("is-anchored is-at-"+a).css(e).trigger("sticky.zf.unstuckfrom:"+a)}},{key:"_setSizes",value:function(t){this.canStick=Foundation.MediaQuery.atLeast(this.options.stickyOn),this.canStick||t();var i=this.$container[0].getBoundingClientRect().width,s=window.getComputedStyle(this.$container[0]),e=parseInt(s["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":i-e+"px"});var n=this.$element[0].getBoundingClientRect().height||this.containerHeight;"none"==this.$element.css("display")&&(n=0),this.containerHeight=n,this.$container.css({height:n}),this.elemHeight=n,this.isStuck&&this.$element.css({left:this.$container.offset().left+parseInt(s["padding-left"],10)}),this._setBreakPoints(n,function(){t&&t()})}},{key:"_setBreakPoints",value:function(t,s){if(!this.canStick){if(!s)return!1;s()}var e=i(this.options.marginTop),n=i(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,a=this.points?this.points[1]:o+this.anchorHeight,c=window.innerHeight;"top"===this.options.stickTo?(o-=e,a-=t+e):"bottom"===this.options.stickTo&&(o-=c-(t+n),a-=c-n),this.topPoint=o,this.bottomPoint=a,s&&s()}},{key:"destroy",value:function(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),t(window).off(this.scrollListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),Foundation.unregisterPlugin(this)}}]),s}();s.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},Foundation.plugin(s,"Sticky")}(jQuery);