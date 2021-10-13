var count = 0;

document.getElementById("button").addEventListener("click", function() {
	count++;
	document.getElementById("button").innerHTML = "Clicked " + count;
}); 


document.getElementById("convert").addEventListener("click", function() {
	var num = parseFloat(document.getElementById("rands").value);
	document.getElementById("dollars").innerHTML = Math.round(num * 0.067) + " dollars<br>";
	document.getElementById("euros").innerHTML = Math.round(num * 0.058) + " euros<br>";
	document.getElementById("pounds").innerHTML = Math.round(num * 0.049) + " pounds<br>";
}); 


//Create Select elements 
function createOptions()
{
	select = document.getElementById('elements');

	var n = 25;
	for (var i = 1; i<=n; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = "Option " + i;
		select.appendChild(opt);
		}
}

createOptions();

//Calculater code
var the_result = document.getElementById("equals");
function Add(value)
{
	the_result.value += value;
}

function calc()
{
	the_result.value = eval(the_result.value);
}

function clearit()
{
	the_result.value = "";
}




