// Init function
$.fn.ratingInit = function(config){
    var currentRating = $(this).data("currentRating");

    // Clear
    $(this).html("");

    // Init icons
    for(i=1; i<=5; i++) // TODO: number of rate star
    {
        if(i <= currentRating)
        {
            $(this).append('<i class="fa fa-star magic-rating-icon" aria-hidden="true" data-default=true data-rating='+ i +'></i>');        
        }
        else
        {
            $(this).append('<i class="fa fa-star-o magic-rating-icon" aria-hidden="true" data-default=false data-rating='+ i +'></i>');        
        }
    }

    // Init reset handler
    $(this).on("mouseleave", function () {
        $(this).children().each(function(){
            var icon = $(this);
            if(icon.data("default") && !icon.hasClass("fa-star"))
            {
                icon.removeClass("fa-star-o");
                icon.addClass("fa-star");
            }
            else if(!icon.data("default") && !icon.hasClass("fa-star-o"))
            {
                icon.removeClass("fa-star");
                icon.addClass("fa-star-o");   
            }
        });
    });

    // Init click handler
    $(this).on("click", ".magic-rating-icon", function()
    {
        // Get rating
        var icon = $(this);
        var magicRatingWidget = icon.parent();
        var rating = icon.data("rating");

        // Update rating
        magicRatingWidget.children().each(function(){
            if ($(this).data("rating") <= rating) 
            {
                if (!$(this).hasClass("fa-star")) 
                {
                    $(this).removeClass("fa-star-o");
                    $(this).addClass("fa-star");
                };
                $(this).data("default", true);
            }
            else
            {
                if(!$(this).hasClass("fa-star-o"))
                {
                    $(this).removeClass("fa-star");
                    $(this).addClass("fa-star-o");
                }
                $(this).data("default", false);
            }
        });

        var callbackSuccess = config.success.bind(null, magicRatingWidget, rating);
        callbackSuccess();
    });

    return this;
};

// Update for hover icons
$(document).on("mouseenter", ".magic-rating-icon", function(){
    var icon = $(this);
    var rating = icon.data("rating");
    icon.parent().children().each(function(){
        if ($(this).data("rating") <= rating) 
        {
            if (!$(this).hasClass("fa-star")) 
            {
                $(this).removeClass("fa-star-o");
                $(this).addClass("fa-star");
            };
        }
        else
        {
            if(!$(this).hasClass("fa-star-o"))
            {
                $(this).removeClass("fa-star");
                $(this).addClass("fa-star-o");
            }
        }
    });
});

// Click system