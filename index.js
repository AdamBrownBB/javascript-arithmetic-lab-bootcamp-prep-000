function add (a, b) {
var result = (a + b)
  return result;
}

function subtract (a, b) {
var result = (a - b)
  return result;
}

function multiply (a, b) {
var result = (a * b)
  return result;
}

function divide (a, b) {
var result = (a / b)
  return result;
}

var number = 10
 
function add5() {
  number += 5
}
 
function divideBy3() {
  number /= 3
}
 
divideBy3()
 
console.log(number) // 3.333333333335
 
add5()
 
console.log(number) // 8.333333333335
 
// reset number
number = 10
 
add5()
 
console.log(number) // 15
 
divideBy3()
 
console.log(number) // 5