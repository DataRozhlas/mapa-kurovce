!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t),function(){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var e=document.createElement("div");e.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',e.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(e)}}();var r=L.esri.imageMapLayer({url:"https://sentinel.arcgis.com/arcgis/rest/services/Sentinel2/ImageServer",attribution:"United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)",token:"QJWyylEvaWIiItY896grB9qCkduY4MCBcYpLy-lJd2H-TA0s7L3iXAW535Xfnb_XKdUNWA3G7x3umnj6sC0PmZ2ou-wiFaU41Zs8epkOHR8UpTW-DtqEIzitzGbE9Ucdprv6jjABKC_eG3PF0uCiSA.."}),n=L.map("map_right",{center:[50.5843919,14.7169664],zoom:14,zoomControl:!1,layers:[r]}),a=new mapboxgl.Map({container:"map_left",style:"https://data.irozhlas.cz/mapa-domu/map_styl/style.json",zoom:13,pitch:0,attributionControl:!1,center:[14.7169664,50.5843919]});a.addControl(new mapboxgl.AttributionControl({compact:!0,customAttribution:'ČÚZK, data o těžbě kurovcovamapa.cz, geonames a mapový podklad &copy; přispěvatelé <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})),a.on("load",function(){a.addLayer({id:"wms-test-layer",type:"raster",source:{type:"raster",tiles:["https://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/service.svc/get?bbox={bbox-epsg-3857}&STYLES=&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=GR_ORTFOTORGB"],tileSize:256},paint:{}}),a.addLayer({id:"baresoil",type:"fill",source:{type:"vector",tiles:["https://a.kurovcovamapa.cz/tezba/{z}/{x}/{y}.pbf"]},"source-layer":"tezba",paint:{"fill-color":"#08519c","fill-opacity":.8,"fill-outline-color":"#08519c"}}),a.addLayer({id:"deadwood201904",type:"fill",source:{type:"vector",tiles:["https://a.kurovcovamapa.cz/suchy-2019-04/{z}/{x}/{y}.pbf"]},"source-layer":"suchy201904",paint:{"fill-color":"#d00000","fill-opacity":.8,"fill-outline-color":"#d00000"}}),a.addLayer({id:"labels",source:{tiles:["https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png"],type:"raster",tileSize:256},type:"raster"})}),a.addControl(new mapboxgl.NavigationControl),n.scrollWheelZoom.disable(),a.scrollZoom.disable(),a.on("click",function(){n.scrollWheelZoom.enable(),a.scrollZoom.enable()}),n.on("click",function(){n.scrollWheelZoom.enable(),a.scrollZoom.enable()});var l=L.circleMarker([49.7417517,15.3350758],{radius:6,color:"gray",weight:1,fillColor:"red",fillOpacity:.7}).addTo(n);a.on("mousemove",function(e){var t=new L.LatLng(e.lngLat.lat,e.lngLat.lng);l.setLatLng(t)}),a.on("click",function(e){var t=new L.LatLng(e.lngLat.lat,e.lngLat.lng);l.setLatLng(t)}),a.on("zoomend",function(){n.setZoom(Math.ceil(a.getZoom())+1)}),a.on("move",function(e){var t=a.getCenter().wrap();n.panTo(new L.LatLng(t.lat,t.lng))}),n.on("drag",function(e){var t=n.getCenter();a.flyTo({center:[t.lng,t.lat]})}),$("#inp-geocode").on("focus input",function(){return $("#inp-geocode").css("border-color","black")}),document.getElementById("frm-geocode").onsubmit=function(e){e.preventDefault();var t=document.getElementById("inp-geocode").value;""===t?a.flyTo({center:[15.3350758,49.7417517],zoom:7}):$.get("https://api.mapy.cz/geocode?query=".concat(t),function(e){if(void 0!==$(e).find("item").attr("x")){var t=parseFloat($(e).find("item").attr("x")),o=parseFloat($(e).find("item").attr("y"));t<12||t>19||o<48||o>52?$("#inp-geocode").css("border-color","red"):a.flyTo({center:[t,o],zoom:12})}else $("#inp-geocode").css("border-color","red")},"xml")}}]);