# MagicRating
A javascript library to create a rating system front-end with FontAwesome icons

# Dependencies
* Jquery (tested with [Jquery 3.1.1](https://code.jquery.com/jquery-3.1.1.min.js))
* FontAwesome (tested with  [FontAwesome4.7.0](https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css))

# Documentation
Demonstrations can be find in Examples folder
## Configuration
Everything start with the call of the magic function **magicRatingInit**

> *"HoooOoOooo The magic function !!!"*

Yes ! Let me show you how to use it (or you could destroy the woooorld with his power !)

I have a span

    <span class="myDumpSpan"></span>

I have a magic function with your custom callback function

    $(".myDumpSpan").magicRatingInit({
	    success: function(widget, rating){
		    console.log(rating);
	    }
    })

and you get ... A SPANMAGICFUNCTION ... wait no, you get a RATING WIDGET !
 


----------


You can configure your widgets of 2 different ways:

 - With configuration object send into the call
 - With data attributes

> /!\ Data attributes override configuration object.

You can configure :

| To change    | data-attribute | config parameter |restrictions|
|--------------|----------------|------------------|-----------|
|Positive icons|icon-good       |iconGood          |fontAwesome class|
|Negative icons|icon-bad		|iconBad		   |fontAwesome class|
|Set max mark  |max-mark		|maxMark		   | \>= 1|
|Current rating|current-rating|currentRating|0<= rating <= maxMark|
