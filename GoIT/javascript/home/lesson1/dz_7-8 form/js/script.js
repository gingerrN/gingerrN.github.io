
$( function() {
	$('.block__help').hide();		//скрыла подсказку
	$('.form__window').hover(
		function() {
			var $helpparent = $(this).parent();     //нашла родителя поля ввода и подсказки
			var $helpWindow = $helpparent.find('.block__help'); //нашла у родителя  подсказку
			$helpWindow.show();   //показала подсказку
		},
		function() {
			$('.block__help').hide(); //скрыла подсказку, которая показалась из-за пред.ф-ц
		}
	);
	$('.button__hint').on('click', function(e) {
		$('.block__help').toggle();  // hint вкл. выкл. подсказку
		e.preventDefault();
	});
});
