import { byeIE } from "./byeie"; // loučíme se s IE

byeIE();

var sentinel = L.esri.imageMapLayer({
  url: 'https://sentinel.arcgis.com/arcgis/rest/services/Sentinel2/ImageServer',
  attribution: 'United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)',
  token: 'Dg6166N2Ut2iFnzqP-UzjeTXhOgKj72bIf4H7P5AqOudT-gh7gfdpbweU-eyJ-KNPSb-UZBiGT-Hhtc6Uo8xAxojG-KiUjC-Sfe5wHo9OU_eJfBxPugyzFdCxLoSWCeyMHJ8ZZYP5KWPMOy-r5nFsw..',
});

var ortofoto = L.esri.tiledMapLayer({
  url: 'http://ags.cuzk.cz/arcgis/rest/services/ortofoto_wm/MapServer',
  attribution: 'ČÚZK, data o těžbě kurovcovamapa.cz',
});

var suchy_19 = L.vectorGrid.protobuf('https://a.kurovcovamapa.cz/suchy-2019-04/{z}/{x}/{y}.pbf', {
    vectorTileLayerName: 'deadwood201904',
    vectorTileLayerStyles: {
        suchy201904: {
            color: '#d00000', weight: 2, opacity: .55, fillOpacity: .55, fill: true, fillColor: '#d00000'
        }
    },
    maxZoom: 20,
    subdomains: 'a',
    rendererFactory: L.svg.tile
});

var tezba = L.vectorGrid.protobuf('https://a.kurovcovamapa.cz/tezba/{z}/{x}/{y}.pbf', {
    vectorTileLayerName: 'baresoil',
    vectorTileLayerStyles: {
        suchy201904: {
            color: '#0000d0', weight: 2, opacity: .55, fillOpacity: .55, fill: true, fillColor: '#0000d0'
        }
    },
    maxZoom: 20,
    subdomains: 'a',
    rendererFactory: L.svg.tile
});

var geonames = L.tileLayer('https://samizdat.cz/tiles/ton_l2/{z}/{x}/{y}.png', {foo: 'bar', attribution: '&copy; přispěvatelé <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});

var map_right = L.map("map_right", {
    center: [49.7417517, 15.3350758],
    zoom: 7,
    layers: [sentinel]
});
var map_left = L.map("map_left", {
    center: [49.7417517, 15.3350758],
    zoom: 7,
    layers: [ortofoto, suchy_19, tezba, geonames]
});

map_right.scrollWheelZoom.disable();
map_left.scrollWheelZoom.disable();

map_left.sync(map_right);
map_right.sync(map_left);

var locMarker = L.circleMarker([49.7417517, 15.3350758], {
    radius: 6,
    color: 'gray',
    weight: 1,
    fillColor: 'red',
    fillOpacity: 0.7,
}).addTo(map_right)

map_left.on('mousemove', function(e) {
    var updLoc = new L.LatLng((e.latlng.lat), (e.latlng.lng));
    locMarker.setLatLng(updLoc); 
});

map_left.on('click', function(e) {
    var updLoc = new L.LatLng((e.latlng.lat), (e.latlng.lng));
    locMarker.setLatLng(updLoc); 
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
      map_left.setView([y, x], 12);
    }, "xml");
  }
};
