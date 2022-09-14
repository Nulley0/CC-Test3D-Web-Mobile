System.register("chunks:///_virtual/main",["./TouchToGround.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TouchToGround.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,n,r,i,a,c,s,u,l,h,p,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Camera,s=t.Node,u=t.input,l=t.Input,h=t.PhysicsSystem,p=t.geometry,y=t.Component}],execute:function(){var f,d,T,g,m,v,b;i._RF.push({},"f85e0iMvbpICLQulYl0bf1n","TouchToGround",void 0);var C=a.ccclass,_=a.property;t("TouchToGround",(f=C("TouchToGround"),d=_(c),T=_(s),f((v=e((m=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"cameraCom",v,r(e)),n(e,"targetNode",b,r(e)),e._ray=new p.Ray,e}o(e,t);var i=e.prototype;return i.start=function(){},i.update=function(t){},i.onEnable=function(){u.on(l.EventType.TOUCH_MOVE,this.onTouchStart,this)},i.onDisable=function(){u.off(l.EventType.TOUCH_MOVE,this.onTouchStart,this)},i.onTouchStart=function(t){var e=t.touch;if(this.cameraCom.screenPointToRay(e.getLocationX(),e.getLocationY(),this._ray),h.instance.raycastClosest(this._ray)){var o=h.instance.raycastClosestResult;o.collider.node==this.targetNode&&(this.node.setPosition(o.hitPoint),console.log(o.hitPoint))}else console.log("raycast does not hit the target node !")},e}(y)).prototype,"cameraCom",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=e(m.prototype,"targetNode",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=m))||g));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});