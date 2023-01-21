// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("moOse") ==false // -- ignore letter case

function isIsogram(str) {
    let characters = new Set();
    str = str.toLowerCase();
    for (let char of str) {
      if (characters.has(char)) {
        return false;
      }
      characters.add(char);
    }
    return true;
  }


  //testing
  console.log(isIsogram('aba')) //false
  console.log(isIsogram('abcDFGT0123'))  //true
