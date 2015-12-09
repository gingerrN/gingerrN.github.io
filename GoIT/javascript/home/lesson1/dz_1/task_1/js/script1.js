/* 1. Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. Указать число и степень пользователь должен через команду prompt. Результат выполнения функции вывести в консоль */


function pow() {
	var number = +prompt("Введите число");
	var expon = +prompt("Введите степень");
	var result = 1;
	for (var i = 0; i < expon; i++) {
		result = number * result;
		console.log('i= ', i);
		console.log('result= ', result);
	};
	console.log('answer= ', result);
}
pow();