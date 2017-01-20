// Init function
$.fn.ratingInit = function(config){
    for (widget of $(this))
    {
        var magicRatingWidget = $(widget);
        //// Get datas ////
        // icon +
        if (magicRatingWidget.data("iconGood") == null) {
            magicRatingWidget.data("iconGood", config.iconGood != null ? config.iconGood : "fa-star");       
        };

        // icon -
        if (magicRatingWidget.data("iconBad") == null) {
            magicRatingWidget.data("iconBad", config.iconBad != null ? config.iconBad : "fa-star-o");      
        };
        /*
        console.log(magicRatingWidget.data("iconGood"));
        console.log(magicRatingWidget.data("iconBad"));
        */
        // Clear
        magicRatingWidget.html("");

        // Init icons
        for(i=1; i<=5; i++) // TODO: number of rate star
        {
            if(i <= $(this).data("currentRating"))
            {
                magicRatingWidget.append('<i class="fa '+magicRatingWidget.data("iconGood")+' magic-rating-icon" aria-hidden="true" data-default=true data-rating='+ i +'></i>');        
            }
            else
            {
                magicRatingWidget.append('<i class="fa '+magicRatingWidget.data("iconBad")+' magic-rating-icon" aria-hidden="true" data-default=false data-rating='+ i +'></i>');        
            }
        }

        // Init reset handler
        magicRatingWidget.on("mouseleave", function () {
            var widget = $(this);
            /*
            console.log("mouseleave");
            console.log(widget.data("iconGood"));
            console.log(widget.data("iconBad"));
            */
            widget.children().each(function(){
                var icon = $(this);
                if(icon.data("default") && !icon.hasClass("fa-star"))
                {
                    icon.removeClass(widget.data("iconBad"));
                    icon.addClass(widget.data("iconGood"));
                }
                else if(!icon.data("default") && !icon.hasClass("fa-star-o"))
                {
                    icon.removeClass(widget.data("iconGood"));
                    icon.addClass(widget.data("iconBad"));   
                }
            });
        });

        // Init click handler
        magicRatingWidget.on("click", ".magic-rating-icon", function()
        {
            // Get rating
            var icon = $(this);
            var widget = icon.parent();
            var rating = icon.data("rating");
            /*
            console.log("click");
            console.log(widget.data("iconGood"));
            console.log(widget.data("iconBad"));
            */
            // Update rating
            widget.children().each(function(){
                if ($(this).data("rating") <= rating) 
                {
                    if (!$(this).hasClass(widget.data("iconGood"))) 
                    {
                        $(this).removeClass(widget.data("iconBad"));
                        $(this).addClass(widget.data("iconGood"));
                    };
                    $(this).data("default", true);
                }
                else
                {
                    if(!$(this).hasClass(widget.data("iconBad")))
                    {
                        $(this).removeClass(widget.data("iconGood"));
                        $(this).addClass(widget.data("iconBad"));
                    }
                    $(this).data("default", false);
                }
            });

            var callbackSuccess = config.success.bind(null, widget, rating);
            callbackSuccess();
        });

        // Init hover icons
        magicRatingWidget.on("mouseenter", ".magic-rating-icon", function(){
            var icon = $(this);
            var rating = icon.data("rating");
            var widget = icon.parent();
            /*
            console.log("mouseenter");
            console.log(widget.data("iconGood"));
            console.log(widget.data("iconBad"));
            */
            widget.children().each(function(){
                if ($(this).data("rating") <= rating) 
                {
                    if (!$(this).hasClass(widget.data("iconGood"))) 
                    {
                        $(this).removeClass(widget.data("iconBad"));
                        $(this).addClass(widget.data("iconGood"));
                    };
                }
                else
                {
                    if(!$(this).hasClass(widget.data("iconBad")))
                    {
                        $(this).removeClass(widget.data("iconGood"));
                        $(this).addClass(widget.data("iconBad"));
                    }
                }
            });
        });
    }    
};

// Update for hover icons
