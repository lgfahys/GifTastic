$(document).ready(function () {
    // creating a memes array to hold all meme categories
    var memes = ["kermit", "the office", "pepe the frog", "mr. krabs", "doge"];

    // creating a displayMemes function that uses giphy api to get 10 meme gifs and their rating and appends them to the #memes div
    function displayMemes() {

        var meme = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5WvKlaf4SS3q9eGvInak6z3LoqlHOkgN&q=memes+" + meme + "&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {
            // emptying the memes div each time user clicks a meme button
            $("#memes").empty();
            // looping through 10 gifs and appending the gif url/rating to the #memes div
            for (var i = 0; i < 10; i++) {
                var rating = response.data[i].rating;
                var ratingDisplay = $("<p>").html("Rating: " + rating);
                $("#memes").prepend(ratingDisplay);
                var gifURL = response.data[i].images.original.url;
                var gif = $("<img>").attr("src", gifURL);
                $("#memes").prepend(gif);
            }
        });
    }

    // when the add meme button is clicked..
    $("#add-meme").on("click", function (event) {
        event.preventDefault();
        var meme = $("#meme-input").val().trim();
        memes.push(meme);
        addButtons();
    });

    // adds new button with user input
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

    // calling the displayMemes function on meme button click
    $(document).on("click", ".meme-btn", displayMemes);
    // adding buttons for all memes in the original memes array
    addButtons();

});



