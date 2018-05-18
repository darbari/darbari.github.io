require([
    "esri/views/MapView",
	"esri/geometry/SpatialReference",
    "esri/Map",
	"esri/layers/VectorTileLayer",
    "esri/widgets/LayerList",
    "esri/widgets/Home",
    "esri/Graphic",
    "esri/layers/FeatureLayer",
    "esri/layers/support/Field",
    "esri/geometry/Point",
    "esri/geometry/Polyline",
    "esri/geometry/Polygon",
    "esri/renderers/SimpleRenderer",
    "esri/renderers/UniqueValueRenderer",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/TextSymbol",
    "esri/widgets/Legend",
    "esri/request",
    "dojo/_base/array",
    "dojo/dom",
    "dojo/on",
    "dojo/domReady!"],function(MapView,SpatialReference, Map,VectorTileLayer, LayerList, Home, Graphic, FeatureLayer,
      Field, Point,Polyline,Polygon,SimpleRenderer, UniqueValueRenderer, SimpleMarkerSymbol,
      SimpleLineSymbol, SimpleFillSymbol,TextSymbol, Legend, esriRequest, arrayUtils, dom,on){

	  var map = new Map({
		basemap: "streets-navigation-vector"
      });

      var view = new MapView({
          container: "viewDiv",
          map: map,
          center:[-122.4194, 37.7749],
          zoom: 11
        });


});


