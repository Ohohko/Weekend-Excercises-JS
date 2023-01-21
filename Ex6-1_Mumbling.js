// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-VWw-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z anda. .z.

const accum = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
    }
    return result.join('-');
  }



  //testing function
  console.log(accum('Ohad'));  //'O-Hh-Aaa-Dddd'