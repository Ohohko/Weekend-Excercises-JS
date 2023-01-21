// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toCamelCase = (str) => {
    return str.replace(/[-_](.)/g, (_, ch) => ch.toUpperCase());
}

//testing
console.log(toCamelCase("Hi-how-are-you-gorge"));   // 'HiHowAreYouGorge'
console.log(toCamelCase("Hi_how_are_you_gorge"));  // 'HiHowAreYouGorge'
