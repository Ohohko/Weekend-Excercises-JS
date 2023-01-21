// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.


// function findUniq(arr) {
//     return arr.filter(function(val) {
//       return arr.indexOf(val) === arr.lastIndexOf(val);
//     })[0];
//   }

// with arrow function
const findUniq = arr => arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val))[0];
//testing
console.log(findUniq([1,1,1,1,1,1,1,1,1,1,2,1,]));
//result 2 