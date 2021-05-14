let map = L.map('map').setView([35.30, 138.30] , 5);
L.tileLayer('http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '? OpenStreetMap contributors',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);