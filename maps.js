if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myMap);
}
function myMap(position) {
    var myCenter = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 15,

        panControl: false,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);

}
google.maps.event.addListener(marker,'click',function() {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
});

