!function(e){var t={};function o(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t),function(){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var e=document.createElement("div");e.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',e.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(e)}}();var r=L.esri.imageMapLayer({url:"https://sentinel.arcgis.com/arcgis/rest/services/Sentinel2/ImageServer",attribution:"United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)",token:"Dg6166N2Ut2iFnzqP-UzjeTXhOgKj72bIf4H7P5AqOudT-gh7gfdpbweU-eyJ-KNPSb-UZBiGT-Hhtc6Uo8xAxojG-KiUjC-Sfe5wHo9OU_eJfBxPugyzFdCxLoSWCeyMHJ8ZZYP5KWPMOy-r5nFsw.."}),a=L.esri.tiledMapLayer({url:"http://ags.cuzk.cz/arcgis/rest/services/ortofoto_wm/MapServer",attribution:"ČÚZK, data o těžbě kurovcovamapa.cz"}),n=L.vectorGrid.protobuf("https://a.kurovcovamapa.cz/suchy-2019-04/{z}/{x}/{y}.pbf",{vectorTileLayerName:"deadwood201904",vectorTileLayerStyles:{suchy201904:{color:"#d00000",weight:2,opacity:.55,fillOpacity:.55,fill:!0,fillColor:"#d00000"}},maxZoom:20,subdomains:"a",rendererFactory:L.svg.tile}),i=L.vectorGrid.protobuf("https://a.kurovcovamapa.cz/tezba/{z}/{x}/{y}.pbf",{vectorTileLayerName:"baresoil",vectorTileLayerStyles:{suchy201904:{color:"#0000d0",weight:2,opacity:.55,fillOpacity:.55,fill:!0,fillColor:"#0000d0"}},maxZoom:20,subdomains:"a",rendererFactory:L.svg.tile}),l=L.tileLayer("https://samizdat.cz/tiles/ton_l2/{z}/{x}/{y}.png",{foo:"bar",attribution:'&copy; přispěvatelé <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}),c=L.map("map_right",{center:[49.7417517,15.3350758],zoom:7,zoomControl:!1,layers:[r]}),s=L.map("map_left",{center:[49.7417517,15.3350758],zoom:7,layers:[a,n,i,l]});c.scrollWheelZoom.disable(),s.scrollWheelZoom.disable(),s.sync(c),c.sync(s);var p=L.circleMarker([49.7417517,15.3350758],{radius:6,color:"gray",weight:1,fillColor:"red",fillOpacity:.7}).addTo(c);s.on("mousemove",function(e){var t=new L.LatLng(e.latlng.lat,e.latlng.lng);p.setLatLng(t)}),s.on("click",function(e){var t=new L.LatLng(e.latlng.lat,e.latlng.lng);p.setLatLng(t)}),$("#inp-geocode").on("focus input",function(){return $("#inp-geocode").css("border-color","black")}),document.getElementById("frm-geocode").onsubmit=function(e){e.preventDefault();var t=document.getElementById("inp-geocode").value;""===t?s.flyTo({center:[15.3350758,49.7417517],zoom:7}):$.get("https://api.mapy.cz/geocode?query=".concat(t),function(e){if(void 0!==$(e).find("item").attr("x")){var t=parseFloat($(e).find("item").attr("x")),o=parseFloat($(e).find("item").attr("y"));t<12||t>19||o<48||o>52?$("#inp-geocode").css("border-color","red"):s.setView([o,t],12)}else $("#inp-geocode").css("border-color","red")},"xml")}}]);