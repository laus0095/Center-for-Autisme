// Initialize and add the map
function initMap() {
    // The location of Uluru
    var Denmark = {lat: 55.724740, lng: 12.423255};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: Denmark});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: Denmark, map: map});
  }