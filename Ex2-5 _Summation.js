// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//arrow function with reduce
const SUMMATION = num => Array.from({length:num},(_,i) => i + 1).reduce((acc, val) => acc + val,0);

//testing
console.log(SUMMATION(10));
//answer num(10) 1+2+3+4+5+6+7+8+9+10 = 55

