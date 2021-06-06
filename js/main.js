var mymap = L.map('mapid').setView([41.9665, -87.6533], 11.4);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoibGNzNjI5IiwiYSI6ImNrcDdkY25yZzBkY3EydnFraWJ4cGxpc2cifQ.PsZLPTDhYP1MD3eZl73Nng'
// }).addTo(mymap);

L.tileLayer.provider('Esri').addTo(mymap);

//review layer

var hdlMarker = L.marker([41.85259565214353, -87.62339567941949]);
var fridasMarker = L.marker([42.04796094884984, -87.67994942161285]);
var qxyMarker = L.marker([41.855243583959954, -87.63212650261582]);
var choongMarker = L.marker([42.05965777250042, -87.84366098990584]);
var luellasMarker = L.marker([41.96545635660898, -87.68615596031876]);
var formentosMarker = L.marker([41.88432575661344, -87.65059224497874]);
var ramenMarker = L.marker([41.91968190832512, -87.69148004497751]);
var cupitolMarker = L.marker([42.0460794776756, -87.68313181347051]);

var revLayer = L.layerGroup([hdlMarker, fridasMarker, qxyMarker, choongMarker, luellasMarker, formentosMarker, ramenMarker, cupitolMarker]);

function addRevMarkers () {
    revLayer.addTo(mymap);
    hdlMarker.bindPopup('<a style="font-weight:bold" href="hdl.html" class="maplink"> Haidilao Hotpot </a><br> Chicago, Il').openPopup();
    fridasMarker.bindPopup('<a style="font-weight:bold" href="fridas.html" class="maplink"> Frida\'s </a><br> Evanston, Il ').openPopup();
    qxyMarker.bindPopup('<a style="font-weight:bold" href="qxy.html" class="maplink"> Qing Xiang Yuan Dumplings </a><br> Chicago, Il').openPopup();
    choongMarker.bindPopup('<a style="font-weight:bold" href="choong.html" class="maplink"> Choong Man Chicken (충만치킨) </a><br> Glenview, Il').openPopup();
    luellasMarker.bindPopup('<a style="font-weight:bold" href="luellas.html" class="maplink"> Luella\'s Southern Kitchen</a><br> Chicago, Il').openPopup();
    formentosMarker.bindPopup('<a style="font-weight:bold" href="formentos.html" class="maplink"> Formento\'s </a><br> Chicago, Il').openPopup();
    ramenMarker.bindPopup('<a style="font-weight:bold" href="wasabi.html" class="maplink"> Ramen Wasabi </a><br> Chicago, Il').openPopup();
    cupitolMarker.bindPopup('<a style="font-weight:bold" href="cupitol.html" class="maplink"> Cupitol Coffee & Eatery </a><br> Evanston, Il').openPopup();

}

document.getElementById('revbtn').addEventListener('click', addRevMarkers);

//quick bites layer 

var TEAliMarker = L.marker([42.046111423430375, -87.6816299061061]);
var tomateMarker = L.marker([42.05845409711243, -87.68382636007553]);
var cocinitaMarker = L.marker([42.047125850973345, -87.6790024465835]);
var junebugMarker = L.marker([41.897814883962454, -87.66707788891733]);
var tenQMarker = L.marker([42.048524553362974, -87.68282153124007]);
var pokeMarker = L.marker([42.04744049660716, -87.67945204473253]);
var bettysMarker = L.marker([41.910892901124576, -87.674874060081]);
var mitsuwaMarker = L.marker([42.04486869597398, -87.98055143124016]);
var gusMarker = L.marker([41.890184070555115, -87.62811727890175]);
var bakeryMarker = L.marker([41.97314798862312, -87.65885213002568]);

var qbLayer = L.layerGroup([TEAliMarker, tomateMarker, cocinitaMarker, junebugMarker, tenQMarker, pokeMarker, bettysMarker, mitsuwaMarker, gusMarker, bakeryMarker]);

