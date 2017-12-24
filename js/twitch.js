/*
Javascript for Twitch.tv project

-uses Twitch API
*/

var accounts = ["freecodecamp","MiaKhalifa", "Jahrein", "TOTA_2"];
var result = "";
var id = "";


function getStatus(){

	accounts.forEach(function(account){ // for each loop

		//ajax for streams
		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ account +'?callback=?', function(data){

			var game,status;
      		if (data.stream === null) {
        		game = "Offline";
        		status = "offline";

      		} else if (data.stream === undefined) {
       			 game = "Account Closed";
       			 status = "offline";

     		} else {
        		game = data.stream.game;
        		status = "online";
      		};

      	//ajax for channels
      	$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + account + '?callback=?', function(data){

		if (data.logo === null){
			data.logo = 'https://swe.umbc.edu/~zepp1/is448/codecamp_images/default.png';
		};

		if (status === "offline") {
			id = "OFFLINE";
		} else {
			id = "";
		};

		//injected html
		result += "<div class ='account_status' id='"+id+"'><div class='row'>"+
				  "<div class='col-xs-1'><img class='logo' src="+data.logo+"></div>"+
				  "<div class='col-xs-2 name'><a href="+data.url+">"+data.name+"</a></div>"+
				  "<div class='col-xs-9 stat'><i>"+game+"</i></div></div></div>"

		//display results  
		$('#test').html(result);

		});///end channels

		});//end streams
		
	});//end for each
}