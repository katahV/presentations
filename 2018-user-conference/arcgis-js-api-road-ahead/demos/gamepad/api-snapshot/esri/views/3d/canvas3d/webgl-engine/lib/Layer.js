// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("./IdGen ./Octree ./PerformanceTimer ./Util ./gl-matrix ../parts/Model".split(" "),function(m,r,t,u,n,v){var g=n.vec3d,w=new m;return function(m,c,n){var x=w.gen(n);this.getId=function(){return x};c=c||{};var y=c.group||"",q=c.state||"VISIBLE",z=c.interaction||"PICKABLE",A=c.translation||[0,0,0],l=c.spatialAcceleration||"octree",f=c.initialExtent||c.fullExtent||[0,0,1E3,1E3],k=!c.initialExtent,h=[];this.getParentStages=function(){return h};this.addParentStage=function(a){-1==h.indexOf(a)&&
h.push(a)};this.removeParentStage=function(a){a=h.indexOf(a);-1<a&&h.splice(a,1)};var d=[];this.getName=function(){return m};this.getGroup=function(){return y};this.getState=function(){return q};this.getInteraction=function(){return z};this.getTranslation=function(){return A};this.getObjectIds=function(){return d.map(function(a){return a.getId()})};this.getObjects=function(){return d};this.setState=function(a){q=a};this.getSpatialAcceleration=function(){return l};this.setSpatialAcceleration=function(a){a!=
l&&(l=a,this._spatialAccelerator=void 0)};this.getExtent=function(){p();return f};this.getFullExtent=function(){return c.fullExtent||this.getExtent()};this.addObject=function(a){d.push(a);a.addParentLayer(this);this.notifyDirty("layObjectAdded",a);k=!0;this._spatialAccelerator&&this._spatialAccelerator.addObject(a)};this.hasObject=function(a){return-1<d.indexOf(a)};this.removeObject=function(a){var b=d.indexOf(a);return-1<b?(d.splice(b,1),a.removeParentLayer(this),this.notifyDirty("layObjectRemoved",
a),k=!0,this._spatialAccelerator&&this._spatialAccelerator.removeObject(a),!0):!1};this.replaceObject=function(a,b){var e=d.indexOf(a);u.assert(-1<e,"Layer.replaceObject: layer doesn't contain specified object");d[e]=b;a.removeParentLayer(this);b.addParentLayer(this);this.notifyDirty("layObjectReplaced",[a,b]);k=!0;this._spatialAccelerator&&(this._spatialAccelerator.removeObject(a),this._spatialAccelerator.addObject(b))};this.notifyObjectBBChanged=function(a,b){this._spatialAccelerator&&this._spatialAccelerator.updateObject(a,
b)};this.getCenter=function(){p();var a=g.create();return g.lerp(f[0],f[1],.5,a)};this.getBSRadiusApprox=function(){p();return.5*g.dist(f[0],f[1])};this.getSpatialQueryAccelerator=function(){if("octree"===l){if(this._spatialAccelerator)return this._spatialAccelerator;if(50<d.length){for(var a=c.fullExtent||this.getExtent(),b=0,e=0;3>e;e++)b=Math.max(b,a[1][e]-a[0][e]);e=g.create();g.lerp(a[0],a[1],.5,e);a=new t(1);a.start();this._spatialAccelerator=new r(1.2*b,e);for(b=0;b<d.length;b++)this._spatialAccelerator.addObject(d[b]);
b=a.stop();console.log("Octree for layer "+this.getId()+" created in "+Math.round(b)+" ms");return this._spatialAccelerator}}};var p=function(){if(k)if(0===d.length)f=[[0,0,0],[0,0,0]];else{var a=d[0];f=[g.create(a.getBBMin()),g.create(a.getBBMax())];for(a=0;a<d.length;++a)for(var b=d[a],e=b.getBBMin(),b=b.getBBMax(),c=0;3>c;++c)f[0][c]=Math.min(f[0][c],e[c]),f[1][c]=Math.max(f[1][c],b[c]);k=!1}};this.notifyDirty=function(a,b,c,d){c=c||v.ContentType.LAYER;d=d||this;for(var e=0;e<h.length;e++)h[e].notifyDirty(c,
d,a,b)}}});