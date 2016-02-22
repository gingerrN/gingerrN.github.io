jQuery(document).ready(function() {

	jQuery(".one__logo").mouseenter(
	  	function () {
	    	jQuery(this).animate({
	        color:"#03e1fb"
	    	}, 800 );
		}
	);
	 
	jQuery(".one__logo").mouseleave(function() {
		    jQuery(this).animate({
		        color:"#1a4dc2"
		    }, 800 );
		}
	);

});