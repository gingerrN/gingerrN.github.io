/* Создать объект с методами, 
которые будут динамически генерировать DOM вот такой страницы. 
Это будет тест, который мы будем разрабатывать в следующих заданиях.
Сейчас вам нужно только динамически создать html,
методы должны храниться в одном объекте. 
Для того чтоб страница выглядела красиво можете использовать 
Bootstrap и создавать DOM-элементы с готовыми бутстраповскими классами. 
Изначально на странице должен быть только <body>,
вызывая методы объекта нужно создать dom-элементы */


// parent     myParent	
// создаваемый элемент   newTagName
// задали класс элементу					   
// text    newTagName
//newType type for form, input

var myTest = {
		//универсальный метод ф-ция
	createAnyElement : function (myParent, newTagName, newClass, newText) {
		var mainParent = document.getElementsByTagName(myParent)[0];
		var mainElement = document.createElement(newTagName);
		mainElement.classList.add(newClass);
		mainElement.innerHTML = newText;
		mainParent.appendChild(mainElement);
	},
	// метод ф-ция для input
	createElementForLabel : function (myParent, newTagName, newClass, newText, newType) {
		var mainParent = document.getElementsByTagName(myParent)[document.getElementsByTagName(myParent).length - 1];
		var mainElement = document.createElement(newTagName);
		mainElement.classList.add(newClass);
		mainElement.innerHTML = newText;
		mainElement.setAttribute('type', newType);
		mainParent.appendChild(mainElement);
	}
}

myTest.createAnyElement('body', 'div', 'container', '');
myTest.createAnyElement('div', 'h2', 'text-uppercase', 'Тест по программированию');
myTest.createAnyElement('div', 'form', 'myForm', '');

for (var i = 1; i <= 3; i++) {
	myTest.createAnyElement('form', 'h3', 'formTitle', i + '. Вопрос № '+ i);
	for (var j = 1; j <= 3; j++) {
		myTest.createAnyElement('form', 'div', 'checkbox', '');
		myTest.createElementForLabel('div', 'label', 'answer'+ j, '');
		myTest.createElementForLabel('label', 'input', 'namecheckbox', '', 'checkbox');
		myTest.createElementForLabel('label', 'span', 'bbb', 'Вариант ответа № '+ j + '<br>');
	}
}
myTest.createElementForLabel('form', 'button', 'btn', 'Проверить мои результаты', 'submit');