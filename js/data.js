// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCd7-VnMfRf2HxPb2q134E411q5g73A1Fo",
    authDomain: "rfid-3dceb.firebaseapp.com",
    databaseURL: "https://rfid-3dceb.firebaseio.com",
    projectId: "rfid-3dceb",
    storageBucket: "rfid-3dceb.appspot.com",
    messagingSenderId: "842104665981",
    appId: "1:842104665981:web:4e04c756bb1be489f17e14"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//Path to the database data
var latitud1 = firebase.database().ref('devices/Sensor/lat');
var longitud1 = firebase.database().ref('devices/Sensor/long');
var humedad1 = firebase.database().ref('devices/Sensor/humedad');

//Retrieving data
latitud1.on('value', function(snapshot) {
    var lat = String(snapshot.val());
    $('#latitud1').empty();
    $('#latitud1').append("Latitud: " + lat);
});

longitud1.on('value', function(snapshot) {
    var long = String(snapshot.val());
    $('#longitud1').empty();
    $('#longitud1').append("Longitud: " + long);
});

humedad1.on('value', function(snapshot) {
    var hum = String(snapshot.val());
    $('#humedad1').empty();
    $('#humedad1').append("Humedad: " + hum);
});

$('.expand').on('click', function () {
    $('#sensor-data1').slideToggle();
})

