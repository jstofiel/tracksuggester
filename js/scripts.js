// unit logic

var number1 = 2;
var number2 = 3;

var addition = function(num1, num2) {
  return sum(num1, num2);
}

var number3 = addition(number1, number2);

// integration logic

$document.ready(function() {
  $('h1').text(number3);
});
