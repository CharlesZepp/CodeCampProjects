/*Scripts for wiki viewer*/

/** TO DO
-make it so value of sewrch box is inputted into request
-make it ajax request act like a google serach where is searches while you are typing
*/

var api = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=';
var cb = '&callback=?';
var results;

function search(){
     var searchVal = $('#search-box').val();
    results ="";

    if (searchVal !== ""){

        $.ajax({
            url: api+searchVal+cb,
            type: 'GET',
            dataType: 'json',
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function(data){
                console.log(data);
             if(data[1].length == 0){results = "No Results Found";} // no data
             else

             for(var i =0; i < data[1].length; i++){
               results +='<div class="search-results"><a class="block" href="'+data[3][i]+
                '"><div class="results-name">'+data[1][i]+
                    '</div><div class="results-desc">'+data[2][i]+'</div></a></div>'
            }
         $('#view').html(results);
            }
        });
    }
}