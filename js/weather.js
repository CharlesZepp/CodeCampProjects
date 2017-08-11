/*Weather App Scripts*/

//API used does a horrible job with icons, need to fix 

var long, lat, C, F;

//Uses HTML Geolocation API to get users location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            x = position.coords.longitude;
            y = position.coords.latitude;
                getWeather(x, y);
        });
    } else {
        alert("Geolocation is not supported by this browser");
    }
}

//Displays location stats
function getWeather(long, lat){
    $.ajax({
        url:'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long,
        success: function(result){
            //console.log(result);
            $('#location').html(result.name);
            $('#weather').html(result.weather[0].main);//main weather in area
                description = result.weather[0].description;// global var of desc to be used in showDesc func
                //tempuratures 
                C = Math.round(result.main.temp);//celsius
                F = fahrenheit(C);//fahrenheit
            $('#temp').html(F);
            $('#icon').attr("src", result.weather[0].icon);//weather icon
        }
    });
}

//Change between Celsius and Fahrenheit symbol
function changeCF(){
    var current = $('#CF');//either C or F

    if (current.html() == 'F'){
        current.html('C');
            $('#temp').html(C);
    } else {
        current.html('F');
            $('#temp').html(F);
    }
}

//to fhrenheit
function fahrenheit(temp){
    return Math.round(((temp) * 9/5)+32);
}

//onhover functions for weather description
function showDesc(){
    $('#desc').html(description)
}
function removeDesc(){
    $('#desc').html("");
}

/*Not alot of users "approve" location services, so it is import to have error checking
function errorCheck(error){
    switch(error.code){
         case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
}*/
