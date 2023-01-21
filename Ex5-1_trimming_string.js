// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.



// do it with slice

   const trimString = (str) => {
   return str.slice(1, -1);
}

//testing
console.log(trimString('hello world')); //'ello worl'
