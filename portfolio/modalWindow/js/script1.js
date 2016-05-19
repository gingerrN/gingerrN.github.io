'use strict';
$(function() {
    /*тест 1*/
	var contentName_1 =
    {
        nameFor : 'Тест ',
        itemName1 : '1. Назовите спутник Земли (1 вариант ответа)',
        ansName11  : 'Фобос',
        ansName12  : 'Луна',
        ansName13  : 'Титан',
        isCorrect11 : 'isCorrect0',
        isCorrect12 : 'isCorrect1',
        isCorrect13 : 'isCorrect0',
        itemName2 : '2. Назовите спутники Марса (2 варианта ответа)',
        ansName21  : 'Рея',
        ansName22  : 'Фобос',
        ansName23  : 'Деймос',
        isCorrect21 : 'isCorrect0',
        isCorrect22 : 'isCorrect1',
        isCorrect23 : 'isCorrect1',
        itemName3 : '3. Назовите спутники Венеры (1 вариант ответа)',
        ansName31  : 'Ио',
        ansName32  : 'Пандора',
        ansName33  : 'Нет спутников',
        isCorrect31 : 'isCorrect0',
        isCorrect32 : 'isCorrect0',
        isCorrect33 : 'isCorrect1',
        btnName : 'Проверить мои результаты',

    };
    localStorage.setItem('myContent_1', JSON.stringify(contentName_1));
    var testContent_1 = localStorage.getItem('myContent_1');
    testContent_1 = JSON.parse(testContent_1);
    console.log(testContent_1);

 /*task  Micro-Templating*/
    var htmlTempl_1 = $('#testList_1').html();
    contentName_1;

    var myResult_1 = tmpl(htmlTempl_1, contentName_1);
    $('.container__test_1').append(myResult_1);

/*количество правильных ответов в варианте*/
    $('.namecheckbox_1').on('change', function() {
        if($('.namecheckbox_1:checked').length > 1) {
        this.checked = false;
        }
    });
    $('.namecheckbox_3').on('change', function() {
        if($('.namecheckbox_3:checked').length > 1) {
        this.checked = false;
        }
    });
    $('.namecheckbox_2').on('change', function() {
        if($('.namecheckbox_2:checked').length > 2) {
        this.checked = false;
        }
    });
/*счет правильных ответов */
    var correctOption = 0;
    var wrongOption = 0;

function answerCalculator(){
    $("input[name='forCounter']").each(function(){
        if ($(this).hasClass("isCorrect1") && this.checked) { //  $(this).is(":checked")
            correctOption++;
        } else if ($(this).hasClass("isCorrect0") && this.checked){
            wrongOption++;  
        }
    console.log('wrongOption', wrongOption);
    console.log('correctOption', correctOption); 

    });
};
/* для методов showModal  hideModal */
		var $overlayWindow;    /* затеняющий блок */
    	var $windowResult;     /* блок результаты теста*/
    	var $resultClose;      /* кнопка закрыть  блоки */
    	var $resultHead;       /* заголок  блока */
        var $allAnswer;        /* блок результаты теста*/
        var $answerCorrect;    /* правильные ответы*/
        var $answerWrong;      /* неправильные ответы*/
        var $answerConference; /* совет по результату*/

/* кнопка button class="btn" - открыть modalWindow */
    $('#btnId').on('click', answerCalculator);
	$('#btnId').on('click', showModal); 

/* метод showModa  открыть modalWindow */
    function showModal(e) {
    	e.preventDefault();
		
    	$overlayWindow      = $('<div class="modalWindow__overlay">');
    	$windowResult       = $('<div class="container__modalWindow">');
    	$resultClose        = $('<button type="button" class="modalWindow__close" id="modalId">X</button>');
    	$resultHead         = $('<h2 class="modalWindow__head text-uppercase">Результаты теста:</h2>');
        $allAnswer          = $('<div class="modalWindow__answer">Из 4 баллов Вы набрали:</div>');
        $answerCorrect      = $('<p class="answer__correct">');
        $answerWrong        = $('<p class="answer__wrong">');
        $answerConference   = $('<p class="answer__сonference">');

    	$('.container').append($overlayWindow);
    	$('.container').append($windowResult);
    	$('.container__modalWindow').append($resultClose);
    	$('.container__modalWindow').append($resultHead);
        $('.container__modalWindow').append($allAnswer);
        $('.modalWindow__answer').append($answerCorrect);
        $('.modalWindow__answer').append($answerWrong);
        $('.modalWindow__answer').append($answerConference);

        $('.answer__correct').html('правильных ответов: '+ correctOption + 'б');
        $('.answer__wrong').html('неправильных ответов:  '+ wrongOption);


        if (correctOption >= 0 && correctOption < 2) {
             $('.answer__сonference').html('Не отчаивайтесь! Попробуйте еще раз. ');
        } else if (correctOption >= 2 && correctOption < 4) {
             $('.answer__сonference').html('Неплохо))) Можно попробовать еще разок! ');
        } else if (correctOption == 4 ) {
             $('.answer__сonference').html('Отлично! Вы - астроном!!! ');
        };
      
      
/* кнопка button class="modalWindow__close" - закрыть modalWindow */
		$('#modalId').on('click', hideModal);
    };
/* метод hideModal  закрыть modalWindow */
	function hideModal() {
		$overlayWindow.hide();
    	$windowResult.hide();
        location.reload();
	};




/*тест 2*/
    var contentName_2 =
    {
        name : 'Тест по программированию:',
        itemName : ' Вопрос №',
        ansName  : 'Вариант ответа № '
    };
    localStorage.setItem('myContent_2', JSON.stringify(contentName_2));
    var testContent_2 = localStorage.getItem('myContent_2');
    testContent_2 = JSON.parse(testContent_2);

/*task  Micro-Templating*/
    var htmlTempl_2 = $('#testList_2').html();
    contentName_2;

    var myResult_2 = tmpl(htmlTempl_2, contentName_2);
    $('.container__test_2').append(myResult_2);
});

