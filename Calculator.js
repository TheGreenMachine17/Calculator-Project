//These two lines have to be separate to work
//var txt = document.getElementById("numbers");
//var theTxt = txt.value;


//[name].value CANNOT be a variable, declare a different variable and then assign the [name].value to it
var ans;
function clearButton() {
	var txt = document.getElementById("numbers").value = "";
	txt.value = "";
	ans = 0;
	console.log(ans);
	

}

function decimalButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	//we need to convert the string into a decimal here
}

function zeroButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);

	
}

function oneButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function twoButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function threeButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function fourButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function fiveButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function sixButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function sevenButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
	
}

function eightButton(number) {
	var txt = document.getElementById("numbers");
	//txt.value = "";
	txt.value = txt.value + "" + number;
	var theNumber = parseFloat(txt);

}

function nineButton(number) {
	var txt = document.getElementById("numbers").value;
	//txt.value = "";
	txt.value = txt.value + "" + number;
	var theNumber = parseFloat(txt);
	
}

/*******************************************/



//Operators

function addition(numbers) {
	ans = parseFloat(numbers);
	var txt = document.getElementById("numbers");
	txt.value = "";
	console.log(ans);
	document.getElementById("equal").addEventListener("click", equalAddition);
}

function equalAddition()
{
	var txt = document.getElementById("numbers");
	var number = parseFloat(txt.value);
	ans = ans + number;
	txt.value = ans;
	console.log("equalAddition " + ans);
	document.getElementById("equal").removeEventListener("click", equalAddition);
}
	
	function multiplication(numbers) {
		ans = parseFloat(numbers);
		var txt = document.getElementById("numbers");
		txt.value = "";
		console.log(ans);
		document.getElementById("equal").addEventListener("click", equalMultiplication);
	}
	
	function equalMultiplication()
	{
		var txt = document.getElementById("numbers");
		var number = parseFloat(txt.value);
		ans = ans * number;
		txt.value = ans;
		console.log("equalMultiplication " + ans);
		document.getElementById("equal").removeEventListener("click", equalMultiplication);
	}

function subtraction(numbers) {
	ans = parseFloat(numbers);
	var txt = document.getElementById("numbers");
	txt.value = "";
	console.log(ans);
	document.getElementById("equal").addEventListener("click", equalSubtraction);
}

function equalSubtraction()
{
	var txt = document.getElementById("numbers");
	var number = parseFloat(txt.value);
	ans = ans - number;
	txt.value = ans;
	console.log("equalSubtraction " + ans);
	document.getElementById("equal").removeEventListener("click", equalSubtraction);
}

function division(numbers) {
	ans = parseFloat(numbers);
	var txt = document.getElementById("numbers");
	txt.value = "";
	console.log(ans);
	document.getElementById("equal").addEventListener("click", equalDivision);
}

function equalDivision()
{
	var txt = document.getElementById("numbers");
	var number = parseFloat(txt.value);

	if(number == 0) 
	{
		txt.value = "Error";
		ans = 0;
	}

	else
	{
		ans = ans / number;
		txt.value = ans;
	}
	console.log("equalDivision " + ans);
	document.getElementById("equal").removeEventListener("click", equalDivision);
}
