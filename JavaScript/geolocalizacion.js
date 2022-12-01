function initMap() {

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  window.addEventListener("load", () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=> {
          
            console.log(position); 
           let lon = position.coords.longitude;
          let lati = position.coords.latitude;

var waypts = [{ location: { lat: 9.657643,lng: -82.753404 }, stopover: true }, 
  { location: { lat: lati, lng: lon }, stopover: true }];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: waypts[0].location.lat, lng: waypts[0].location.lng }
    
});

var marker = new google.maps.Marker({
  position: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },
  map: map,
  animation:google.maps.Animation.BOUNCE
});

var infowindow = new google.maps.InfoWindow({
  content:"Yire Store"
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  map.setZoom(19);
  map.setCenter(marker.getPosition());
});

directionsDisplay.setMap(map);

directionsService.route({
    origin: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },
    destination: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },
    waypoints: waypts,
    travelMode: google.maps.TravelMode.DRIVING   
}, function (response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);

        
    } else {
        window.alert('La dirección ha fallado: ' + status);
    }
});
        }); 
    }
  
  });

}



