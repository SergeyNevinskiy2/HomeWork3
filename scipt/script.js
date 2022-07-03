'use strict';

const num1 = +prompt('Enter number');
const num2 = +prompt('Enter number');

function sum() {
   const result = num1 + num2;
   console.log(`${num1} + ${num2} = ${result}`)
}
sum()

function sub() {
   const result = num1 - num2;
   console.log(`${num1} - ${num2} = ${result}`)
}
sub()

function div() {
   const result = num1 / num2;
   console.log(`${num1} / ${num2} = ${result}`)
}
div()

function mult() {
   const result = num1 * num2;
   console.log(`${num1} * ${num2} = ${result}`)
}
mult()
