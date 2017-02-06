// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/json dojo/on esri/layers/FeatureLayer esri/renderers/jsonUtils esri/symbols/jsonUtils ../BaseFeatureAction jimu/dijit/Popup jimu/dijit/Search jimu/LayerInfos/LayerInfos jimu/utils".split(" "),function(l,f,g,m,h,n,k,p,q,r,s,t,u){return l(q,{name:"CreateLayer",iconClass:"icon-create-layer",isFeatureSupported:function(d){return 1<d.features.length&&d.features[0].geometry},onExecute:function(d,b){var c,a;c={layerDefinition:{geometryType:b.geometryType,
fields:f.clone(b.fields),objectIdField:b.objectIdField},featureSet:d.toJson()};c=new n(c);(a=b._json?m.parse(b._json):null)&&a.drawingInfo&&a.drawingInfo.renderer?(a=a.drawingInfo.renderer,a=k.fromJson(a)):a=k.fromJson(b.renderer.toJson());c.setRenderer(a);(a=b.getSelectionSymbol())&&c.setSelectionSymbol(p.fromJson(a.toJson()));this._popupAddLayer(c)},_popupAddLayer:function(d){var b,c=g.create("div",{style:"padding: 0 10px 0 10px;"}),a=(new s({placeholder:window.jimuNls.layerInfosMenu.labelLayer})).placeAt(c);
g.setStyle(a.searchBtn,"display","none");var e=new r({content:c,titleLabel:window.jimuNls.featureActions.CreateLayer,width:525,height:180,buttons:[{label:window.jimuNls.common.ok,onClick:f.hitch(this,function(){d.name=u.stripHTML(a.getValue());this._addLayerToMap(d);e.close();b&&b.remove&&b.remove()})},{label:window.jimuNls.common.cancel,classNames:["jimu-btn-vacation"],onClick:f.hitch(this,function(){e.close();b&&b.remove&&b.remove()})}]});a.inputSearch.focus();e.disableButton(0);b=h(a.inputSearch,
"keyup",function(){a.getValue()?e.enableButton(0):e.disableButton(0)})},_addLayerToMap:function(d){var b=t.getInstanceSync(),c=h(b,"layerInfosChanged",f.hitch(this,function(a){d.id===a.id&&(a.enablePopup(),c.remove())}));this.map.addLayer(d)}})});