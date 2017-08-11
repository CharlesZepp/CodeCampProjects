/*Random Quote Scripts*/

/*
Functions for the use of displaying random quotes along with a random new background
*/

//default place holder
var content = "This is a random quote machine";
var author = "Random Quote";

function setDefault(){

    $('#content').html(content);
    $('#author').html(author);
}

//Pulls a random quote from a source/API found and places new quote/ author in vars
function getQuote(){

    $.ajax({
        url:
        'http://quotes.stormconsultancy.co.uk/random.json' // CS random quotes API
        //'https://random-quote-generator.herokuapp.com/api/quotes/random' //Random qoutes used for codepen
        //'https://api.icndb.com/jokes/random' //chuck norris random quote API
        ,
        success: function(data){
            
            content = data.quote;
            author = data.author;
        }
    });
}

//sets Quote using vars and animation and changes BG color w/ the use of developed funcs
function setQuote(){

    var color = getRandomColor();

    $('#quote').animate({
        opacity: '0'
    }, "slow", 
        function(){
            $(this).animate({
                opacity: '1'
            }, "slow");

            //places new quote in html page
            $('#content').html(content);
            $('#author').html(author);
        });

    $("html").animate({
        backgroundColor: color
    }, "slow", changeBG);
}

//tweets qoute and author 
function tweet(){
    $('#tweet').attr("href", 'https://twitter.com/intent/tweet?hashtags=CharliesQuoteMachine&text=' + encodeURIComponent('"' + content + '"' + " -" + author));
}

//set css style to a random color
function changeBG(){
    document.body.style.backgroundColor = getRandomColor();
}

//Generates a random color
function getRandomColor(){

    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}