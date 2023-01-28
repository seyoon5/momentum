"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8628],{69463:function(e,n,t){t.d(n,{k:function(){return i}});var r=t(34155);function i(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),i=2;i<t;i++)r[i-2]=arguments[i];if(o()&&void 0===n)throw new Error("invariant requires an error message argument");if(!e){var a;if(void 0===n)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=0;(a=new Error(n.replace(/%s/g,(function(){return r[u++]})))).name="Invariant Violation"}throw a.framesToPop=1,a}}function o(){return"undefined"!==typeof r&&!0}},96793:function(e,n,t){function r(e,n,t,r){var i=t?t.call(r,e,n):void 0;if(void 0!==i)return!!i;if(e===n)return!0;if("object"!==typeof e||!e||"object"!==typeof n||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var s=o[c];if(!u(s))return!1;var d=e[s],l=n[s];if(!1===(i=t?t.call(r,d,l,s):void 0)||void 0===i&&d!==l)return!1}return!0}t.d(n,{w:function(){return r}})},76614:function(e,n,t){t.d(n,{J:function(){return a}});var r=t(9941),i=t(46964),o=t(34311);function a(e,n,t){return function(e,n,t){var a=(0,r.Z)((0,i.r)(e,n,t),2),u=a[0],c=a[1];return(0,o.L)((function(){var n=e.getHandlerId();if(null!=n)return e.subscribeToStateChange(c,{handlerIds:[n]})}),[e,c]),u}(n,e||function(){return{}},(function(){return t.reconnect()}))}},46964:function(e,n,t){t.d(n,{r:function(){return u}});var r=t(64063),i=t.n(r),o=t(67294),a=t(34311);function u(e,n,t){var r=(0,o.useState)((function(){return n(e)})),u=r[0],c=r[1],s=(0,o.useCallback)((function(){var r=n(e);i()(u,r)||(c(r),t&&t())}),[u,e,t]);return(0,a.L)(s),[u,s]}},53201:function(e,n,t){t.d(n,{c:function(){return C}});var r=t(69463),i=t(76614),o=t(58636),a=t(67294);function u(e){return(0,a.useMemo)((function(){return e.hooks.dragSource()}),[e])}function c(e){return(0,a.useMemo)((function(){return e.hooks.dragPreview()}),[e])}var s=t(75815),d=t(18352),l=t(96793),f=t(48373),g=t(85462),h=function(){function e(n){var t=this;(0,s.Z)(this,e),this.hooks=(0,g.p)({dragSource:function(e,n){t.clearDragSource(),t.dragSourceOptions=n||null,(0,f.d)(e)?t.dragSourceRef=e:t.dragSourceNode=e,t.reconnectDragSource()},dragPreview:function(e,n){t.clearDragPreview(),t.dragPreviewOptions=n||null,(0,f.d)(e)?t.dragPreviewRef=e:t.dragPreviewNode=e,t.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=n}return(0,d.Z)(e,[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"reconnect",value:function(){var e=this.reconnectDragSource();this.reconnectDragPreview(e)}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,n=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return n&&this.disconnectDragSource(),this.handlerId?e?(n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),n):(this.lastConnectedDragSource=e,n):n}},{key:"reconnectDragPreview",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.dragPreview,t=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();t&&this.disconnectDragPreview(),this.handlerId&&(n?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=n,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,n,this.dragPreviewOptions)):this.lastConnectedDragPreview=n)}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!(0,l.w)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!(0,l.w)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}}]),e}(),v=t(21641),p=t(34311);var y=!1,D=!1,k=function(){function e(n){(0,s.Z)(this,e),this.sourceId=null,this.internalMonitor=n.getMonitor()}return(0,d.Z)(e,[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){(0,r.k)(!y,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return y=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{y=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;(0,r.k)(!D,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return D=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{D=!1}}},{key:"subscribeToStateChange",value:function(e,n){return this.internalMonitor.subscribeToStateChange(e,n)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,n){return this.internalMonitor.isOverTarget(e,n)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}();var I=t(9941),m=t(75793),w=function(){function e(n,t,r){(0,s.Z)(this,e),this.spec=n,this.monitor=t,this.connector=r}return(0,d.Z)(e,[{key:"beginDrag",value:function(){var e=this.spec,n=this.monitor,t=null;return null!==(t="object"===typeof e.item?e.item:"function"===typeof e.item?e.item(n):{})&&void 0!==t?t:null}},{key:"canDrag",value:function(){var e=this.spec,n=this.monitor;return"boolean"===typeof e.canDrag?e.canDrag:"function"!==typeof e.canDrag||e.canDrag(n)}},{key:"isDragging",value:function(e,n){var t=this.spec,r=this.monitor,i=t.isDragging;return i?i(r):n===e.getSourceId()}},{key:"endDrag",value:function(){var e=this.spec,n=this.monitor,t=this.connector,r=e.end;r&&r(n.getItem(),n),t.reconnect()}}]),e}();function O(e,n,t){var i=(0,v.N)(),o=function(e,n,t){var r=(0,a.useMemo)((function(){return new w(e,n,t)}),[n,t]);return(0,a.useEffect)((function(){r.spec=e}),[e]),r}(e,n,t),u=function(e){return(0,a.useMemo)((function(){var n=e.type;return(0,r.k)(null!=n,"spec.type must be defined"),n}),[e])}(e);(0,p.L)((function(){if(null!=u){var e=(0,I.Z)((0,m.w)(u,o,i),2),r=e[0],a=e[1];return n.receiveHandlerId(r),t.receiveHandlerId(r),a}}),[i,n,t,o,u])}function C(e,n){var t=(0,o.w)(e,n);(0,r.k)(!t.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");var s=function(){var e=(0,v.N)();return(0,a.useMemo)((function(){return new k(e)}),[e])}(),d=function(e,n){var t=(0,v.N)(),r=(0,a.useMemo)((function(){return new h(t.getBackend())}),[t]);return(0,p.L)((function(){return r.dragSourceOptions=e||null,r.reconnect(),function(){return r.disconnectDragSource()}}),[r,e]),(0,p.L)((function(){return r.dragPreviewOptions=n||null,r.reconnect(),function(){return r.disconnectDragPreview()}}),[r,n]),r}(t.options,t.previewOptions);return O(t,s,d),[(0,i.J)(t.collect,s,d),u(d),c(d)]}},21641:function(e,n,t){t.d(n,{N:function(){return a}});var r=t(69463),i=t(67294),o=t(68548);function a(){var e=(0,i.useContext)(o.L).dragDropManager;return(0,r.k)(null!=e,"Expected drag drop context"),e}},88662:function(e,n,t){t.d(n,{L:function(){return w}});var r=t(76614),i=t(58636),o=t(67294);function a(e){return(0,o.useMemo)((function(){return e.hooks.dropTarget()}),[e])}var u=t(75815),c=t(18352),s=t(96793),d=t(48373),l=t(85462),f=function(){function e(n){var t=this;(0,u.Z)(this,e),this.hooks=(0,l.p)({dropTarget:function(e,n){t.clearDropTarget(),t.dropTargetOptions=n,(0,d.d)(e)?t.dropTargetRef=e:t.dropTargetNode=e,t.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=n}return(0,c.Z)(e,[{key:"connectTarget",get:function(){return this.dropTarget}},{key:"reconnect",value:function(){var e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();var n=this.dropTarget;this.handlerId&&(n?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=n,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,n,this.dropTargetOptions)):this.lastConnectedDropTarget=n)}},{key:"receiveHandlerId",value:function(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}},{key:"dropTargetOptions",get:function(){return this.dropTargetOptionsInternal},set:function(e){this.dropTargetOptionsInternal=e}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didDropTargetChange",value:function(){return this.lastConnectedDropTarget!==this.dropTarget}},{key:"didOptionsChange",value:function(){return!(0,s.w)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}},{key:"disconnectDropTarget",value:function(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}},{key:"dropTarget",get:function(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}},{key:"clearDropTarget",value:function(){this.dropTargetRef=null,this.dropTargetNode=null}}]),e}(),g=t(21641),h=t(34311);var v=t(69463),p=!1,y=function(){function e(n){(0,u.Z)(this,e),this.targetId=null,this.internalMonitor=n.getMonitor()}return(0,c.Z)(e,[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"getHandlerId",value:function(){return this.targetId}},{key:"subscribeToStateChange",value:function(e,n){return this.internalMonitor.subscribeToStateChange(e,n)}},{key:"canDrop",value:function(){if(!this.targetId)return!1;(0,v.k)(!p,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return p=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{p=!1}}},{key:"isOver",value:function(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}();var D=t(9941),k=t(75793);var I=function(){function e(n,t){(0,u.Z)(this,e),this.spec=n,this.monitor=t}return(0,c.Z)(e,[{key:"canDrop",value:function(){var e=this.spec,n=this.monitor;return!e.canDrop||e.canDrop(n.getItem(),n)}},{key:"hover",value:function(){var e=this.spec,n=this.monitor;e.hover&&e.hover(n.getItem(),n)}},{key:"drop",value:function(){var e=this.spec,n=this.monitor;if(e.drop)return e.drop(n.getItem(),n)}}]),e}();function m(e,n,t){var r=(0,g.N)(),i=function(e,n){var t=(0,o.useMemo)((function(){return new I(e,n)}),[n]);return(0,o.useEffect)((function(){t.spec=e}),[e]),t}(e,n),a=function(e){var n=e.accept;return(0,o.useMemo)((function(){return(0,v.k)(null!=e.accept,"accept must be defined"),Array.isArray(n)?n:[n]}),[n])}(e);(0,h.L)((function(){var e=(0,D.Z)((0,k.n)(a,i,r),2),o=e[0],u=e[1];return n.receiveHandlerId(o),t.receiveHandlerId(o),u}),[r,n,i,t,a.map((function(e){return e.toString()})).join("|")])}function w(e,n){var t=(0,i.w)(e,n),u=function(){var e=(0,g.N)();return(0,o.useMemo)((function(){return new y(e)}),[e])}(),c=function(e){var n=(0,g.N)(),t=(0,o.useMemo)((function(){return new f(n.getBackend())}),[n]);return(0,h.L)((function(){return t.dropTargetOptions=e||null,t.reconnect(),function(){return t.disconnectDropTarget()}}),[e]),t}(t.options);return m(t,u,c),[(0,r.J)(t.collect,u,c),a(c)]}},34311:function(e,n,t){t.d(n,{L:function(){return r}});var r=t(67294).useLayoutEffect},58636:function(e,n,t){t.d(n,{w:function(){return o}});var r=t(69779),i=t(67294);function o(e,n){var t=(0,r.Z)(n||[]);return null==n&&"function"!==typeof e&&t.push(e),(0,i.useMemo)((function(){return"function"===typeof e?e():e}),t)}},48373:function(e,n,t){function r(e){return null!==e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}t.d(n,{d:function(){return r}})},75793:function(e,n,t){function r(e,n,t){var r=t.getRegistry(),i=r.addTarget(e,n);return[i,function(){return r.removeTarget(i)}]}function i(e,n,t){var r=t.getRegistry(),i=r.addSource(e,n);return[i,function(){return r.removeSource(i)}]}t.d(n,{n:function(){return r},w:function(){return i}})},85462:function(e,n,t){t.d(n,{p:function(){return a}});var r=t(69463),i=t(67294);function o(e){if("string"!==typeof e.type){var n=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors."+"You can either wrap ".concat(n," into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function a(e){var n={};return Object.keys(e).forEach((function(t){var r=e[t];if(t.endsWith("Ref"))n[t]=e[t];else{var a=function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(0,i.isValidElement)(n)){var r=n;return e(r,t),r}var a=n;o(a);var u=t?function(n){return e(n,t)}:e;return c(a,u)}}(r);n[t]=function(){return a}}})),n}function u(e,n){"function"===typeof e?e(n):e.current=n}function c(e,n){var t=e.ref;return(0,r.k)("string"!==typeof t,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),t?(0,i.cloneElement)(e,{ref:function(e){u(t,e),u(n,e)}}):(0,i.cloneElement)(e,{ref:n})}}}]);
//# sourceMappingURL=8628-5a288038b1d466bb.js.map