function addQBMarkers () {
    qbLayer.addTo(mymap);
    TEAliMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/tealicious-bubble-evanston-2" class="maplink"> TEAlicious BUBBLE </a><br> Evanston, Il').openPopup();
    tomateMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/tomate-fresh-kitchen-evanston?osq=tomate" class="maplink"> Tomate Fresh Kitchen</a><br> Evanston, Il').openPopup();
    cocinitaMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/la-cocinita-restaurant-evanston" class="maplink"> La Cocinita </a><br> Evanston, Il').openPopup();
    junebugMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/junebug-caf%C3%A9-chicago" class="maplink"> Junebug Café </a><br> Chicago, Il').openPopup();
    tenQMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/10q-chicken-evanston" class="maplink"> 10Q Chicken </a><br>Evanston, Il').openPopup();
    bettysMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/boxcar-bettys-chicago-2?osq=bettys+boxcar" class="maplink"> Boxcar Betty\'s </a><br> Chicago, Il').openPopup();
    pokeMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/pono-ono-poke-evanston" class="maplink"> Pono Ono Poke </a><br> Evanston, Il').openPopup();
    mitsuwaMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/mitsuwa-marketplace-arlington-heights-3" class="maplink"> Mitsuwa Marketplace </a><br> Arlington Heights, Il').openPopup();
    gusMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/guss-world-famous-fried-chicken-chicago?osq=Gus%27s+World+Famous+Fried+Chicken" class="maplink"> Gus\'s World Famous Fried Chicken </a><br> Chicago, Il').openPopup();
    bakeryMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/chiu-quon-bakery-chicago-2" class="maplink"> Chiu Quon Bakery </a><br> Chicago, Il').openPopup();
}

document.getElementById('qb').addEventListener('click', addQBMarkers);

function removeLayer () {
    mymap.removeLayer(qbLayer);
    mymap.removeLayer(revLayer);
    mymap.removeLayer(casualLayer);
    mymap.removeLayer(formalLayer);
}

document.getElementById('clear').addEventListener('click', removeLayer);

//casual layer 

var joyeesMarker = L.marker([42.04646669359494, -87.67934177356844]);
var robertsMarker = L.marker([41.890793508545656, -87.61639685823086]);
var pancakeMarker = L.marker([42.07658118795717, -87.70553932801424]);
var kocoMarker = L.marker([42.049959081562655, -87.68113954473245]);
var bonchonMarker = L.marker([42.10583341557274, -87.8685285223461]);
var bayanMarker = L.marker([41.96184335963096, -87.67498646007915]);
var deltaMarker = L.marker([41.91071497593297, -87.6719006177527]);
var cubanMarker = L.marker([41.92067321020851, -87.69245767054929]);
var honeybMarker = L.marker([41.94493694750249, -87.70327233708183]);
var spaccaMarker = L.marker([41.9633867174046, -87.67370103892596]);

var casualLayer = L.layerGroup([joyeesMarker, robertsMarker, pancakeMarker, kocoMarker, bonchonMarker, bayanMarker, deltaMarker, cubanMarker, honeybMarker, spaccaMarker]);

function addCasualMarkers () {
    casualLayer.addTo(mymap);
    joyeesMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/joy-yee-evanston-evanston?osq=joyee" class="maplink"> Joy Yee </a><br> Evanston, Il').openPopup();
    kocoMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/koco-table-evanston-3" class="maplink"> Koco Table </a><br>Evanston, Il').openPopup();
    robertsMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/roberts-pizza-and-dough-company-chicago-2?osq=roberts" class="maplink"> Robert\'s Pizza & Dough Company </a><br>Chicago, Il').openPopup();
    pancakeMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/walker-bros-the-original-pancake-house-wilmette?osq=pancake+house" class="maplink"> Walker Bros. The Original Pancake House </a><br> Wilmette, Il').openPopup();
    bonchonMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/bonchon-glenview-glenview-5?osq=bonchon" class="maplink"> Bonchon </a><br>Glenview, Il').openPopup();
    bayanMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/bayan-ko-chicago?osq=bayan+ko" class="maplink"> Bayan Ko </a><br>Chicago, Il').openPopup();
    deltaMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/the-delta-chicago?osq=the+delta" class="maplink"> The Delta </a><br> Chicago, Il').openPopup();
    cubanMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/90-miles-cuban-caf%C3%A9-chicago-4" class="maplink"> 90 Miles Cuban Café </a><br>Chicago, Il').openPopup();
    honeybMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/honey-butter-fried-chicken-chicago?osq=honey+butter+chicken" class="maplink"> Honey Butter Fried Chicken </a><br>Chicago, Il').openPopup();
    spaccaMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/spacca-napoli-chicago?osq=spacca" class="maplink"> Spacca Napoli </a><br>Chicago, Il').openPopup();
}

