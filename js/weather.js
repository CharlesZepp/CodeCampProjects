/*Weather App Scripts*/

var long, lat;

//Uses HTML Geolocation API to get users location
function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			x = position.coords.longitude;
			y = position.coords.latitude;
			console.log(y,x);
			getWeather(x, y);
		});
	} else {
		$('#location').html("Geolocation is not supported by this browser");
	}
}

//Displays location stats
function getWeather(long, lat){
	$.ajax({
		url:'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long,
		success: function(result){
			$('#location').html(result.name);
			$('#weather').html(result.weather[1].main);
			$('#temp').html(result.main.temp);
			$('#icon').attr("src", 'http://openweathermap.org/img/w/'+result.weather[1].icon+'.png');
			description = result.weather[1].description;
		}
	});
}

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
