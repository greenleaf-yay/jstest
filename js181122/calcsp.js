

var calc = require('./calc');       // require, .=현재위치, ./calc=현재위치의 calc를 불러와라, ex) ./Mod/calcsp

console.log("Result : %d", calc.add(3,3));
console.log("Result : %d", calc.subtract(3,3));
console.log("Result : %d", calc.multiply(3,3));
console.log("Result : %d", calc.divide(3,3));

