var slideIndex = 1;
var prevIndex = slideIndex;
showDivs(slideIndex);

function plusDivs(n) {
  console.log("plusdiv")
  prevIndex = slideIndex;
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");

  console.log(x.length)
  console.log(dots)
  console.log(n)
  console.log(prevIndex)

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var slideIndex3 = 1;
var prevIndex = slideIndex3;
showDivs3(slideIndex3);

function plusDivs3(n) {
  console.log("plusdiv")
  prevIndex = slideIndex3;
  showDivs3(slideIndex3 += n);
}

function currentDiv3(n) {
  showDivs3(slideIndex3 = n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");

  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " active";
}

var slideIndex6 = 1;
var prevIndex = slideIndex6;
showDivs6(slideIndex6);

function plusDivs6(n) {
  console.log("plusdiv")
  prevIndex = slideIndex6;
  showDivs6(slideIndex6 += n);
}

function currentDiv6(n) {
  showDivs6(slideIndex6 = n);
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("dot6");

  if (n > x.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex6-1].style.display = "block";  
  dots[slideIndex6-1].className += " active";
}

var slideIndex7 = 1;
var prevIndex = slideIndex7;
showDivs7(slideIndex7);

function plusDivs7(n) {
  console.log("plusdiv")
  prevIndex = slideIndex7;
  showDivs7(slideIndex7 += n);
}

function currentDiv7(n) {
  showDivs7(slideIndex7 = n);
}

function showDivs7(n) {
  var i;
  var x = document.getElementsByClassName("mySlides7");
  var dots = document.getElementsByClassName("dot7");

  if (n > x.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex7-1].style.display = "block";  
  dots[slideIndex7-1].className += " active";
}

var slideIndex12 = 1;
var prevIndex = slideIndex12;
showDivs12(slideIndex12);

function plusDivs12(n) {
  console.log("plusdiv")
  prevIndex = slideIndex12;
  showDivs12(slideIndex12 += n);
}

function currentDiv12(n) {
  showDivs12(slideIndex12 = n);
}

function showDivs12(n) {
  var i;
  var x = document.getElementsByClassName("mySlides12");
  var dots = document.getElementsByClassName("dot12");

  if (n > x.length) {slideIndex12 = 1}
  if (n < 1) {slideIndex12 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex12-1].style.display = "block";  
  dots[slideIndex12-1].className += " active";
}



/*toggle*/
function toggleFunction() {
  var geojsonMarkerOptions = {
    radius: 16,
    fillColor: "#ff7800",
    color: "#ff7800",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.2
  };

  var layers = {
    layer1: {
      layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
    },
    layer2: {
      // layer: L.geoJSON(myjson)
      layer: L.geoJson.ajax('StoryMapFinal.geojson',{
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        }
      })
    },
    layer4: {
      layer: L.geoJson.ajax('StoryMapAdd.geojson',{
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        }
      })
    },
    layer3: {
      layer: L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/swang874/api/v1/map/named/tpl_c7eba1a9_0c2f_4869_96b7_21d1b48866b0/all/{z}/{x}/{y}.png')
    }
  };

  var scenes = {
    scene1: {lat: 46.321314166257814, lng: -90.654405473077787, zoom: 17, layers: [layers.layer2], name: "scene 1"},
    scene2: {lat: 46.321998694420486, lng: -90.655872629142436, zoom: 17, layers: [layers.layer2], name: "scene 2"},
    scene3: {lat: 46.327590379448516, lng: -90.655780569949059, zoom: 17, layers: [layers.layer2], name: "scene 3"},
    scene3a: {lat: 46.342360999117091, lng: -90.673961999965158, zoom: 17, layers: [layers.layer2, layers.layer4], name: "scene 3a"},
    scene4: {lat: 46.356637335326468, lng: -90.680722215532413, zoom: 17, layers: [layers.layer2], name: "scene 4"},
    scene5: {lat: 46.364968258185264, lng: -90.681141493814295, zoom: 17, layers: [layers.layer2], name: "scene 5"},
    scene5a: {lat: 46.371805999116837, lng: -90.70641499934537, zoom: 17, layers: [layers.layer2, layers.layer4], name: "scene 5a"},
    scene6: {lat: 46.361643427158135, lng: -90.736362912299583, zoom: 17, layers: [layers.layer2], name: "scene 6"},
    scene7: {lat: 46.38695224021086, lng: -90.727262731238184, zoom: 17, layers: [layers.layer2], name: "scene 7"},
    scene7a: {lat: 46.392453999235968, lng: -90.760219000523932, zoom: 17, layers: [layers.layer2, layers.layer4], name: "scene 7a"},
    scene8: {lat: 46.391960311287043, lng: -90.773994150810651, zoom: 17, layers: [layers.layer2], name: "scene 8"},
    scene8a: {lat: 46.402104999205385, lng: -90.76754599940439, zoom: 17, layers: [layers.layer2, layers.layer4], name: "scene 8a"},
    scene9: {lat: 46.407232015673344, lng: -90.763552697968876, zoom: 17, layers: [layers.layer2], name: "scene 9"},
    scene10: {lat: 46.407014339863345, lng: -90.773664509392418, zoom: 17, layers: [layers.layer2], name: "scene 10"},
    scene11: {lat: 46.402307780646886, lng: -90.794117804867739, zoom: 17, layers: [layers.layer2], name: "scene 11"},
    scene12: {lat: 46.41576807045498, lng: -90.80813283884298, zoom: 17, layers: [layers.layer2], name: "scene 12"},
    scene12a: {lat: 46.423809998828553, lng: -90.817120000087158, zoom: 17, layers: [layers.layer2, layers.layer4], name: "scene 12a"},
    scene12b: {lat: 46.471819999112817, lng: -90.843389999751963, zoom: 17, layers: [layers.layer2, layers.layer4], name: "scene 12b"},
    scene12c: {lat: 46.493319999167227, lng: -90.839259999462413, zoom: 17, layers: [layers.layer2, layers.layer4], name: "scene 12c"},
    scene13: {lat: 46.558531960851418, lng: -90.882473753210419, zoom: 15, layers: [layers.layer2], name: "scene 13"},
    scene14: {lat: 46.5669643045062, lng: -90.876643562230626, zoom: 16, layers: [layers.layer2], name: "scene 14"},
    scene15: {lat: 46.576791984870489, lng: -90.905910780329535, zoom: 17, layers: [layers.layer2], name: "scene 15"},
    scene16: {lat: 46.586418198555286, lng: -90.900665589951473, zoom: 17, layers: [layers.layer2], name: "scene 16"},
    scene17: {lat: 46.598332665654858 , lng: -90.884264532990301, zoom: 15, layers: [layers.layer2], name: "scene 17"},
    scene18: {lat: 46.602485623414445, lng: -90.876800903711668, zoom: 15, layers: [layers.layer2], name: "scene 18"},
    scene19: {lat: 46.60248562341444, lng: -90.876800903711668, zoom: 13, layers: [layers.layer2, layers.layer3], name: "scene end"}
  };

  $('#storymap').storymap({
    scenes: scenes,
    baselayer: layers.layer3,
    legend: true,
    loader: true,
    flyto: true,
    credits: "Build with <i class='material-icons' style='color: red; font-size: 10px;'>favorite</i> from John Doe",
    scalebar: true,
    scrolldown: true,
    progressline: true,
    navwidget: true,
    createMap: function () {
      var map = L.map($(".storymap-map")[0], {zoomControl: false}).setView([46.321314166257814, -90.654405473077787], 16);
      basemap = this.baselayer.layer.addTo(map);
      return map;
    }
  });
}