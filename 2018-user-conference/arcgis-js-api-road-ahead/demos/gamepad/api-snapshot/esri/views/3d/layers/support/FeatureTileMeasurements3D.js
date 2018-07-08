// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/support/aaBoundingRect ./FeatureTileVisibility3D ../../lib/glMatrix ../../support/geometryUtils".split(" "),function(q,r,g,v,e,t){Object.defineProperty(r,"__esModule",{value:!0});q=function(){function f(a){this.screenRect=g.create();this.tileSize=a.tileSize;this.maxVerticalScreenSize=a.maxVerticalScreenSize;this.renderCoordsHelper=a.renderCoordsHelper;this.tilingScheme=a.tilingScheme;this.visibility=new v.FeatureTileVisibility3D({renderCoordsHelper:a.renderCoordsHelper})}
f.prototype.begin=function(a,b){this.camera=a;this.z=b;g.fromValues(0,0,a.fullWidth,a.fullHeight,this.screenRect);this.visibility.begin(a,b)};f.prototype.end=function(){this.visibility.end()};f.prototype.updateTile=function(a){a.measures.visibility=this.visibility.calculate(a);0!==a.measures.visibility&&this.updateScreenMeasure(a)};f.prototype.updateScreenMeasure=function(a){var b=w,c=1<<b,e=a.measures.screen.rect;g.empty(e);for(var f=0,x=a.lij[0]+b,h=a.lij[1]<<b,b=a.lij[2]<<b,d=this.tileSizeWithBias(a),
d=d*d,n=!1,m=0,k=0;k<c;k++){for(var l=0;l<c&&!(n=this.computeScreenArea(a,x,h+k,b+l,e),f+=n.area,m+=n.screenOverlap*n.area,n=f>d&&g.height(e)>this.maxVerticalScreenSize);l++);if(n)break}a.measures.shouldSplit=f>d;a.measures.screen.area=m};f.prototype.tileSizeWithBias=function(a){return 1===a.measures.visibility?this.tileSize*y:this.tileSize};f.prototype.computeScreenArea=function(a,b,c,e,f){var d=p.points;this.projectToScreen(b,c,e,1===a.measures.visibility,d);g.empty(m);for(a=0;4>a;a++)g.expandPointInPlace(m,
d[a]);g.expand(f,m);g.intersection(m,this.screenRect,u);p.screenOverlap=g.area(u)/g.area(m);p.area=t.triangle.areaPoints2d(d[0],d[1],d[2])+t.triangle.areaPoints2d(d[0],d[2],d[3]);return p};f.prototype.projectToScreen=function(a,b,c,e,f){this.tilingScheme.ensureMaxLod(a);this.tilingScheme.getExtent(a,b,c,d);this.toRenderCoords(a,b,c,d,0,3,h[0]);this.toRenderCoords(a,b,c+1,d,2,3,h[1]);this.toRenderCoords(a,b+1,c+1,d,2,1,h[2]);this.toRenderCoords(a,b+1,c,d,0,1,h[3]);e&&(this.projectToPlane(h,this.camera.frustumPlanes[4]),
this.projectToPlane(h,this.camera.frustumPlanes[3]),this.projectToPlane(h,this.camera.frustumPlanes[2]));for(a=0;4>a;a++)this.camera.projectPoint(h[a],f[a])};f.prototype.projectToPlane=function(a,b){for(var c=0;4>c;c++)k[c]=t.plane.distance(b,a[c]);c=Math.max(k[0],k[1],k[2],k[3]);if(0<c)for(b=e.vec3d.scale(b,-c,l),c=0;4>c;c++)e.vec3d.add(a[c],b)};f.prototype.toRenderCoords=function(a,b,c,e,f,g,h){l[0]=d[f];l[1]=d[g];l[2]=this.z;this.renderCoordsHelper.toRenderCoords(l,this.tilingScheme.spatialReference,
h);return h};return f}();r.FeatureTileMeasurements3D=q;var m=g.create(),u=g.create(),w=2,y=5,p={points:[e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create()],area:0,screenOverlap:0},d=g.create(),l=e.vec3d.create(),h=[e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create()],k=[0,0,0,0];r.default=q});