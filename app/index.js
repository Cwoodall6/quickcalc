var keys = document.querySelectorAll('#calc span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdd = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {

		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		if(btnVal == 'AC') {
			input.innerHTML = '';
			decimalAdd = false;
		} else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			if(operators.indexOf(lastVal) > -1 || lastVal == '.')
				equation = equation.replace(/.$/, '');

			if(equation)
				input.innerHTML = eval(equation);
			decimalAdd = false;
		} else if(operators.indexOf(btnVal) > -1) {
			var lastVal = inputVal[inputVal.length - 1];

			if (inputVal != '' && operators.indexOf(lastVal) == -1) {
				input.innerHTML += btnVal;
			} else if(inputVal == '' && btnVal == '-') {
				input.innerHTML += btnVal;
			}

			if(operators.indexOf(lastVal) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}

			decimalAdd =false;
		} else if(btnVal == '.') {
			if(!decimalAdd) {
				input.innerHTML += btnVal;
				decimalAdd = true;
			}
		} else {
			input.innerHTML += btnVal;
		}
		e.preventDefault();
	}
}
