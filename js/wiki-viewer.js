/*Scripts for wiki viewer*/

var lang = "en";
var api = 'https://'+lang+'.wikipedia.org/w/api.php?format=json&action=opensearch&search=';
var cb = '&callback=?';
var results;

//AJAX request for Wiki API based on search box value
function search(){
	var searchVal = $('#search-box').val();
	results ="";

	if (searchVal !== ""){ //search box is not empty

		$.ajax({

			url: api+searchVal+cb,
			type: 'GET',
			dataType: 'json',
			async: false,
			contentType: "application/json; charset=utf-8",

			success: function(data){
				//console.log(data);
				if(data[1].length == 0){results = "No Results Found";} // no data
				else
					for(var i =0; i < data[1].length; i++){

						results +='<div class="search-results"><a class="block" href="'+data[3][i]+
						'"><div class="results-name">'+data[1][i]+
						'</div><div class="results-desc">'+data[2][i]+'</div></a></div>';
					}
					$('#view').html(results);
						}//success
				});//ajax
	}
}//search

