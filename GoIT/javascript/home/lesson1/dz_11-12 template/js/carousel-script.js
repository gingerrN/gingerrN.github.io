(function($) { 
	$.fn.mySimplePlugin = function(){
    	var leftArrow = $('.arrow_left');
    	var rightArrow = $('.arrow_right');
 		var hiderCarousel = $('.hider__carousel');
 
    	var pixelsOffset = 695;
    	var currentLeftValue = 0;

    	var elementsCount = hiderCarousel.find('li').length ;
    	var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    	var maximumOffset = 0;

    	leftArrow.hide(); /*стрелка лево - не видно*/
    	rightArrow.show(); /* стрелка право - видно*/

		/*стрелка лево*/
    	leftArrow.on('click', function() {
    		if (currentLeftValue != maximumOffset) {
    			currentLeftValue += 695;
       			hiderCarousel.animate({ left : currentLeftValue + "px"}, 500);
       			rightArrow.show();
       		}
       	 	else {
        		leftArrow.hide();
        	}
    	});
		/* стрелка право*/
    	rightArrow.on('click', function() {
    		console.log(currentLeftValue + ' ' + minimumOffset);
    		if (currentLeftValue != minimumOffset) {
    			currentLeftValue -= 695;
        		hiderCarousel.animate({ left : currentLeftValue + "px"}, 500);
        		leftArrow.show();
        	}
        	else {
        		rightArrow.hide();
        	}
    	});
    	return this;
  	};

})(jQuery);