$(function() {
/*accordion*/
    $( "#accordion" ).accordion({
    	heightStyle: "content"},
    	{icons: { "header": "ui-icon-plus" }
    	});
/*jcarousel*/
	$('.jcarousel')
        .jcarouselAutoscroll({
            interval: 2000,
            target: '+=1',
            autostart: true
        });
		$('.jcarousel').jcarousel({
    	wrap: 'both'
	});

});
