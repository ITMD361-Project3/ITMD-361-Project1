function initMap () {
  var defaultCenter = new google.maps.LatLng(18.2550,-66.4670);
  var mapOptions = {
    center: defaultCenter,
    zoom: 10
  };
  
  var myLocation =  new google.maps.LatLng(18.2550,-66.4670);

  var mapElement = document.getElementById('map');

  var map = new google.maps.Map (mapElement, mapOptions);
  
  var marker = new google.maps.Marker ({
    position: myLocation,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: 'media/pricon.jpg'
  }); 
  
  var contentString = 
    '<h2 id="maptitle">Scroll through the beautiful island I am from:</h2>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200,
  });
   
  marker.addListener('mouseover', function() {
    infowindow.open(map, this);
  });
  
  marker.addListener('mouseout', function() {
    infowindow.close();
  });
  
  marker.addListener('click', function() {
    infowindow.open(map, this);
  });
 
 google.maps.event.addDomListener(window, 'load', initMap);
}
