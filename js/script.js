import { byeIE } from "./byeie"; // loučíme se s IE

byeIE();

var sentinel = L.esri.imageMapLayer({
  url: 'https://sentinel.arcgis.com/arcgis/rest/services/Sentinel2/ImageServer',
  attribution: 'United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)',
  token: 'QJWyylEvaWIiItY896grB9qCkduY4MCBcYpLy-lJd2H-TA0s7L3iXAW535Xfnb_XKdUNWA3G7x3umnj6sC0PmZ2ou-wiFaU41Zs8epkOHR8UpTW-DtqEIzitzGbE9Ucdprv6jjABKC_eG3PF0uCiSA..',
});

var ortofoto = L.esri.tiledMapLayer({
  url: 'https://ags.cuzk.cz/arcgis/rest/services/ortofoto_wm/MapServer',
  attribution: 'ČÚZK, data o těžbě kurovcovamapa.cz',
});

var geonames = L.tileLayer('https://samizdat.cz/tiles/ton_l2/{z}/{x}/{y}.png', {foo: 'bar', attribution: '&copy; přispěvatelé <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});

var map_right = L.map("map_right", {
    center: [49.7417517, 15.3350758],
    zoom: 7,
    zoomControl: false,
    layers: [sentinel]
});

const map_left = new mapboxgl.Map({
  container: "map_left",
  style: "https://data.irozhlas.cz/mapa-domu/map_styl/style.json",
  zoom: 6,
  maxZoom: 15,
  pitch: 0,
  attributionControl: false,
  center: [15.3350758, 49.7417517],
});

  map_left.on('load', function() {
    map_left.addLayer({
      'id': 'wms-test-layer',
      'type': 'raster',
      'source': {
        'type': 'raster',
        'tiles': [
          'https://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/service.svc/get?bbox={bbox-epsg-3857}&STYLES=&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=GR_ORTFOTORGB'
        ],
        'tileSize': 256
      },
        'paint': {}
    });
    map_left.addLayer({ //těžba
      id: "baresoil",
      type: "fill",
      source: {
        type: "vector",
        tiles: ["https://a.kurovcovamapa.cz/tezba/{z}/{x}/{y}.pbf"],
      },
      "source-layer": "tezba",
      paint: {
        "fill-color": "red",
        "fill-opacity": 0.3,
        "fill-outline-color": "red",
      },
    })
    map_left.addLayer({ //suché
      id: "deadwood201904",
      type: "fill",
      source: {
        type: "vector",
        tiles: ["https://a.kurovcovamapa.cz/suchy-2019-04/{z}/{x}/{y}.pbf"],
      },
      "source-layer": "suchy201904",
      paint: {
        "fill-color": "#d00000",
        "fill-opacity": 0.3,
        "fill-outline-color": "#d00000",
      },
    })
    map_left.addLayer({
      id: "labels",
      source: {
        tiles: [
          "https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png",
        ],
        type: "raster",
        tileSize: 256,
      },
      type: "raster",
    });
  });
     
map_left.addControl(new mapboxgl.NavigationControl());

map_right.scrollWheelZoom.disable();
map_left.scrollZoom.disable();

var locMarker = L.circleMarker([49.7417517, 15.3350758], {
    radius: 6,
    color: 'gray',
    weight: 1,
    fillColor: 'red',
    fillOpacity: 0.7,
}).addTo(map_right)


//var locMarkerL = new mapboxgl.Marker()
//locMarkerL.addTo(map_left)

map_left.on('mousemove', function(e) {
    var updLoc = new L.LatLng((e.lngLat.lat), (e.lngLat.lng));
    locMarker.setLatLng(updLoc); 
});

map_left.on('click', function(e) {
    var updLoc = new L.LatLng((e.lngLat.lat), (e.lngLat.lng));
    locMarker.setLatLng(updLoc); 
});

map_left.on('zoomend', function() {
  map_right.setZoom(Math.ceil(map_left.getZoom()) + 1);
});

map_left.on('drag', function(e) { // poloha do url pro sdileni
  var cen = map_left.getCenter().wrap();
  map_right.panTo(new L.LatLng(cen.lat, cen.lng));
});

map_right.on('drag', function(e) {
  //return
  var cntr = map_right.getCenter();
  map_left.flyTo({
    center: [cntr.lng, cntr.lat]
  });
});

$("#inp-geocode").on("focus input", () => $("#inp-geocode").css("border-color", "black"));

// geocoder
const form = document.getElementById("frm-geocode");
form.onsubmit = function submitForm(event) {
  event.preventDefault();
  const text = document.getElementById("inp-geocode").value;
  if (text === "") {
    map_left.flyTo({
      center: [15.3350758, 49.7417517],
      zoom: 7,
    });
  } else {
    $.get(`https://api.mapy.cz/geocode?query=${text}`, (data) => {
      if (typeof $(data).find("item").attr("x") === "undefined") {
        $("#inp-geocode").css("border-color", "red");
        return;
      }
      const x = parseFloat($(data).find("item").attr("x"));
      const y = parseFloat($(data).find("item").attr("y"));
      if (x < 12 || x > 19 || y < 48 || y > 52) { // omezení geosearche na česko, plus mínus
        $("#inp-geocode").css("border-color", "red");
        return;
      }
      map_left.flyTo({
        center: [x, y],
        zoom: 12,
      });
    }, "xml");
  }
};
