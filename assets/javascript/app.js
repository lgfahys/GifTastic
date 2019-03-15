// create an array of buttons that hold user input and a select list of meme categories

// on button click, clear gif holder div and append 10 static memes and their rating in the gif holder div

// on gif click make gif animate, on second click make static

// add form for user to add a new meme category
$( document ).ready(function() {
var memes = ["kermit the frog", "the office", "grumpy cat", "pepe the frog", "mr. krabs", "doge"];

function displayMemes() {
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5WvKlaf4SS3q9eGvInak6z3LoqlHOkgN&q=memes" + meme + "&limit=10";

var meme = $(this).attr("data-name");

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

});
}

$("#add-meme").on("click", function (event) {
    event.preventDefault();
    var meme = $("#meme-input").val().trim();
    memes.push(meme);
    addButtons();
});

function addButtons() {
    $("#buttons").empty();
    for (var i = 0; i < memes.length; i++) {
        var button = $("<button>");
        button.addClass("meme-btn");
        button.attr("data-name", memes[i]);
        button.text(memes[i]);
        $("#buttons").append(button);
    }
}

$(document).on("click", ".meme-btn", displayMemes);

addButtons();
});



