document.getElementById("eq1").addEventListener("click", function() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  
  result = num1 + num2;
  
  document.getElementById("ansSum").innerHTML = result;
}); 


document.getElementById("eq2").addEventListener("click", function() {
  var num1 = parseFloat(document.getElementById("num3").value);
  var num2 = parseFloat(document.getElementById("num4").value);
  
  result = num1 * num2;
  
  document.getElementById("ansMultiply").innerHTML = result;
}); 


document.getElementById("eq3").addEventListener("click", function() {
  var num1 = parseFloat(document.getElementById("num5").value);
  var num2 = parseFloat(document.getElementById("num6").value);
  
  result = num1 % num2;
  
  document.getElementById("ansMod").innerHTML = result;
}); 