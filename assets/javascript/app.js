// create an array of buttons that hold user input and a select list of meme categories

// on button click, clear gif holder div and append 10 static memes and their rating in the gif holder div

// on gif click make gif animate, on second click make static

// add form for user to add a new meme category

$( document ).ready(function() {

// creating a memes array to hold all meme categories
var memes = ["kermit", "the office", "grumpy cat", "pepe the frog", "mr. krabs", "doge"];

// creating a function
function displayMemes() {

var meme = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5WvKlaf4SS3q9eGvInak6z3LoqlHOkgN&q=memes" + meme + "&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"

}).then(function (response) {

    // looping through 10 gifs and appending them to the memes div
    for (var i = 0; i < 10; i++) {
    console.log(response.data[i].rating);
    var rating = response.data[i].rating;
    var ratingDisplay = $("<p>").text("Rating: " + rating);
    $("#memes").append(ratingDisplay);
    var gifURL = response.data[i].images.original_still.url;
    var gif = $("<img>").attr("src", gifURL);
    $("#memes").append(gif);
    }
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



