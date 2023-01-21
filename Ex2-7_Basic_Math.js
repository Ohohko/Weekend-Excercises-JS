// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

/// using object with key values - also can use with switch statement
const basicOp = (op, val1, val2) => {
    const operations = {
        '+': (val1, val2) => val1 + val2,
        '-': (val1, val2) => val1 - val2,
        '*': (val1, val2) => val1 * val2,
        '/': (val1, val2) => val1 / val2
    }
    return operations.hasOwnProperty(op) ? operations[op](val1, val2) : 'Invalid operator';
}

//testing
console.log(basicOp('+',1,3));
//answer
//4
console.log(basicOp('-',100,5000));
//-4900

