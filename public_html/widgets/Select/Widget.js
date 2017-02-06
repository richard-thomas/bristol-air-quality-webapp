// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/dijit/FeatureSetChooserForMultipleLayers":function(){define("dojo/on dojo/sniff dojo/mouse dojo/query dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/array dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/FeatureSetChooserForMultipleLayers.html dijit/popup dijit/TooltipDialog jimu/utils jimu/dijit/DrawBox jimu/dijit/_FeatureSetChooserCore".split(" "),function(g,b,f,d,h,e,c,k,l,q,t,n,p,u,m,
s,a,w,v){return q([t,n,p,h],{baseClass:"jimu-multiple-layers-featureset-chooser",templateString:u,drawBox:null,_instances:null,_tooltipDialogTimeoutId1:-1,_tooltipDialogClientX1:-1,_tooltipDialogTimeoutId2:-1,_tooltipDialogClientX2:-1,_tooltipTimeout:1E3,_currentGeoTypeInfo:null,_geoTypeInfos:null,map:null,updateSelection:!1,fullyWithin:!1,geoTypes:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.featureSetChooser;var a=["EXTENT","POLYGON","CIRCLE","POLYLINE"];
this.geoTypes&&0<this.geoTypes.length&&(this.geoTypes=k.filter(this.geoTypes,c.hitch(this,function(b){return 0<=a.indexOf(b)})));if(!this.geoTypes||0===this.geoTypes.length)this.geoTypes=["EXTENT"]},postCreate:function(){this.inherited(arguments);this._instances=[];d(".select-text",this.domNode)[0].innerHTML=this.nls.select;d(".clear-text",this.domNode)[0].innerHTML=window.jimuNls.common.clear;d(".draw-item-rectangle .draw-text",this.domNode)[0].innerHTML=this.nls.selectByRectangle;d(".draw-item-polygon .draw-text",
this.domNode)[0].innerHTML=this.nls.selectByPolygon;d(".draw-item-circle .draw-text",this.domNode)[0].innerHTML=this.nls.selectByCircle;d(".draw-item-polyline .draw-text",this.domNode)[0].innerHTML=this.nls.selectByLine;this._initTooltipDialogs();this._initDrawBox();this._geoTypeInfos=[];0===this.geoTypes.length&&this.geoTypes.push("EXTENT");1===this.geoTypes.length?e.addClass(this.domNode,"single-geotype"):e.addClass(this.domNode,"multiple-geotypes");var x={EXTENT:[this.rectangleItem,this.drawBox.extentIcon],
POLYGON:[this.polygonItem,this.drawBox.polygonIcon],CIRCLE:[this.circleItem,this.drawBox.circleIcon],POLYLINE:[this.polylineItem,this.drawBox.polylineIcon]};k.forEach(["EXTENT","POLYGON","CIRCLE","POLYLINE"],c.hitch(this,function(a){var r=x[a],b=r[0];0<=this.geoTypes.indexOf(a)?(a={geoType:a,dom1:r[0],dom2:r[1]},this._geoTypeInfos.push(a),this.own(g(b,"click",c.hitch(this,this._onDrawItemClicked,a)))):e.addClass(b,"hidden")}));this.own(g(this.btnSelect,"click",c.hitch(this,function(){a.simulateClickEvent(this._currentGeoTypeInfo.dom2);
this._hideDrawItems()})));this._setCurrentGeoInfo(this._geoTypeInfos[0]);this.deactivate()},_initTooltipDialogs:function(){var a=b("mac")?"\u2318":"Ctrl",w="- "+this.nls.newSelectionTip+" ("+this.nls.dragMouse+")",r="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.dragBox+")",y="- "+this.nls.removeSelectionTip+" ("+a+"+"+this.nls.dragBox+")",h="- "+this.nls.newSelectionTip+" ("+this.nls.drawShap+")",v="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.darw+")",k="- "+this.nls.removeSelectionTip+" ("+
a+"+"+this.nls.darw+")",a=e.create("div",{innerHTML:'\x3cdiv class\x3d"title"\x3e\x3c/div\x3e\x3cdiv class\x3d"item new-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item add-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item remove-selection-item"\x3e\x3c/div\x3e',"class":"dialog-content"}),l=d(".title",a)[0],q=d(".new-selection-item",a)[0],n=d(".add-selection-item",a)[0],p=d(".remove-selection-item",a)[0];this.tooltipDialog1=new s({content:a});e.addClass(this.tooltipDialog1.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");
this.own(g(this.btnSelect,"mousemove",c.hitch(this,function(a){this._tooltipDialogClientX1=a.clientX})));this.own(g(this.btnSelect,f.enter,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._tooltipDialogTimeoutId1=setTimeout(c.hitch(this,function(){if(this.tooltipDialog1){var a=this._currentGeoTypeInfo.geoType;"EXTENT"===a?(q.innerHTML=w,n.innerHTML=r,p.innerHTML=y,l.innerHTML=this.nls.selectByRectangle):(q.innerHTML=h,n.innerHTML=v,p.innerHTML=
k,"POLYGON"===a?l.innerHTML=this.nls.selectByPolygon:"CIRCLE"===a?l.innerHTML=this.nls.selectByCircle:"POLYLINE"===a&&(l.innerHTML=this.nls.selectByLine));m.open({parent:this.getParent(),popup:this.tooltipDialog1,around:this.btnSelect,position:["below"]});0<=this._tooltipDialogClientX1&&(this.tooltipDialog1.domNode.parentNode.style.left=this._tooltipDialogClientX1+"px")}}),this._tooltipTimeout)})));this.own(g(this.btnSelect,f.leave,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);
this._tooltipDialogTimeoutId1=-1;this._hideTooltipDialog(this.tooltipDialog1)})));a=e.create("div",{innerHTML:this.nls.unselectAllSelectionTip,"class":"dialog-content"});this.tooltipDialog2=new s({content:a});e.addClass(this.tooltipDialog2.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(g(this.btnClear,"mousemove",c.hitch(this,function(a){this._tooltipDialogClientX2=a.clientX})));this.own(g(this.btnClear,f.enter,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);
this._tooltipDialogTimeoutId2=-1;this._tooltipDialogTimeoutId2=setTimeout(c.hitch(this,function(){this.tooltipDialog2&&(m.open({parent:this.getParent(),popup:this.tooltipDialog2,around:this.btnClear,position:["below"]}),0<=this._tooltipDialogClientX2&&(this.tooltipDialog2.domNode.parentNode.style.left=this._tooltipDialogClientX2+"px"))}),this._tooltipTimeout)})));this.own(g(this.btnClear,f.leave,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._hideTooltipDialog(this.tooltipDialog2)})))},
_onArrowClicked:function(a){a.stopPropagation();this._isDrawItemsVisible()?this._hideDrawItems():this._showDrawItems()},_setCurrentGeoInfo:function(x){var b=this._currentGeoTypeInfo&&this._currentGeoTypeInfo.geoType;this._currentGeoTypeInfo&&e.removeClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this._currentGeoTypeInfo=x;e.addClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this.isActive()?b!==this._currentGeoTypeInfo.geoType&&a.simulateClickEvent(this._currentGeoTypeInfo.dom2):
a.simulateClickEvent(this._currentGeoTypeInfo.dom2)},_isDrawItemsVisible:function(){return!e.hasClass(this.drawItems,"hidden")},_showDrawItems:function(){e.removeClass(this.drawItems,"hidden")},_hideDrawItems:function(){e.addClass(this.drawItems,"hidden")},_onDrawItemClicked:function(a,b){b.stopPropagation();this._hideDrawItems();this._setCurrentGeoInfo(a)},_initDrawBox:function(){this.drawBox=new w({map:this.map,showClear:!0,keepOneGraphic:!0,deactivateAfterDrawing:!1,geoTypes:this.geoTypes});this.own(g(this.drawBox,
"user-clear",c.hitch(this,this._onDrawBoxUserClear)));this.own(g(this.drawBox,"draw-end",c.hitch(this,this._onDrawEnd)));this.own(g(this.drawBox,"draw-activate",c.hitch(this,function(){this.map.infoWindow.hide();e.addClass(this.btnSelect,"selected");d(".draw-item.selected",this.drawItems).removeClass("selected");e.addClass(this._currentGeoTypeInfo.dom1,"selected")})));this.own(g(this.drawBox,"draw-deactivate",c.hitch(this,function(){e.removeClass(this.btnSelect,"selected");d(".draw-item.selected",
this.drawItems).removeClass("selected")})));this.own(g(this.btnClear,"click",c.hitch(this,function(){a.simulateClickEvent(this.drawBox.btnClear)})))},disable:function(){this.drawBox.disable();e.addClass(this.domNode,"disabled")},enable:function(){this.drawBox.enable();e.removeClass(this.domNode,"disabled")},isActive:function(){return this.drawBox.isActive()},activate:function(){if(!this.isActive()){var a=this._currentGeoTypeInfo;a||(a=this._geoTypeInfos[0]);this._setCurrentGeoInfo(a)}},deactivate:function(){this.drawBox.deactivate()},
setFeatureLayers:function(a){var b=k.filter(this._instances,c.hitch(this,function(b){return 0>a.indexOf(b.featureLayer)}));k.forEach(b,c.hitch(this,function(a){this._removeInstance(a)}));var r=k.map(this._instances,c.hitch(this,function(a){return a.featureLayer}));k.forEach(a,c.hitch(this,function(a){0>r.indexOf(a)&&this.addFeatureLayer(a)}))},addFeatureLayer:function(a){"esri.layers.FeatureLayer"===a.declaredClass&&!this._findInstanceByLayer(a)&&(a=new v({map:this.map,featureLayer:a,drawBox:this.drawBox,
updateSelection:this.updateSelection,fullyWithin:this.fullyWithin}),this._instances.push(a))},removeFeatureLayer:function(a){"esri.layers.FeatureLayer"===a.declaredClass&&(a=this._findInstanceByLayer(a))&&this._removeInstance(a)},_removeInstance:function(a){if(a){var b=this._instances.indexOf(a);0<=b&&(a.destroy(),this._instances.splice(b,1))}},_findInstanceByLayer:function(a){var b=null;k.some(this._instances,c.hitch(this,function(r){return r.featureLayer===a?(b=r,!0):!1}));return b},clear:function(a){k.forEach(this._instances,
c.hitch(this,function(b){b.clear(a)}))},destroy:function(){this._hideTooltipDialog(this.tooltipDialog1);this._hideTooltipDialog(this.tooltipDialog2);k.forEach(this._instances,c.hitch(this,function(a){a.destroy()}));this._instances=[];this.drawBox&&this.drawBox.destroy();this.drawBox=null;this.inherited(arguments)},_hideTooltipDialog:function(a){a&&m.close(a)},_onDrawBoxUserClear:function(){this.clear(!0);this.emit("user-clear")},_onDrawEnd:function(){this.drawBox.clear();0<this._instances.length&&
setTimeout(c.hitch(this,function(){if(0<this._instances.length){this.emit("loading");this.disable();var b=k.map(this._instances,c.hitch(this,function(a){return a.getFeatures()}));l(b).always(c.hitch(this,function(){this.enable();this._currentGeoTypeInfo&&a.simulateClickEvent(this._currentGeoTypeInfo.dom2);this.emit("unloading")}))}}),50)}})})},"jimu/dijit/_FeatureSetChooserCore":function(){define("dojo/on dojo/sniff dojo/Evented dojo/Deferred dojo/_base/lang dojo/_base/array dojo/_base/declare jimu/utils jimu/symbolUtils jimu/SelectionManager jimu/LayerInfos/LayerInfos esri/graphic esri/tasks/query esri/tasks/QueryTask esri/layers/FeatureLayer esri/symbols/jsonUtils".split(" "),
function(g,b,f,d,h,e,c,k,l,q,t,n,p,u,m,s){return c([f],{baseClass:"jimu-featureset-chooser-core",_middleFeatureLayer:null,_isLoading:!1,_def:null,_isDestroyed:!1,_handles:null,selectionManager:null,layerInfosObj:null,map:null,featureLayer:null,drawBox:null,updateSelection:!1,fullyWithin:!1,constructor:function(a){h.mixin(this,a);this.layerInfosObj=t.getInstanceSync();this.selectionManager=q.getInstance();this.featureLayer.getSelectionSymbol()||this.selectionManager.setSelectionSymbol(this.featureLayer);
a=k.getFeatureLayerDefinition(this.featureLayer);delete a.id;this._middleFeatureLayer=new m({layerDefinition:a,featureSet:null},{id:"featureLayer_"+k.getRandomString()});a=null;var b=this._middleFeatureLayer.geometryType;"esriGeometryPoint"===b?a=l.getDefaultMarkerSymbol():"esriGeometryPolyline"===b?a=l.getDefaultLineSymbol():"esriGeometryPolygon"===b&&(a=s.fromJson({style:"esriSFSSolid",color:[79,129,189,77],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}}));
this._middleFeatureLayer.setSelectionSymbol(a);a=g(this.drawBox,"user-clear",h.hitch(this,this._onDrawBoxUserClear));b=g(this.drawBox,"draw-end",h.hitch(this,this._onDrawEnd));this._handles=[a,b]},hideMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.hide();var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);a&&a.hide()}},showMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.show();var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);
a&&a.show()}},clear:function(a){this.drawBox.clear();this._clearMiddleFeatureLayer();a&&this.selectionManager.clearSelection(this.featureLayer)},getFeatures:function(){var a=new d,b=h.hitch(this,function(){var b=this.syncGetFeatures();a.resolve(b)}),c=h.hitch(this,function(b){a.reject(b)});1===this._getDeferredStatus(this._def)?this._def.then(b,c):b();return a},syncGetFeatures:function(){return(this.updateSelection?this.featureLayer:this._middleFeatureLayer).getSelectedFeatures()},isLoading:function(){return 1===
this._getDeferredStatus(this._def)},_onLoading:function(){this.drawBox.deactivate();this.emit("loading")},_onUnloading:function(){this.emit("unloading")},_getDeferredStatus:function(a){var b=0;return b=a?a.isResolved()?2:a.isRejected()?-1:1:0},_onDrawEnd:function(a,c,e,f,g,r){console.log(c,e);if(this.isLoading())throw"should not draw when loading";if(this.featureLayer.visible){var y=new d;this._def=y;var k=m.SELECTION_NEW;f&&(k=m.SELECTION_ADD);b("mac")?r&&(k=m.SELECTION_SUBTRACT):g&&(k=m.SELECTION_SUBTRACT);
this._onLoading();this._getFeaturesByGeometry(a.geometry).then(h.hitch(this,function(a){this.selectionManager.updateSelectionByFeatures(this.updateSelection?this.featureLayer:this._middleFeatureLayer,a,k);this._onUnloading();y.resolve(a)}),h.hitch(this,function(a){console.error(a);this._onUnloading();y.reject(a)}))}},_getFeaturesByGeometry:function(a){var b=new d,c=[];if(this.featureLayer.getMap())a=this.selectionManager.getClientFeaturesByGeometry(this.featureLayer,a,this.fullyWithin),0<a.length&&
(c=e.map(a,h.hitch(this,function(a){return new n(a.toJson())}))),b.resolve(c);else{c=new p;c.geometry=a;c.outSpatialReference=this.map.spatialReference;c.returnGeometry=!0;c.spatialRelationship=this.fullyWithin?p.SPATIAL_REL_CONTAINS:p.SPATIAL_REL_INTERSECTS;(a=this.featureLayer.getDefinitionExpression())||(a="1\x3d1");var f=this.layerInfosObj.getLayerInfoById(this.featureLayer.id);f&&(f=f.getFilter())&&(a="("+a+") AND ("+f+")");a&&(c.where=a);c.outFields=["*"];(new u(this.featureLayer.url)).execute(c).then(h.hitch(this,
function(a){b.resolve(a.features)}),h.hitch(this,function(a){b.reject(a)}))}return b},_onDrawBoxUserClear:function(){this.clear()},_clearMiddleFeatureLayer:function(){this._middleFeatureLayer&&(this._middleFeatureLayer.clear(),this.selectionManager.clearSelection(this._middleFeatureLayer))},destroy:function(){this._isDestroyed||(e.forEach(this._handles,h.hitch(this,function(a){a.remove()})),this._handles=null,this.clear());this._isDestroyed=!0}})})},"widgets/Select/layerUtil":function(){define(["dojo/_base/array",
"dojo/promise/all","dojo/Deferred"],function(g,b,f){return{getLayerInfoArray:function(d){var h=new f,e=[];d.traversal(function(b){e.push(b)});d=g.map(e,function(b){return b.getLayerType()});b(d).then(function(b){var d=[];g.forEach(b,function(b,c){"FeatureLayer"===b&&d.push(e[c])});h.resolve(d)});return h}}})},"widgets/Select/SelectableLayerItem":function(){define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/Evented dojo/dom-geometry jimu/FeatureActionManager jimu/utils jimu/dijit/PopupMenu dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SelectableLayerItem.html ./ClearSelectionAction".split(" "),
function(g,b,f,d,h,e,c,k,l,q,t,n,p,u,m,s){return g([n,p,u,c],{baseClass:"selectable-layer-item",templateString:m,layerName:"layer",layerVisible:!0,checked:!1,allowExport:!1,inited:!1,postCreate:function(){this.inherited(arguments);this.popupMenu=t.getInstance()},init:function(a){this.featureLayer=a;a=this.featureLayer.getSelectedFeatures().length;this.layerName=this.layerInfo.title||"layer";this.selectedCountNode.innerHTML=a;0<a?b.removeClass(this.domNode,"no-action"):b.addClass(this.domNode,"no-action");
this.own(e(this.featureLayer,"selection-complete",f.hitch(this,function(){var a=this.featureLayer.getSelectedFeatures().length;this.selectedCountNode.innerHTML=a;0===a?b.addClass(this.domNode,"no-action"):b.removeClass(this.domNode,"no-action")})));this.own(e(this.featureLayer,"selection-clear",f.hitch(this,function(){this.selectedCountNode.innerHTML=0;b.addClass(this.domNode,"no-action")})));this.layerNameNode.innerHTML=this.layerName;this.layerNameNode.title=this.layerName;this.layerVisible||b.addClass(this.domNode,
"invisible");this.checked?b.addClass(this.selectableCheckBox,"checked"):b.removeClass(this.selectableCheckBox,"checked");this.own(e(this.selectableCheckBox,"click",f.hitch(this,this._toggleChecked)));this.own(e(this.layerContent,"click",f.hitch(this,this._toggleContent)));this.own(e(this.actionBtn,"click",f.hitch(this,this._showActions)));this.inited=!0;this.emit("inited")},isLayerVisible:function(){return this.layerVisible},isChecked:function(){return this.checked},updateLayerVisibility:function(){var a=
this.layerInfo.isShowInMap()&&this.layerInfo.isInScale();a!==this.layerVisible&&((this.layerVisible=a)?b.removeClass(this.domNode,"invisible"):b.addClass(this.domNode,"invisible"),this.emit("stateChange",{visible:this.layerVisible,layerInfo:this.layerInfo}))},_toggleChecked:function(a){h.stop(a);b.toggleClass(this.selectableCheckBox,"checked");this.checked=b.hasClass(this.selectableCheckBox,"checked");this.emit("stateChange",{checked:this.checked,layerInfo:this.layerInfo})},_toggleContent:function(a){h.stop(a);
b.hasClass(this.domNode,"no-action")||this.emit("switchToDetails",this)},_createActions:function(){var a=l.getInstance(),b=this.featureLayer.getSelectedFeatures(),c=q.toFeatureSet(b);return a.getSupportedActions(c).then(f.hitch(this,function(a){d.forEach(a,function(a){a.data=c},this);0<b.length&&a.push(new s({folderUrl:this.folderUrl,data:this.featureLayer}));this.allowExport||(a=d.filter(a,function(a){return 0!==a.name.indexOf("Export")}));this.popupMenu.setActions(a)}))},_showActions:function(a){h.stop(a);
b.hasClass(this.domNode,"no-action")||this._createActions().then(f.hitch(this,function(){var b=k.position(a.target);this.popupMenu.show(b,this.nls.actionsTitle)}))}})})},"widgets/Select/ClearSelectionAction":function(){define(["dojo/_base/declare","jimu/BaseFeatureAction","jimu/SelectionManager"],function(g,b,f){return g(b,{name:"ClearSelection",iconClass:"icon-clear-selection",constructor:function(){this.label=window.jimuNls.featureActions.ClearSelection},isFeatureSupported:function(b){return 0<
b.features.length&&b.geometryType},onExecute:function(b){f.getInstance().clearSelection(b)},getIcon:function(b){return this.folderUrl+"images/"+this.name+"_"+b+"."+this.iconFormat}})})},"widgets/Select/FeatureItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/event dojo/on dojo/dom-geometry dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FeatureItem.html jimu/FeatureActionManager jimu/utils jimu/symbolUtils jimu/dijit/PopupMenu jimu/featureActions/PanTo jimu/featureActions/ShowPopup".split(" "),
function(g,b,f,d,h,e,c,k,l,q,t,n,p,u,m,s){return g([k,l],{baseClass:"graphic-item",templateString:q,allowExport:!1,postCreate:function(){this.inherited(arguments);var a;this.featureLayer&&this.featureLayer.renderer&&this.featureLayer.renderer.getSymbol?a=this.featureLayer.renderer.getSymbol(this.graphic):this.graphic.symbol&&(a=this.graphic.symbol);a&&(a=p.createSymbolNode(a,{width:36,height:36}),d.place(a,this.iconNode));this.popupMenu=u.getInstance();this.nameNode.innerHTML=this.graphic.attributes[this.displayField]||
this.graphic.attributes[this.objectIdField];this.nameNode.title=this.graphic.attributes[this.displayField]||this.graphic.attributes[this.objectIdField];this.own(e(this.actionBtn,"click",b.hitch(this,this._showActions)));this.own(e(this.iconNode,"click",b.hitch(this,this._highlight)));this.own(e(this.nameNode,"click",b.hitch(this,this._highlight)))},_highlight:function(){var a=n.toFeatureSet([this.graphic]),b=new m({map:this.map});(new s({map:this.map})).onExecute(a);b.onExecute(a)},_showActions:function(a){h.stop(a);
this._createActions().then(b.hitch(this,function(){var b=c.position(a.target);this.popupMenu.show(b)}))},_createActions:function(){var a=t.getInstance(),c=n.toFeatureSet([this.graphic]);return a.getSupportedActions(c).then(b.hitch(this,function(a){f.forEach(a,function(a){a.data=c});this.allowExport||(a=f.filter(a,function(a){return 0!==a.name.indexOf("Export")}));this.popupMenu.setActions(a)}))}})})},"widgets/Select/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css",
"dojo/i18n!./nls/strings"],function(){})},"url:jimu/dijit/templates/FeatureSetChooserForMultipleLayers.html":'\x3cdiv class\x3d"jimu-not-selectable"\x3e\r\n  \x3cdiv class\x3d"draw-item-btn"\x3e\r\n    \x3cdiv class\x3d"current-draw-item" data-dojo-attach-point\x3d"currentDrawItem"\x3e\r\n      \x3cdiv class\x3d"btn-select" data-dojo-attach-point\x3d"btnSelect"\x3e\r\n        \x3cdiv class\x3d"select-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"select-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"arrow jimu-float-trailing" data-dojo-attach-event\x3d"click:_onArrowClicked"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"draw-items hidden" data-dojo-attach-point\x3d"drawItems"\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-rectangle" data-dojo-attach-point\x3d"rectangleItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-polygon" data-dojo-attach-point\x3d"polygonItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-circle" data-dojo-attach-point\x3d"circleItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-polyline" data-dojo-attach-point\x3d"polylineItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"btn-clear" data-dojo-attach-point\x3d"btnClear"\x3e\r\n    \x3cdiv class\x3d"clear-icon"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear-text"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/SelectableLayerItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-row" data-dojo-attach-point\x3d"layerContent"\x3e\r\n    \x3cdiv class\x3d"selectable-check" title\x3d"${nls.toggleSelectability}"\r\n         data-dojo-attach-point\x3d"selectableCheckBox"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"layerNameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"selected-num" data-dojo-attach-point\x3d"selectedCountNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"popup-menu-button" title\x3d"${nls.showActions}"\r\n    data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/FeatureItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"feature-item-row"\x3e\r\n    \x3cdiv class\x3d"feature-icon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"light-label label-node jimu-ellipsis" data-dojo-attach-point\x3d"nameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"action-btn popup-menu-button" title\x3d"${nls.showActions}"\r\n     data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/Select/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-node" data-dojo-attach-point\x3d"layerListNode"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"select-dijit-container" data-dojo-attach-point\x3d"selectDijitNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"seperator"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-nodes" \x3e\r\n      \x3cdiv class\x3d"layer-items" data-dojo-attach-point\x3d"layerItemsNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"details-node" data-dojo-attach-point\x3d"detailsNode"\x3e\r\n    \x3cdiv class\x3d"header"\x3e\r\n      \x3cdiv class\x3d"switch-back jimu-float-leading" data-dojo-attach-point\x3d"switchBackBtn"\x3e\r\n        \x3cdiv class\x3d"feature-action" data-dojo-attach-point\x3d"switchBackIcon"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"selectedLayerName"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"content" data-dojo-attach-point\x3d"featureContent"\x3e\r\n\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/css/style.css":'.jimu-widget-select {width: 100%; height: 100%; overflow: hidden;}.jimu-widget-select .jimu-viewstack {height: 100%;}.jimu-widget-select .jimu-viewstack .view {position: relative;}.jimu-widget-select .seperator {width: 100%; height: 1px; background: #D7D7D7; margin: 20px 0;}.jimu-widget-select .title {font-family: "Avenir Light"; font-size: 12px; line-height: 16px; color: #000000; margin: 20px 0;}.jimu-widget-select .normal-label, .jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num, .jimu-widget-select .medium-label {line-height: 36px; height: 36px; font-size: 12px; color: #000000;}.jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num {font-family: "Avenir Light";}.jimu-widget-select .medium-label {font-family: "Avenir Medium";}.jimu-widget-select .layer-nodes {position: absolute; top: 65px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .selectable-layer-item {width: 100%; height: 36px; position: relative;}.jimu-widget-select .selectable-layer-item .layer-row {height: 36px; position: relative; cursor: pointer;}.jimu-widget-select .selectable-layer-item .layer-row \x3e div {display: inline-block;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check {width: 36px; height: 36px; cursor: pointer; background: url(images/unchecked.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check:hover {background: url(images/unchecked_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check.checked {background: url(images/checked.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check.checked:hover {background: url(images/checked_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .layer-name {margin: 0 5px; position: absolute; left: 36px; right: 72px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .layer-name {left: 72px; right: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .selected-num {width: 36px; margin: 0 5px; text-align: center; position: absolute; right: 36px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .selected-num {right: auto; left: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .popup-menu-button {position: absolute; right: 0;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .popup-menu-button {right: auto; left: 0;}.jimu-widget-select .selectable-layer-item:hover {background-color: #E5E5E5;}.jimu-widget-select .selectable-layer-item:hover .selected-num {font-weight: bold;}.jimu-widget-select .selectable-layer-item.no-action .selected-num {font-weight: normal;}.jimu-widget-select .selectable-layer-item.no-action:hover {background-color: #FFFFFF;}.jimu-widget-select .selectable-layer-item.no-action .layer-row {cursor: default;}.jimu-widget-select .selectable-layer-item.no-action .selected-num {color: #B7B7B7;}.jimu-widget-select .selectable-layer-item.no-action .selected-num:hover {font-weight: normal;}.jimu-widget-select .selectable-layer-item.no-action .popup-menu-button {background: url(images/more_disabled.svg) no-repeat center; cursor: default; background-color: #FFFFFF;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check {background: url(images/unchecked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check:hover {background: url(images/unchecked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked {background: url(images/checked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked:hover {background: url(images/checked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .layer-name {color: #B7B7B7;}.jimu-widget-select .details-node {widows: 100%;}.jimu-widget-select .details-node .header {height: 40px; text-align: center;}.jimu-widget-select .details-node .header .switch-back {width: 40px; height: 40px;}.jimu-widget-select .details-node .header .switch-back .feature-action {margin: 12px;}.jimu-widget-select .details-node .header .layer-name {font-family: "Avenir Medium"; font-size: 14px; font-size: 14px; color: #000000; height: 40px; line-height: 40px;}.jimu-widget-select .details-node .content {position: absolute; top: 40px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .details-node .content .graphic-item {height: 36px; width: 100%; position: relative;}.jimu-widget-select .details-node .content .graphic-item:hover {background: #E5E5E5;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row {position: relative; height: 36px; cursor: pointer;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {position: absolute; left: 0; width: 36px; height: 36px;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {left: auto; right: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {position: absolute; right: 0;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {right: auto; left: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .label-node {position: absolute; left: 36px; right: 36px; margin: 0 10px;}',
"*now":function(g){g(['dojo/i18n!*preload*widgets/Select/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/promise/all dijit/_WidgetsInTemplateMixin esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/symbols/jsonUtils esri/Color jimu/BaseWidget jimu/WidgetManager jimu/dijit/ViewStack jimu/dijit/FeatureSetChooserForMultipleLayers jimu/LayerInfos/LayerInfos jimu/SelectionManager ./layerUtil ./SelectableLayerItem ./FeatureItem jimu/dijit/LoadingShelter".split(" "),function(g,
b,f,d,h,e,c,k,l,q,t,n,p,u,m,s,a,w,v,x,z){return g([p,c],{baseClass:"jimu-widget-select",postMixInProperties:function(){this.inherited(arguments);b.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);var c=new n(this.config.selectionColor);this.defaultPointSymbol=new k(k.STYLE_CIRCLE,16,null,c);this.defaultLineSymbol=new l(l.STYLE_SOLID,c,2);this.defaultFillSymbol=new q(q.STYLE_SOLID,this.defaultLineSymbol,new n([c.r,c.g,c.b,0.3]));this.layerMapper={};this.layerObjectArray=
[];this.layerItems=[];this.selectDijit=new s({map:this.map,updateSelection:!0,fullyWithin:"wholly"===this.config.selectionMode,geoTypes:this.config.geometryTypes||["EXTENT"]});f.place(this.selectDijit.domNode,this.selectDijitNode);this.selectDijit.startup();this.own(h(this.selectDijit,"user-clear",b.hitch(this,this._clearAllSelections)));this.own(h(this.selectDijit,"loading",b.hitch(this,function(){this.shelter.show()})));this.own(h(this.selectDijit,"unloading",b.hitch(this,function(){this.shelter.hide()})));
this.viewStack=new m({viewType:"dom",views:[this.layerListNode,this.detailsNode]});f.place(this.viewStack.domNode,this.domNode);this.own(h(this.switchBackBtn,"click",b.hitch(this,this._switchToLayerList)));window.isRTL?f.addClass(this.switchBackIcon,"icon-arrow-forward"):f.addClass(this.switchBackIcon,"icon-arrow-back");this._switchToLayerList();var e=a.getInstanceSync();v.getLayerInfoArray(e).then(b.hitch(this,function(a){this._initLayers(a)}));this.own(h(e,"layerInfosChanged",b.hitch(this,function(){this.shelter.show();
v.getLayerInfoArray(e).then(b.hitch(this,function(a){this._initLayers(a)}))})));this.own(h(e,"layerInfosIsShowInMapChanged",b.hitch(this,this._layerVisibilityChanged)));this.own(h(this.map,"zoom-end",b.hitch(this,this._layerVisibilityChanged)))},onDeActive:function(){this.selectDijit.isActive()&&this.selectDijit.deactivate();this._restoreSelectionSymbol()},onActive:function(){this._setSelectionSymbol();this.selectDijit.isActive()||this.selectDijit.activate()},onOpen:function(){u.getInstance().activateWidget(this)},
onDestroy:function(){this.selectDijit.isActive()&&this.selectDijit.deactivate();this._clearAllSelections()},_initLayers:function(a){this.layerObjectArray=[];this.layerItems=[];this.selectionSymbols={};f.empty(this.layerItemsNode);this.shelter.show();e(this._obtainLayerObjects(a)).then(b.hitch(this,function(c){d.forEach(c,b.hitch(this,function(c,e){if(c&&c.objectIdField){var d=a[e],g=d.isShowInMap()&&d.isInScale(),d=new x({layerInfo:d,checked:g,layerVisible:g,folderUrl:this.folderUrl,allowExport:this.config?
this.config.allowExport:!1,map:this.map,nls:this.nls});this.own(h(d,"switchToDetails",b.hitch(this,this._switchToDetails)));this.own(h(d,"stateChange",b.hitch(this,function(){this.shelter.show();this.selectDijit.setFeatureLayers(this._getSelectableLayers());this.shelter.hide()})));d.init(c);f.place(d.domNode,this.layerItemsNode);d.startup();this.layerItems.push(d);this.layerObjectArray.push(c);c.getSelectionSymbol()||this._setDefaultSymbol(c);d=c.getSelectionSymbol();this.selectionSymbols[c.id]=d.toJson()}}));
this.selectDijit.setFeatureLayers(this._getSelectableLayers());this._setSelectionSymbol();this.shelter.hide()}))},_setSelectionSymbol:function(){d.forEach(this.layerObjectArray,function(a){this._setDefaultSymbol(a)},this)},_setDefaultSymbol:function(a){"esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType?a.setSelectionSymbol(this.defaultPointSymbol):"esriGeometryPolyline"===a.geometryType?a.setSelectionSymbol(this.defaultLineSymbol):"esriGeometryPolygon"===a.geometryType?
a.setSelectionSymbol(this.defaultFillSymbol):console.warn("unknown geometryType: "+a.geometryType)},_restoreSelectionSymbol:function(){d.forEach(this.layerObjectArray,function(a){var b=this.selectionSymbols[a.id];b&&a.setSelectionSymbol(t.fromJson(b))},this)},_layerVisibilityChanged:function(){d.forEach(this.layerItems,function(a){a.updateLayerVisibility()},this)},_getSelectableLayers:function(){var a=[];d.forEach(this.layerItems,function(b){b.isLayerVisible()&&b.isChecked()&&a.push(b.featureLayer)},
this);return a},_clearAllSelections:function(){var a=w.getInstance();d.forEach(this.layerObjectArray,function(b){a.clearSelection(b)})},_obtainLayerObjects:function(a){return d.map(a,function(a){return a.getLayerObject()})},_switchToDetails:function(a){f.empty(this.featureContent);this.viewStack.switchView(1);this.selectedLayerName.innerHTML=a.layerName;this.selectedLayerName.title=a.layerName;a.layerInfo.getLayerObject().then(b.hitch(this,function(a){var c=a.getSelectedFeatures();0<c.length&&d.forEach(c,
b.hitch(this,function(b){b=new z({graphic:b,map:this.map,featureLayer:a,displayField:a.displayField,objectIdField:a.objectIdField,allowExport:this.config?this.config.allowExport:!1,nls:this.nls});f.place(b.domNode,this.featureContent);b.startup()}))}))},_switchToLayerList:function(){this.viewStack.switchView(0)}})});