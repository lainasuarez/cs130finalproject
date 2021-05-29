var mymap = L.map('mapid').setView([41.9665, -87.6533], 11.4);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoibGNzNjI5IiwiYSI6ImNrcDdkY25yZzBkY3EydnFraWJ4cGxpc2cifQ.PsZLPTDhYP1MD3eZl73Nng'
// }).addTo(mymap);


// L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
// L.tileLayer.provider('Esri.DeLorme').addTo(mymap);
// L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);
L.tileLayer.provider('Esri').addTo(mymap);

var hdlMarker = L.marker([41.85259565214353, -87.62339567941949]).addTo(mymap);
hdlMarker.bindPopup('<a style="font-weight:bold" href="hdl.html" class="maplink"> Haidilao Hotpot </a><br> Chicago, Il').openPopup();

var fridasMarker = L.marker([42.04796094884984, -87.67994942161285]).addTo(mymap);
fridasMarker.bindPopup('<a style="font-weight:bold" href="fridas.html" class="maplink"> Frida\'s </a><br> Evanston, Il ').openPopup();

var qxyMarker = L.marker([41.855243583959954, -87.63212650261582]).addTo(mymap);
qxyMarker.bindPopup('<a style="font-weight:bold" href="qxy.html" class="maplink"> Qing Xiang Yuan Dumplings </a><br> Chicago, Il').openPopup();

var choongMarker = L.marker([42.05965777250042, -87.84366098990584]).addTo(mymap);
choongMarker.bindPopup('<a style="font-weight:bold" href="choong.html" class="maplink"> Choong Man Chicken (충만치킨) </a><br> Glenview, Il').openPopup();

var luellasMarker = L.marker([41.96545635660898, -87.68615596031876]).addTo(mymap);
luellasMarker.bindPopup('<a style="font-weight:bold" href="luellas.html" class="maplink"> Luella\'s Southern Kitchen</a><br> Chicago, Il').openPopup();

var formentosMarker = L.marker([41.88432575661344, -87.65059224497874]).addTo(mymap);
formentosMarker.bindPopup('<a style="font-weight:bold" href="formentos.html" class="maplink"> Formento\'s </a><br> Chicago, Il').openPopup();

var ramenMarker = L.marker([41.91968190832512, -87.69148004497751]).addTo(mymap);
ramenMarker.bindPopup('<a style="font-weight:bold" href="wasabi.html" class="maplink"> Ramen Wasabi </a><br> Chicago, Il').openPopup();

var cupitolMarker = L.marker([42.0460794776756, -87.68313181347051]).addTo(mymap);
cupitolMarker.bindPopup('<a style="font-weight:bold" href="cupitol.html" class="maplink"> Cupitol Coffee & Eatery </a><br> Evanston, Il').openPopup();


