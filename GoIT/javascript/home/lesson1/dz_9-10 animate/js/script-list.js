$(document).ready(function() {
	$("select").searchable();
	var myChoice = $("#myselect option:selected").text();
	$('#value').text(myChoice);
	$('#myselect').on('change', function(){
		myChoice = $("#myselect option:selected").text();
    	$('#value').text(myChoice);
    	var myImg = $("#myselect option:selected").attr('value');
    	$('.chooseImg__number').attr('src', 'img/'+myImg+'.jpg');
	});
});