// Write a function called add7 that takes one number and returns that number + 7.

function add7(input) {
    return input += 7;
};

console.log(add7(3));


// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(num1, num2) {
    return total = num1 * num2;
};

console.log(multiply(3, 5));


// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
};

console.log(capitalize('john'));


// Write a function called lastLetter that takes a string and returns the very last letter of that string:
//  lastLetter("abcd") should return "d"

function lastLetter(input) {
    return input.charAt(input.length - 1)
};

console.log(lastLetter('John'));