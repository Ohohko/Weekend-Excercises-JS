// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

const FandL = (name) => {
    const nameArr = name.split(" ");
    const first = nameArr[0][0].toUpperCase(); 
    const second = nameArr[1][0].toUpperCase();
    return `${first}.${second}`; 
}

//testing
console.log(FandL("Sam Harris"));
