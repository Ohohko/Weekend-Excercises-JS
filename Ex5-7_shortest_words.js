// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const wordShort = (str) => {
    const words = str.split(' ');
    words.sort((a, b) => a.length - b.length);
    return words[0].length;
  }

//testing
console.log(wordShort ('Hello World')); // 5