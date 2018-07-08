// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"esri/widgets/Legend/styles/Card":function(){define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../../../nls/common dojo/i18n!../../Legend/nls/Legend dojox/gfx ../../../core/lang ../../../core/accessorSupport/decorators ../../Widget ../../Legend/support/styleUtils ../../support/colorUtils ../../support/widget".split(" "),function(A,e,x,h,u,n,y,v,w,m,C,d,b){return function(l){function c(a){a=l.call(this)||this;a._hasIndicators=
!1;a._selectedSectionName=null;a._sectionNames=[];a._sectionMap=new Map;a.activeLayerInfos=null;a.view=null;return a}x(c,l);c.prototype.render=function(){var a=this;this._sectionNames.length=0;this._hasIndicators=768>=this.view.container.clientWidth;var c=this.activeLayerInfos,c=c&&c.toArray().map(function(b){return a._renderLegendForLayer(b)}).filter(function(a){return!!a});this._hasIndicators?this._selectedSectionName&&-1!==this._sectionNames.indexOf(this._selectedSectionName)||(this._selectedSectionName=
this._sectionNames&&this._sectionNames[0]):this._selectedSectionName=null;var f=this._sectionNames.length,g=this._sectionNames.map(function(c,r){r=v.substitute({index:r+1,total:f},u.pagination.pageText);return b.tsx("div",{key:c,"aria-label":r,title:r,tabIndex:0,onclick:a._selectSection,onkeydown:a._selectSection,bind:a,class:a.classes("esri-legend--card__carousel-indicator",(g={},g["esri-legend--card__carousel-indicator--activated"]=a._selectedSectionName===c,g)),"data-section-name":c});var g}),
g=this._hasIndicators?b.tsx("div",{class:"esri-legend--card__carousel-indicator-container",key:"carousel-navigation"},g):null,c=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):c&&c.length?c:null;return b.tsx("div",{class:"esri-legend--card esri-widget"},g,c?c:b.tsx("div",{class:"esri-legend--card__message"},n.noLegend))};c.prototype._selectSection=function(a){if(a=a.target.getAttribute("data-section-name"))this._selectedSectionName=a};c.prototype._renderLegendForLayer=function(a){var c=
this;if(!a.ready)return null;var f="esri-legend--card__"+a.layer.uid+"-version-"+a.version;if(a.children.length){var g=a.children.map(function(a){return c._renderLegendForLayer(a)}).toArray();this._sectionNames.push(f);return b.tsx("div",{key:a.layer.uid,class:"esri-legend--card__service"},b.tsx("div",{class:"esri-legend--card__service-caption-container"},a.title),g)}if((f=a.legendElements)&&!f.length)return null;f=f.map(function(b){return c._renderLegendForElement(b,a.layer)}).filter(function(a){return!!a});
return f.length?b.tsx("div",{key:a.layer.uid,class:"esri-legend--card__service"},b.tsx("div",{class:"esri-legend--card__service-caption-container"},b.tsx("div",{class:"esri-legend--card__service-caption-text"},a.title)),b.tsx("div",{class:"esri-legend--card__service-content"},f)):null};c.prototype._renderLegendForElement=function(a,c){var f=this,g="color-ramp"===a.type,r="opacity-ramp"===a.type,d="size-ramp"===a.type,p=a.title,l=null;"string"===typeof p?l=p:p&&(l=C.getTitle(p,g||r),l=p.title?p.title+
" ("+l+")":l);var p="esri-legend--card__"+c.uid+"-type-"+a.type,m=this._hasIndicators?b.tsx("p",{class:"esri-legend--card__carousel-title"},c.title):null,k=null;"symbol-table"===a.type?(g=a.infos.map(function(b){return f._renderLegendForElementInfo(b,c,d,a.legendType)}).filter(function(a){return!!a}),this._hasIndicators||g.reverse(),g.length&&(r=g[0].properties.classes&&g[0].properties.classes["esri-legend--card__symbol-row"],r=(z={},z["esri-legend--card__label-container"]=!r,z),k=b.tsx("div",{key:p,
class:"esri-legend--card__section"},m,b.tsx("div",{class:"esri-legend--card__layer-caption"},l),b.tsx("div",{class:this.classes(r)},g)))):g||r?k=b.tsx("div",{key:p,class:"esri-legend--card__section"},m,b.tsx("div",{class:"esri-legend--card__layer-caption"},l),this._renderLegendForRamp(a.infos,a.overlayColor,r)):d&&(k=b.tsx("div",{key:p,class:"esri-legend--card__section"},m,b.tsx("div",{class:"esri-legend--card__layer-caption"},l),this._renderSizeRamps(a.infos)));if(!k)return null;this._sectionNames.push(p);
this._sectionMap.set(p,k);return k;var z};c.prototype._renderLegendForElementInfo=function(a,c,f,g){if(a.type)return this._renderLegendForElement(a,c);f=C.isImageryStretchedLegend(c,g);if(a.symbol&&a.preview){if(!a.label)return-1===a.symbol.type.indexOf("simple-fill")?b.tsx("div",{bind:a.preview,afterCreate:C.attachToNode}):null;if(-1!==a.symbol.type.indexOf("marker"))return c=(z={},z["esri-legend--card__symbol-cell"]=this._hasIndicators,z),b.tsx("div",{class:this.classes("esri-legend--card__layer-row",
(h={},h["esri-legend--card__symbol-row"]=this._hasIndicators,h))},b.tsx("div",{class:this.classes(c),bind:a.preview,afterCreate:C.attachToNode}),b.tsx("div",{class:this.classes("esri-legend--card__image-label",(e={},e["esri-legend--card__label-cell"]=this._hasIndicators,e))},a.label||""));e=h=z=255;c=0;var r=g=f=255,l=0,p=a.symbol.color&&a.symbol.color.a,m=a.symbol.outline&&a.symbol.outline.color.a;p&&(z=a.symbol.color.r,h=a.symbol.color.g,e=a.symbol.color.b,c=a.symbol.color.a);m&&(f=a.symbol.outline.color.r,
g=a.symbol.outline.color.g,r=a.symbol.outline.color.b,l=a.symbol.outline.color.a);var u=d.isBright(a.symbol.color),k=u?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)";return b.tsx("div",{key:a.label,class:"esri-legend--card__label-element",styles:{background:p?"rgba("+z+", "+h+", "+e+", "+c+")":"none",color:u?"black":"white",textShadow:"-1px -1px 0 "+k+",\n                                              1px -1px 0 "+k+",\n                                              -1px 1px 0 "+k+",\n                                              1px 1px 0 "+
k,border:m?"1px solid rgba("+f+", "+g+", "+r+", "+l+")":"none"}}," ",a.label," ")}if(a.src)return z=this._renderImage(a,c,f),b.tsx("div",{class:"esri-legend--card__layer-row"},z,b.tsx("div",{class:"esri-legend--card__image-label"},a.label||""));var z,h,e};c.prototype._renderImage=function(a,c,f){var g=a.label,d=a.src,r=a.opacity;f=(l={},l["esri-legend--card__imagery-layer-image--stretched"]=f,l["esri-legend--card__symbol"]=!f,l);c={opacity:""+(null!=r?r:c.opacity)};return b.tsx("img",{alt:g,src:d,
border:0,width:a.width,height:a.height,class:this.classes(f),styles:c});var l};c.prototype._renderSizeRamps=function(a){var c=document.createElement("div"),f,g=a[a.length-1].symbol.color,d,l,p=a[0].label,m=a[a.length-1].label,h=a[0].symbol.style&&"circle"===a[0].symbol.style;try{if(this._hasIndicators)if(l=100,h){var k=a[0].symbol.size/2,e=a[a.length-1].symbol.size/2;d=2*k;var u=l-k-e,v=Math.sqrt(Math.pow(u,2)-Math.pow(k-e,2)),n=k*v/u,w=k+n,x=k+Math.sqrt(Math.pow(k,2)-Math.pow(n,2)),B=e*n/k,A=k+B,
D=l-(e-Math.sqrt(Math.pow(e,2)-Math.pow(B,2))),n=k-n,B=k-B;f=y.createSurface(c,d,l);f.createCircle({cx:k,cy:k,r:k}).setFill(g).setStroke({color:"#ddd",width:1});f.createCircle({cx:k,cy:l-e,r:e}).setFill(g).setStroke({color:"#ddd",width:1});f.createLine({x1:w,y1:x,x2:A,y2:D}).setStroke({color:"#ddd",width:1});f.createLine({x1:n,y1:x,x2:B,y2:D}).setStroke({color:"#ddd",width:1})}else{var q=Math.max(a[0].symbol.height,a[0].symbol.width),t=Math.max(a[a.length-1].symbol.height,a[a.length-1].symbol.width);
d=q;f=y.createSurface(c,d,l);f.createRect({x:0,y:0,height:q,width:q}).setStroke({color:"#ddd",width:1});f.createRect({x:q/2-t/2,y:l-t,height:t,width:t}).setStroke({color:"#ddd",width:1});f.createImage({src:a[0].symbol.url,height:q,width:q});f.createImage({src:a[a.length-1].symbol.url,height:t,width:t,y:l-t,x:q/2-t/2});f.createLine({x1:0,y1:q,x2:q/2-t/2,y2:l-t}).setStroke({color:"#ddd",width:1});f.createLine({x1:d,y1:q,x2:q/2+t/2,y2:l-t}).setStroke({color:"#ddd",width:1})}else d=180,h?(k=a[0].symbol.size/
2,e=a[a.length-1].symbol.size/2,l=2*k,u=d-k-e,v=Math.sqrt(Math.pow(u,2)-Math.pow(k-e,2)),n=k*v/u,x=k-n,w=d-(k+Math.sqrt(Math.pow(k,2)-Math.pow(n,2))),B=e*n/k,D=k-B,A=e-Math.sqrt(Math.pow(e,2)-Math.pow(B,2)),n=k+n,B=k+B,f=y.createSurface(c,d,l),f.createCircle({cx:d-k,cy:k,r:k}).setFill(g).setStroke({color:"#ddd",width:1}),f.createCircle({cx:e,cy:k,r:e}).setFill(g).setStroke({color:"#ddd",width:1}),f.createLine({x1:w,y1:x,x2:A,y2:D}).setStroke({color:"#ddd",width:1}),f.createLine({x1:w,y1:n,x2:A,y2:B}).setStroke({color:"#ddd",
width:1})):(q=Math.max(a[0].symbol.height,a[0].symbol.width),t=Math.max(a[a.length-1].symbol.height,a[a.length-1].symbol.width),f=y.createSurface(c,d,q),f.createRect({x:0,y:q/2-t/2,height:t,width:t}).setStroke({color:"#ddd",width:1}),f.createRect({x:d-q,y:0,height:q,width:q}).setStroke({color:"#ddd",width:1}),f.createImage({src:a[a.length-1].symbol.url,height:t,width:t,y:q/2-t/2}),f.createImage({src:a[0].symbol.url,height:q,width:q,x:d-q}),f.createLine({x1:t,y1:q/2-t/2,x2:d-q,y2:0}).setStroke({color:"#ddd",
width:1}),f.createLine({x1:t,y1:q/2+t/2,x2:d-q,y2:q}).setStroke({color:"#ddd",width:1})),g=p,p=m,m=g}catch(G){f.clear(),f.destroy()}return f?b.tsx("div",{class:this.classes("esri-legend--card__layer-row",(E={},E["esri-legend--card__size-ramp-row"]=this._hasIndicators,E))},b.tsx("div",{class:"esri-legend--card__ramp-label"},p),b.tsx("div",{class:"esri-legend--card__size-ramp-container"},b.tsx("div",{bind:c,afterCreate:C.attachToNode})),b.tsx("div",{class:"esri-legend--card__ramp-label"},m)):null;var E};
c.prototype._renderLegendForRamp=function(a,c,f){var d=a.length-1;f=2<d?25*d:100;var l=f+20;c=document.createElement("div");c.style.width=l+"px";var r=y.createSurface(c,l,25),e=a.slice(0).reverse();try{e.forEach(function(a,b){a.offset=b/d}),r.createPath("M0 12.5 L10 0 L10 25 Z").setFill(e[0].color).setStroke(null),r.createRect({x:10,y:0,width:f,height:25}).setFill({type:"linear",x1:10,y1:0,x2:f+10,y2:0,colors:e}).setStroke(null),r.createPath("M"+(f+10)+" 0 L"+l+" 12.5 L"+(f+10)+" 25 Z").setFill(e[e.length-
1].color).setStroke(null)}catch(F){r.clear(),r.destroy()}if(!r)return null;f=e.filter(function(a,b){return!!a.label&&0!==b&&b!==e.length-1}).map(function(a){return b.tsx("div",{class:"esri-legend--card__interval-separators-container"},b.tsx("div",{class:"esri-legend--card__interval-separator"},"|"),b.tsx("div",{class:"esri-legend--card__ramp-label"},a.label))});return b.tsx("div",{class:"esri-legend--card__layer-row"},b.tsx("div",{class:"esri-legend--card__ramp-label"},a[a.length-1].label),b.tsx("div",
{class:"esri-legend--card__symbol-container"},b.tsx("div",{bind:c,afterCreate:C.attachToNode}),f),b.tsx("div",{class:"esri-legend--card__ramp-label"},a[0].label))};h([b.renderable(),w.property()],c.prototype,"activeLayerInfos",void 0);h([w.property()],c.prototype,"view",void 0);h([b.accessibleHandler()],c.prototype,"_selectSection",null);return c=h([w.subclass("esri.widgets.Legend.styles.Card")],c)}(w.declared(m))})},"esri/widgets/Legend/support/styleUtils":function(){define(["require","exports",
"dojo/i18n!../../Legend/nls/Legend","../../../core/lang"],function(A,e,x,h){Object.defineProperty(e,"__esModule",{value:!0});e.attachToNode=function(e){e.appendChild(this)};e.getTitle=function(e,n){var u=null;n?u=e.ratioPercentTotal?"showRatioPercentTotal":e.ratioPercent?"showRatioPercent":e.ratio?"showRatio":e.normField?"showNormField":e.field?"showField":null:n||(u=e.normField?"showNormField":e.normByPct?"showNormPct":e.field?"showField":null);return u?h.substitute({field:e.field,normField:e.normField},
x[u]):null};e.isRendererTitle=function(e,h){return!h};e.isImageryStretchedLegend=function(e,h){return!!(h&&"Stretched"===h&&10.3<=e.version&&"esri.layers.ImageryLayer"===e.declaredClass)}})},"esri/widgets/support/colorUtils":function(){define(["require","exports","../../Color"],function(A,e,x){function h(d){return new x(d)}function u(d){return!!d&&4===d.length&&m.test(d)}function n(d){return!!d&&7===d.length&&C.test(d)}function y(d){return 127<=.299*d.r+.587*d.g+.114*d.b}function v(d,b){void 0===
b&&(b=1);b=Math.pow(.7,b);return new x([Math.round(d.r*b),Math.round(d.g*b),Math.round(d.b*b),d.a])}function w(d,b){void 0===b&&(b=1);b=Math.pow(.7,b);var e=d.r,c=d.g,a=d.b;30>e&&(e=30);30>c&&(c=30);30>a&&(a=30);return new x([Math.min(255,Math.round(e/b)),Math.min(255,Math.round(c/b)),Math.min(255,Math.round(a/b)),d.a])}Object.defineProperty(e,"__esModule",{value:!0});var m=/^#[0-9A-F]{3}$/i,C=/^#[0-9A-F]{6}$/i;e.equal=function(d,b){return d&&b&&d.r===b.r&&d.g===b.g&&d.b===b.b&&d.a===b.a};e.normalizeHex=
function(d){return d?"#"+d.trim().replace(/#/g,"").substr(0,6):""};e.normalizeColor=h;e.isValidHex=function(d){return u(d)||n(d)};e.isShorthandHex=u;e.isLonghandHex=n;e.toHex=function(d){return h(d).toHex()};e.getContrastingColor=function(d){return y(d)?v(d):w(d,3)};e.isBright=y;e.darker=v;e.brighter=w})},"esri/widgets/Legend/styles/Classic":function(){define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../../Legend/nls/Legend dojox/gfx ../../../core/accessorSupport/decorators ../../Widget ../../Legend/support/styleUtils ../../support/widget".split(" "),
function(A,e,x,h,u,n,y,v,w,m){return function(e){function d(b){b=e.call(this)||this;b.activeLayerInfos=null;return b}x(d,e);d.prototype.render=function(){var b=this,d=this.activeLayerInfos,c=this.classes("esri-legend esri-widget--panel","esri-widget"),d=d&&d.toArray().map(function(a){return b._renderLegendForLayer(a)}).filter(function(a){return!!a});return m.tsx("div",{class:c},d&&d.length?d:m.tsx("div",{class:"esri-legend__message"},u.noLegend))};d.prototype._renderLegendForLayer=function(b){var d=
this;if(!b.ready)return null;var c=!!b.children.length,a="esri-legend__"+b.layer.uid+"-version-"+b.version,e=b.title?m.tsx("div",{class:"esri-legend__service-label"},b.title):null;if(c){var f=b.children.map(function(a){return d._renderLegendForLayer(a)}).toArray(),c=(g={},g["esri-legend__group-layer"]=c,g);return m.tsx("div",{key:a,class:this.classes("esri-legend__service",c)},e,f)}if((c=b.legendElements)&&!c.length)return null;g=c.map(function(a){return d._renderLegendForElement(a,b.layer)}).filter(function(a){return!!a});
if(!g.length)return null;c=(f={},f["esri-legend__group-layer-child"]=!!b.parent,f);return m.tsx("div",{key:a,class:this.classes("esri-legend__service",c)},e,m.tsx("div",{class:"esri-legend__layer"},g));var g};d.prototype._renderLegendForElement=function(b,d,c){var a=this,e="color-ramp"===b.type,f="opacity-ramp"===b.type,g="size-ramp"===b.type,l=null;if("symbol-table"===b.type||g){var h=b.infos.map(function(c){return a._renderLegendForElementInfo(c,d,g,b.legendType)}).filter(function(a){return!!a});
h.length&&(l=m.tsx("div",{class:"esri-legend__layer-body"},h))}else if(e||f)l=this._renderLegendForRamp(b.infos,b.overlayColor,f);if(!l)return null;var h=b.title,p=null;"string"===typeof h?p=h:h&&(p=w.getTitle(h,e||f),p=w.isRendererTitle(h,e||f)&&h.title?h.title+" ("+p+")":p);e=c?"esri-legend__layer-child-table":"esri-legend__layer-table";f=p?m.tsx("div",{class:"esri-legend__layer-caption"},p):null;c=(n={},n["esri-legend__layer-table--size-ramp"]=g||!c,n);return m.tsx("div",{class:this.classes(e,
c)},f,l);var n};d.prototype._renderLegendForRamp=function(b,d,c){var a=b.length-1,e=null;2<a?e=25*a:e=50;var f=document.createElement("div");f.className="esri-legend__color-ramp "+(c?"esri-legend__opacity-ramp":"");f.style.height=e+"px";c=n.createSurface(f,"100%",e);try{b.forEach(function(b,c){b.offset=c/a}),c.createRect({x:0,y:0,width:"100%",height:e}).setFill({type:"linear",x1:0,y1:0,x2:0,y2:e,colors:b}).setStroke(null),d&&0<d.a&&c.createRect({x:0,y:0,width:"100%",height:e}).setFill(d).setStroke(null)}catch(g){c.clear(),
c.destroy()}if(!c)return null;b=b.filter(function(a){return!!a.label}).map(function(a){return m.tsx("div",{class:"esri-legend__ramp-label"},a.label)});e={height:e+"px"};return m.tsx("div",{class:"esri-legend__layer-row"},m.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--symbols",styles:{width:"24px"}},m.tsx("div",{class:"esri-legend__ramps",bind:f,afterCreate:w.attachToNode})),m.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},m.tsx("div",{class:"esri-legend__ramp-labels",
styles:e},b)))};d.prototype._renderLegendForElementInfo=function(b,d,c,a){if(b.type)return this._renderLegendForElement(b,d,!0);var e=null;a=w.isImageryStretchedLegend(d,a);b.symbol&&b.preview?e=m.tsx("div",{class:"esri-legend__symbol",bind:b.preview,afterCreate:w.attachToNode}):b.src&&(e=this._renderImage(b,d,a));if(!e)return null;d=(f={},f["esri-legend__imagery-layer-info--stretched"]=a,f);c=(g={},g["esri-legend__imagery-layer-info--stretched"]=a,g["esri-legend__size-ramp"]=!a&&c,g);return m.tsx("div",
{class:"esri-legend__layer-row"},m.tsx("div",{class:this.classes("esri-legend__layer-cell esri-legend__layer-cell--symbols",c)},e),m.tsx("div",{class:this.classes("esri-legend__layer-cell esri-legend__layer-cell--info",d)},b.label||""));var f,g};d.prototype._renderImage=function(b,d,c){var a=b.label,e=b.src,f=b.opacity;c=(g={},g["esri-legend__imagery-layer-image--stretched"]=c,g["esri-legend__symbol"]=!c,g);d={opacity:""+(null!=f?f:d.opacity)};return m.tsx("img",{alt:a,src:e,border:0,width:b.width,
height:b.height,class:this.classes(c),styles:d});var g};h([m.renderable(),y.property()],d.prototype,"activeLayerInfos",void 0);return d=h([y.subclass("esri.widgets.Legend.styles.Classic")],d)}(y.declared(v))})},"*now":function(A){A(['dojo/i18n!*preload*esri/widgets/nls/Legend*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])},"*noref":1}});
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Legend/nls/Legend ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./Legend/LegendViewModel ./Legend/styles/Card ./Legend/styles/Classic ./support/widget".split(" "),function(A,e,x,h,u,n,y,v,w,m,C,d,b){return function(e){function c(a){a=e.call(this)||this;a._handles=new n;a._styleRenderer=null;a.activeLayerInfos=null;a.basemapLegendVisible=!1;a.groundLegendVisible=
!1;a.iconClass="esri-icon-layer-list";a.label=u.widgetLabel;a.layerInfos=null;a.view=null;a.viewModel=new m;return a}x(c,e);c.prototype.postInitialize=function(){var a=this;this._updateStyleRenderer(this.style);this.own(y.on(this,"activeLayerInfos","change",function(){return a._refreshActiveLayerInfos(a.activeLayerInfos)}))};c.prototype.destroy=function(){this._handles.destroy();this._handles=null};Object.defineProperty(c.prototype,"style",{get:function(){return this._get("style")},set:function(a){this._updateStyleRenderer(a);
this._set("style",a)},enumerable:!0,configurable:!0});c.prototype.render=function(){return this._styleRenderer.render()};c.prototype._updateStyleRenderer=function(a){this._styleRenderer&&this._styleRenderer.destroy();this._styleRenderer="card"===a?new C({activeLayerInfos:this.activeLayerInfos,view:this.view}):new d({activeLayerInfos:this.activeLayerInfos})};c.prototype._refreshActiveLayerInfos=function(a){var b=this;this._handles.removeAll();a.forEach(function(a){return b._renderOnActiveLayerInfoChange(a)});
this.scheduleRender()};c.prototype._renderOnActiveLayerInfoChange=function(a){var b=this,c=y.init(a,"version",function(){return b.scheduleRender()});this._handles.add(c,"version_"+a.layer.uid);a.children.forEach(function(a){return b._renderOnActiveLayerInfoChange(a)})};h([v.aliasOf("viewModel.activeLayerInfos"),b.renderable()],c.prototype,"activeLayerInfos",void 0);h([v.aliasOf("viewModel.basemapLegendVisible"),b.renderable()],c.prototype,"basemapLegendVisible",void 0);h([v.aliasOf("viewModel.groundLegendVisible"),
b.renderable()],c.prototype,"groundLegendVisible",void 0);h([v.property()],c.prototype,"iconClass",void 0);h([v.property()],c.prototype,"label",void 0);h([v.aliasOf("viewModel.layerInfos"),b.renderable()],c.prototype,"layerInfos",void 0);h([v.property({value:"classic",dependsOn:["activeLayerInfos"]}),b.renderable()],c.prototype,"style",null);h([v.aliasOf("viewModel.view"),b.renderable()],c.prototype,"view",void 0);h([v.property(),b.renderable(["view.size"])],c.prototype,"viewModel",void 0);return c=
h([v.subclass("esri.widgets.Legend")],c)}(v.declared(w))});