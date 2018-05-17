require([
    "esri/views/MapView",
	"esri/layers/WebTileLayer",
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
    "dojo/domReady!"],function(MapView, WebTileLayer,Map,VectorTileLayer, LayerList, Home, Graphic, FeatureLayer,
      Field, Point,Polyline,Polygon,SimpleRenderer, UniqueValueRenderer, SimpleMarkerSymbol,
      SimpleLineSymbol, SimpleFillSymbol,TextSymbol, Legend, esriRequest, arrayUtils, dom,on){

	  var map = new Map({
      });
		 
	  var vtlLayer = new WebTileLayer({
		// URL to the style of vector tiles
		//url: "http://jsapi.maps.arcgis.com/sharing/rest/content/items/c11ce4f7801740b2905eb03ddc963ac8/resources/styles/root.json"
		urlTemplate:"https://api.mapbox.com/styles/v1/katerraux/cjhb4ph4009ki2smk2k9qp90g/tiles/256/{level}/{col}/{row}@2x?access_token=pk.eyJ1Ijoia2F0ZXJyYXV4IiwiYSI6ImNqaDZqcDVqbjFsdGoyeXFoNzA4cjc1dmkifQ.7fVizyDYNJWAy7l_OKxFfw"
	  });
		
	  map.add(vtlLayer)
	  
	  

      var view = new MapView({
          container: "viewDiv",
          map: map,
          center:[-122.4194, 37.7749],
          zoom: 11
        });


});


