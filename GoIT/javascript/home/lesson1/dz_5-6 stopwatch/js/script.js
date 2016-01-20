//find start  Button 
var startButton = document.getElementsByClassName('btn-success')[0];
//find clear  Button 
var clearButton = document.getElementsByClassName('btn-danger')[0];
//кнопка старт-стоп
var toggleBtn   = document.getElementsByClassName('startstop')[0];


//find all figures
var startHour        = document.getElementsByClassName('figures__hour')[0];
var startMinute      = document.getElementsByClassName('figures__minute')[0];
var startSecond      = document.getElementsByClassName('figures__second')[0];
var startMillisecond = document.getElementsByClassName('figures__millisecond')[0];
/*console.log(startMillisecond.innerHTML);*/



//Переменные для таймера
var millisecondAll = 0;
var timerId; //Объявляю айди счетчика в глобальном скоупе

//Функции для таймера
function countdown() {
	timerId = setInterval(function(){
		millisecondAll++;
		/*console.log('millisecondAll ', millisecondAll);*/	
	humanTime();
	}, 50);
}

function stopCounter() {
	clearInterval(timerId);
	console.log('Остановка, таймер сохраняется');
	console.log(millisecondAll);
}

function clearCounter() {
	var toggleBtnClasses = toggleBtn.classList;
	clearInterval(timerId);
	millisecondAll   = 0;
	humanMillisecond = '000';
	humanSecond      = '00';
	humanMinute      = '00';
	humanHour        = '00';
	console.log('Очистка, таймер очищается');
	console.log(millisecondAll);
	if (toggleBtnClasses.contains('btn-warning')) {
		toggleBtnClasses.remove('btn-warning');			//убрала желтый цвет
		toggleBtnClasses.add('btn-success');			//добавила зеленый цвет
		toggleBtn.innerHTML = 'Start';					//меняется Pause на Stop 
	}
	//обнуляю время
	startHour.innerHTML        = '00';
	startMinute.innerHTML      = '00';
	startSecond.innerHTML      = '00';
	startMillisecond.innerHTML = '000';
}

//Функция для кнопки старт/пауза 
// получить список всех классов, при клике на старт менять на паузу и наоборот 
var toggleBtnClasses = toggleBtn.classList;
function toggleClassStartPause(){
	console.log(toggleBtn);
	
	if (toggleBtnClasses.contains('btn-success')){		//если кнопка зеленая
		console.log('btn-success');						
		toggleBtnClasses.remove('btn-success');			//убрала зеленый цвет
		toggleBtnClasses.add('btn-warning');			//поставила желтый цвет
		toggleBtn.innerHTML = 'Pause';					//меняется Stop на Pause
		countdown();									//запустила отчет				
	}
	else {												//если кнока желтая
		console.log('btn-warning');						
		toggleBtnClasses.remove('btn-warning');			//убрала желтый цвет
		toggleBtnClasses.add('btn-success');			//добавла зеленый цвет
		toggleBtn.innerHTML = 'Start';					//меняется Pause на Stop 
		stopCounter();									//пауза таймер
	
		
	}
}


//Вызываю функции
toggleBtn.addEventListener('click', toggleClassStartPause); // call f-tion the origin
clearButton.addEventListener('click', clearCounter);
//var timerMillisecond = setInterval(countdown, 500);
	var humanMillisecond = '000';
	var humanSecond      = '00';
	var humanMinute      = '00';
	var humanHour        = '00';
function humanTime(){
	//startMillisecond
	
	if (millisecondAll <= 9){
		humanMillisecond = '00' + millisecondAll;
	}
	else if (millisecondAll <= 99){
		humanMillisecond = '0' + millisecondAll;
	} else {
		humanMillisecond = millisecondAll;
	}
//console.log('humanMillisecond: ', humanMillisecond );
//startSecond
	if ( humanMillisecond > 999){
		humanSecond++;
		millisecondAll = 0;
			if (humanSecond <= 9){
			humanSecond = '0' + humanSecond;
		}
	}

	if ( humanSecond > 59){
		humanMinute++;
		humanSecond = '00';
			if (humanMinute <= 9){
			humanMinute = '0' + humanMinute;
		}
	}

	if ( humanMinute > 59){
		humanHour++;
		humanMinute = '00';
			if (humanHour <= 9){
			humanHour = '0' + humanHour;
		}
	}

startMillisecond.innerHTML = humanMillisecond;
startSecond.innerHTML = humanSecond;
startMinute.innerHTML = humanMinute;
startHour.innerHTML = humanHour;
}