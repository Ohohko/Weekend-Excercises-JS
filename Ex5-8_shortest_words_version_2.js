// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.


const longestWord = (string) => {
    let words = string.split(" ");
    let maxLength = Math.max(...words.map(word => word.length));
    return words.filter(word => word.length === maxLength);
}


console.log(longestWord('String will never be empty and you do not need to account for different data types.'));
console.log(longestWord("Hello World! How are you?"));
