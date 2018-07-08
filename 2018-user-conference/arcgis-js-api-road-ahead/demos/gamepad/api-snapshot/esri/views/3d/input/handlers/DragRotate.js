// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../state/controllers/RotateController ../../state/helpers/PickingHelper ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(a,f,g,h,k,l,m){Object.defineProperty(f,"__esModule",{value:!0});a=function(a){function e(b,d,n,e){var c=a.call(this,!0)||this;c.view=b;c.pointerAction=d;c.pivotPoint=n;c.pickingHelper=new k.PickingHelper(b);c.registerIncoming("drag",e,function(b){return c.handleDrag(b)});return c}
g(e,a);e.prototype.handleDrag=function(b){var d=b.data;if(!(1<d.pointers.size)&&m.eventMatchesMousePointerAction(b.data,this.pointerAction)){var a=[d.center.x,this.view.height-d.center.y];switch(d.action){case "start":this.cameraController=new h.RotateController(this.view,this.pickingHelper,this.pivotPoint);this.view.state.switchCameraController(this.cameraController);this.cameraController.begin(a);break;case "update":this.cameraController.update(a);break;case "end":this.cameraController.end(),this.cameraController=
null}b.stopPropagation()}};return e}(l.InputHandler);f.DragRotate=a});