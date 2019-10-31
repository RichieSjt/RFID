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
var n_sensores = firebase.database().ref('N-sensores')
var sensores = firebase.database().ref('devices');

n_sensores.on('value', function(snapshot) {
    var sens = String(snapshot.val());
    $('#leftcontainerheader').empty();
    $('#leftcontainerheader').append("Sensores activos: " + sens);
});

//Retrieving data
for(let i = 1; i < 4; i++){
    var nombre = "Sensor" + i;
    sensores.child(nombre).child("lat").on('value', function(snapshot) {
        var lat = String(snapshot.val());
        var id = "#latitud" + i;
        $(id).empty();
        $(id).append("Latitud: " + lat);
    });
    sensores.child(nombre).child("long").on('value', function(snapshot) {
        var long = String(snapshot.val());
        var id = "#longitud" + i;
        $(id).empty();
        $(id).append("Longitud: " + long);
    });
    sensores.child(nombre).child("humedad").on('value', function(snapshot) {
        var hum = String(snapshot.val());
        var id = "#humedad" + i;
        $(id).empty();
        $(id).append("Humedad: " + hum);

        //30 es seco
        if(parseInt(hum) >= 25){
            //Poner circulo en rojo
            color = "#dot" + i; 
            $(color).css('background-color', '#e62929');
        }else if(hum == "null"){
            color = "#dot" + i; 
            $(color).css('background-color', '#e6df27');
        }else{
            color = "#dot" + i; 
            $(color).css('background-color', 'green');
        }
    });
}

$('.expand').on('click', function () {
    var id = $(this).attr("data-sec");
    $(id).slideToggle();
})