require([
    "esri/views/MapView",
	"esri/views/SceneView",
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
    "dojo/domReady!"],function(MapView, SceneView, Map,VectorTileLayer, LayerList, Home, Graphic, FeatureLayer,
      Field, Point,Polyline,Polygon,SimpleRenderer, UniqueValueRenderer, SimpleMarkerSymbol,
      SimpleLineSymbol, SimpleFillSymbol,TextSymbol, Legend, esriRequest, arrayUtils, dom,on){

	  var map = new Map({
		  ground: "world-elevation"
      });
		 
	  var vtlLayer = new VectorTileLayer({
		// URL to the style of vector tiles
		url: "http://jsapi.maps.arcgis.com/sharing/rest/content/items/c11ce4f7801740b2905eb03ddc963ac8/resources/styles/root.json",
		elevationInfo: { mode: "on-the-ground" }
	  });
		
	  map.add(vtlLayer)

	  
	  var view = new SceneView({
		  // An instance of Map or WebScene
		  map: map,
		  container: "viewDiv",
		  center:[-122.4194, 37.7749],
		  camera: {
		    position: [
		       -122.38, // lon
			 37.76, // lat
		      300  // elevation in meters
		    ],    
		    heading: 95
  		   }
		});
		/*
      var view = new MapView({
          container: "viewDiv",
          map: map,
          center:[-78.6481755, 35.790585],
          zoom: 14
        });*/


});


