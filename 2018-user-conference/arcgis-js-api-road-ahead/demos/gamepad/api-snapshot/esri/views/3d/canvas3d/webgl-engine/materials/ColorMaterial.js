// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/canvas3d/webgl-engine/materials/ColorMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n\n\x3csnippets\x3e\n\n\x3csnippet name\x3d"vertexShaderColorMaterial"\x3e\x3c![CDATA[\n\tuniform mat4 proj;\n\tuniform mat4 view;\n\tuniform mat4 model;\n\n\tattribute vec3 $position;\n\tattribute vec4 $color;\n\n\tvarying vec4 vColor; \n\n\tvoid main(void) {\n\t\tvColor \x3d $color * 0.003921568627451; // \x3d 1/255;\n\t\tgl_Position \x3d proj * view * vec4((model * vec4($position, 1.0)).xyz, 1.0);\n\t}\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"fragmentShaderColorMaterial"\x3e\x3c![CDATA[\n\tprecision mediump float;\n\n\tuniform vec4 eColor;\n\tvarying vec4 vColor;\n\n\tvoid main() {\n\t\tgl_FragColor \x3d vColor * eColor;\n\t}\n]]\x3e\x3c/snippet\x3e\n\x3c/snippets\x3e'}});
define(["dojo/_base/lang","dojo/text!./ColorMaterial.xml","./internal/MaterialUtil","../lib/GLSLProgram","../lib/GLSLShader"],function(l,m,g,n,h){var f=function(a,d){g.basicMaterialConstructor(this,d);a=a||{};a.color=a.color||[1,1,1,1];a.polygonOffset=a.polygonOffset||!1;a.vertexColors=a.vertexColors||!1;var k=g.Layouts.PosColor;this.getParams=function(){return a};this.setColor=function(b){a.color=b;this.notifyDirty("matChanged")};this.getColor=function(){return a.color};this.setTransparent=function(b){a.transparent=
b;this.notifyDirty("matChanged")};this.getTransparent=function(b){return a.transparent};this.dispose=function(){};this.getOutputAmount=function(a){return a*k.getStride()};this.getVertexBufferLayout=function(){return k};this.fillInterleaved=function(a,e,d,c,p,f,h){g.fillInterleaved(a,e,d,c,k,p,f,h)};this.intersect=g.intersectTriangleGeometry;this.getGLMaterials=function(){return[q,void 0,void 0]};this.getAllTextureIds=function(){return[]}},q=function(a,d,k){g.basicGLMaterialConstructor(this,a);var b=
l.clone(a.getParams()),e=d.get("colorMaterial"),f=a.getColor();this.beginSlot=function(a){return a===(1>f[3]?2:1)};this.getProgram=function(){return e};this.updateParameters=function(){b.color=a.getColor();b.transparent=a.getTransparent()};this.bind=function(c,d){e.use();e.uniform4fv("eColor",b.color);a.getVertexBufferLayout().enableVertexAttribArrays(c,e);b.polygonOffset&&(c.enable(c.POLYGON_OFFSET_FILL),c.polygonOffset(1,1));b.transparent&&c.enable(c.BLEND);c.web3DDefaultState.cullFace&&c.disable(c.CULL_FACE)};
this.release=function(c){a.getVertexBufferLayout().disableVertexAttribArrays(c,e);b.transparent&&c.disable(c.BLEND);c.web3DDefaultState.cullFace&&c.enable(c.CULL_FACE)};this.bindView=function(a,b){g.bindView(b.origin,b.view,e)};this.bindInstance=function(a,b){e.uniformMatrix4fv("model",b.transformation)};this.getDrawMode=function(a){return a.TRIANGLES}};f.programs=null;f.loadShaders=function(a,d,f,b){a._parse(m);d=new h(b.VERTEX_SHADER,a.vertexShaderColorMaterial,b);a=new h(b.FRAGMENT_SHADER,a.fragmentShaderColorMaterial,
b);b=new n([d,a],b);f.add("colorMaterial",b)};return f});