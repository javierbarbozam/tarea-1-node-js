let rs = require('readline-sync');
// import rs from 'readline-sync';

const num1 = parseInt(rs.question("give first number "));
const num2 = parseInt(rs.question("give second number "));

console.log("result is: ", num1 + num2)