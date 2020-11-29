function initMap () {
var map = new google.maps.Map (document.getElementById('map'), {
  center: {lat: 18.2550, lng: -66.4670},
  zoom: 5
}};

var myMap = new google.maps.Map (el, mapOptions);
var marker = new google.maps.Marker ({
  position: myLocation,
  map: myMap,
  animation: google.maps.Animation.DROP,
  icon: 'pricon.jpg'
});

var infoGPS = new google.maps.InfoWindow({
    content: contentGPS,
});

var contentStrig = '<h2 id="maptitle">Scroll through the beautiful island I am from:</h2>;
var infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 200,
});
}