document.getElementById('casual').addEventListener('click', addCasualMarkers);

//formal layer 

var cabraMarker = L.marker([41.88605207567909, -87.64903851596428]);
var tapasMarker = L.marker([42.046775725426, -87.67896817178051]);
var torinosMarker = L.marker([42.07725093749381, -87.70665254109507]);
var minghinMarker = L.marker([41.853545787505304, -87.63484623130766]);
var makoMarker = L.marker([41.885589088975465, -87.6469169331576]);
var oceanPrimeMarker = L.marker([41.88818029190069, -87.62539367548413]);
var roseMarker = L.marker([41.887050500337516, -87.65113224479978]);
var amaruMarker = L.marker([41.91084192719434, -87.67540603130553]);
var virtueMarker = L.marker([41.825298565624735, -87.581017480018]);
var monteMarker = L.marker([41.88202778775364, -87.653065961991]);
var kaizanMarker = L.marker([41.89570766054753, -87.69158118897717]);
var momotaroMarker = L.marker([41.88602176421722, -87.64848218897754]);
var roohMarker = L.marker([41.896897763663965, -87.64751973719589]);

var formalLayer = L.layerGroup([cabraMarker, tapasMarker, torinosMarker, minghinMarker, makoMarker, oceanPrimeMarker, roseMarker, amaruMarker, virtueMarker, monteMarker, kaizanMarker, momotaroMarker, roohMarker]);

function addFormalMarkers () {
    formalLayer.addTo(mymap);
    cabraMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/cabra-chicago-2" class="maplink"> Cabra </a><br>Chicago, Il').openPopup();
    tapasMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/tapas-barcelona-evanston?osq=tapas+barcelona" class="maplink"> Tapas Barcelona </a><br>Evanston, Il').openPopup();
    torinosMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/torino-ramen-wilmette?osq=torinos" class="maplink"> Torino Ramen </a><br>Wilmette, Il').openPopup();
    minghinMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/minghin-cuisine-chicago-3?osq=minghun+chinatown" class="maplink"> MingHin Cuisine </a><br>Chicago, Il').openPopup();
    makoMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/mako-chicago?osq=mako" class="maplink"> Mako </a><br>Chicago, Il').openPopup();
    oceanPrimeMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/ocean-prime-chicago?osq=ocean+prime" class="maplink"> Ocean Prime </a><br>Chicago, Il').openPopup();
    roseMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/rose-mary-chicago-2?osq=rose+mary" class="maplink"> Rose Mary </a><br>Chicago, Il').openPopup();
    amaruMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/amaru-chicago?osq=amaru" class="maplink"> Amaru </a><br>Chicago, Il').openPopup();
    virtueMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/virtue-restaurant-chicago?osq=Virtue" class="maplink"> Virtue Restaurant </a><br>Chicago, Il').openPopup();
    monteMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/monteverde-chicago" class="maplink"> Monteverde </a><br>Chicago, Il').openPopup();
    kaizanMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/kai-zan-chicago?osq=Kaizan" class="maplink"> Kai Zan </a><br>Chicago, Il').openPopup();
    momotaroMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/momotaro-chicago-3?osq=momotaro" class="maplink"> Momotaro </a><br>Chicago, Il').openPopup();
    roohMarker.bindPopup('<a style="font-weight:bold" href="https://www.yelp.com/biz/rooh-chicago-chicago-6?osq=Rooh" class="maplink"> ROOH </a><br>Chicago, Il').openPopup();
}
document.getElementById('formal').addEventListener('click', addFormalMarkers);




