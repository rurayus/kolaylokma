function initMap() {
    let zonguldak = {lat: 41.4565, lng: 31.7986};
    let map = new google.maps.Map( 
        document.getElementById('map'), {zoom: 100, center: zonguldak}
    );
    let marker = new google.maps.Marker({position: zonguldak, map: map})
}
