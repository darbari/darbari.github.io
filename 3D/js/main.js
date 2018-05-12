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
		///8a2cba3b0ebf4140b7c0dc5ee149549a/resources/styles/root.json  light
		///c11ce4f7801740b2905eb03ddc963ac8/resources/styles/root.json  dark
		///de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json  street
		url: "http://jsapi.maps.arcgis.com/sharing/rest/content/items/8a2cba3b0ebf4140b7c0dc5ee149549a/resources/styles/root.json",
	  });
		
	  map.add(vtlLayer)

	  
	  var view = new SceneView({
		  // An instance of Map or WebScene
		  map: map,
		  container: "viewDiv",
		  
		  camera: {
		    position: [
		       -122.4194, 
				37.7749, 
				900  
		    ],    
		    tilt: 80,
			heading:320
  		   },          
		   environment: {
            atmosphere: { // creates a realistic view of the atmosphere
              quality: "high"
            },
            lighting: {
              date: 1526061550887.1558,
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
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
