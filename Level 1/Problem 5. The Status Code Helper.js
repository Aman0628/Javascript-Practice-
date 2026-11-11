// Problem 1: The Status Code Helper

// Create an arrow function named isSuccessStatus:

// It should accept one parameter: statusCode (a number).
// It should return true if statusCode is between 200 and 299 (inclusive).
// Otherwise, it should return false.

// Test it with:

// console.log(isSuccessStatus(200)); // Should print true
// console.log(isSuccessStatus(201)); // Should print true
// console.log(isSuccessStatus(404)); // Should print false
// console.log(isSuccessStatus(500)); // Should print false

const isSuccessStatus = ((statusCode) => {

    if (200 <= statusCode && statusCode <= 299) {
        return ("true")
    }
    else {
        return ("false")
    }

})
console.log(isSuccessStatus(200)); // Should print true
console.log(isSuccessStatus(201)); // Should print true
console.log(isSuccessStatus(404)); // Should print false
console.log(isSuccessStatus(500)); // Should print false



// In Problem 1: Booleans vs Strings

// You returned ("true") and ("false") inside quotes.

// "true" is a String (text).
// true (no quotes) is a real Boolean (true/false). In automation, if ("false") actually evaluates to truthy because non-empty strings are considered true in JS! Here is how an SDET writes it cleanly:
// javascript
// const isSuccessStatus = (statusCode) => {
//     // Condition already evaluates to true or false, so return it directly!
//     return statusCode >= 200 && statusCode <= 299;
// };