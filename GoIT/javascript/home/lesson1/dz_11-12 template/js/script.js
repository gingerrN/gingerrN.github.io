
$(function() {
	/*task 1 Carousel*/
    $('.arrow').mySimplePlugin();


    /*task 2 Micro-Templating*/
    var htmlTempl = $('#pictureCard').html();
    var inform = {
    	myName 	: 'Красновская Наталья Сергеевна',
    	myFace	: 'img/myFoto.png',
    	myGroup : 'Студентка GoIT курс Frontend (HTML,CSS,JavaScript)',
    	myCause : 'Хочу учить фронтенд, потому что:',
    	myList1	: 'Достойная оплата труда.',
		myList2	: 'Нравится сам процесс работы и то, что сразу видно результат.',
		myList3	: 'Чувствую, что это моя сфера деятельности (на других должностях такой уверенности не было).',
		myTel 	: 'Мой контактный телефон:',
		myNmb 	: '+38(050)-95-59-881'
    };

    var contentMain = tmpl(htmlTempl, inform);
    $('.wrapper__template').append(contentMain);



/*task */
var htmlMy = $('#helpU').html();
var paragraph = [
    	{
    		myList: 'Достойная оплата труда.'
    	},
    	{
    		myList: 'Нравится сам процесс работы и то, что сразу видно результат.'
    	},
    	{
    		myList: 'Чувствую, что это моя сфера деятельности (на других должностях такой уверенности не было).'
    	}
    ];
 var contentList = tmpl( htmlMy, { plist : paragraph} );
  $('.wrapper3').append(contentList);
});

