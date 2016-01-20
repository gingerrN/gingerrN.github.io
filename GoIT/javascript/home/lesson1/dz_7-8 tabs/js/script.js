
$(function() {
	$(".product__description").hide();  					//скрыла
	$(".menu__link:first").addClass("active");				//добавила класс active для text-decoration: underline
	$(".product__description:first").show();  				//первый div показать
	$(".menu__link").on('click',function(e){				// по клику на ссылку
		e.preventDefault();
		$(".menu__link").removeClass("active"); 			// удалить класс active на первой ссылке
		var divId = $(this).attr('href');					//на ссылке click нашла href
		$(this).addClass("active");							//добавила ей класс active
		$(".product__description").hide();					//скрыла предыд.блок
		$(divId).fadeIn();									//показала выбран.блок
	});
});
