// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./FeatureLayer ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer".split(" "),function(h,t,k,c,l,m,f,b,e,n,p,q){return function(g){function a(){var d=g.call(this)||this;d.title=null;d.type="map-notes";return d}k(a,g);Object.defineProperty(a.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(d,
a){return d?d.union(a.fullExtent):a.fullExtent},null):null},enumerable:!0,configurable:!0});a.prototype.readFeatureCollectionsFromItem=function(d,a,b){return a.layers.map(function(a){return(new e).read(a,b)})};a.prototype.readFeatureCollectionsFromWebMap=function(a,r,b){return r.featureCollection.layers.map(function(a){return(new e).read(a,b)})};Object.defineProperty(a.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(a,b){return null==a?b.minScale:
Math.min(a,b.minScale)},null):0},set:function(a){this.featureCollections.forEach(function(b){b.minScale=a});this._set("minScale",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(a,b){return null==a?b.maxScale:Math.min(a,b.maxScale)},null):0},set:function(a){this.featureCollections.forEach(function(b){b.maxScale=a});this._set("maxScale",a)},enumerable:!0,configurable:!0});a.prototype.load=
function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]}));return this.when()};a.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return f.create(function(a){return h(["../views/2d/layers/MapNotesLayerView2D"],a)});case "3d":return f.reject(new m("map-notes-layer:view-not-supported","MapNotesLayer is only supported in 2D"))}};c([b.property()],a.prototype,"title",void 0);c([b.property({dependsOn:["featureCollections"],readOnly:!0})],a.prototype,
"fullExtent",null);c([b.property({type:l.ofType(e)})],a.prototype,"featureCollections",void 0);c([b.reader("portal-item","featureCollections",["layers"])],a.prototype,"readFeatureCollectionsFromItem",null);c([b.reader("web-map","featureCollections",["featureCollection.layers"])],a.prototype,"readFeatureCollectionsFromWebMap",null);c([b.property({dependsOn:["featureCollections"]})],a.prototype,"minScale",null);c([b.property({dependsOn:["featureCollections"]})],a.prototype,"maxScale",null);c([b.property({readOnly:!0,
json:{read:!1}})],a.prototype,"type",void 0);return a=c([b.subclass("esri.layers.MapNotesLayer")],a)}(b.declared(n,p,q))});