var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 19.284283, lng: -99.13628},
        mapTypeId: 'satellite'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        radius: 20,
        gradient: getGradient(),
        data: getPoints(),
        map: map
    });
}
let points = [];
function getPoints() {
    console.log(latlong);
    for(let i = 0; i < (latlong.length/2); i+=2){
        console.log(latlong[i] + " " + latlong[i+1]); 
        points.push(new google.maps.LatLng(latlong[i], latlong[i+1]));
    }
    console.log(points);
    return points;
}

function getGradient(){
    return gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
}