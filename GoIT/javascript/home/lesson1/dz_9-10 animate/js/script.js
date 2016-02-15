$(document).ready(function() {

$(".one__logo").mouseenter(
	  function () {
	    $(this).animate({
	        color:"#9906d7",
	    }, 500 );
	});
	 
	$(".one__logo").mouseleave(function() {
	    $(this).animate({
	        color:"#1a4dc2",
	    }, 500 );
	});

});