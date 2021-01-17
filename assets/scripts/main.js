var a = 0;
var b = 0;
var s = '';

Start();

function Start() {
	document.getElementById('js-answer').innerHTML = 0;
}

function Add(x) {
	a = a + x;
	a = Number(a);
	console.log(a);
	showAnswer();
}

function Task(argument) {
	b = a;
	a = 0;
	console.log(a);
	showAnswer();
	s = argument;
}

function Total() {
	if( s === '+') {
		a = a + b;
		showAnswer();
	} if( s === '-') {
		a = b - a;
		showAnswer();
	} if( s === '*') {
		a = a * b;
		showAnswer();
	} if( s === '/') {
		if(a == 0) {
			alert('You can`t do it')
			// a = '<a src="https://elementy.ru/email/1530320/Pochemu_nelzya_delit_na_nol#:~:text=%D0%A2%D0%B0%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D0%B8%D1%81%D0%BB%D0%B0%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B5%20%D0%BF%D1%80%D0%B8%20%D1%83%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8,%D0%BA%D1%80%D0%BE%D0%BC%D0%B5%20%D0%BD%D1%83%D0%BB%D1%8F%2C%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%20%D0%BD%D0%B5%20%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D1%83%D0%B5%D1%82.&text=%D0%90%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B8%D1%82%2C%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B8%205%20%3A%200,%D1%87%D1%82%D0%BE%20%D0%BD%D0%B0%20%D0%BD%D0%BE%D0%BB%D1%8C%20%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B5%D0%BB%D1%8C%D0%B7%D1%8F.">Tap me</a>';
			// document.getElementById('js-answer').innerHTML = a;
		} else {
			a = b / a;
			showAnswer();
		}	
	} if(s === '') {
		showAnswer();
	}
}

function showAnswer() {
	document.getElementById('js-answer').innerHTML = Number(a);
}

function Clear() {
	a = '';
	showAnswer();
	Start();
}