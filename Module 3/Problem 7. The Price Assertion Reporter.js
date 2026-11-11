// Problem 3: The Price Assertion Reporter

// Write a function validateCartTotal(itemPrice, quantity, expectedTotal):

// Calculate actualTotal = itemPrice * quantity.
// If actualTotal === expectedTotal, return "PASS: Cart total is correct".
// If they don't match, return "FAIL: Expected <expectedTotal>, but got <actualTotal>".

// Test it with:

// console.log(validateCartTotal(50, 2, 100)); // "PASS: Cart total is correct"
// console.log(validateCartTotal(50, 2, 90));  // "FAIL: Expected 90, but got 100"

let actualTotal = 0;
const validateCartTotal = (itemPrice, quantity, expectedTotal) => {

    actualTotal = itemPrice * quantity

    if ( actualTotal === expectedTotal ) {
    console.log(`"PASS: Cart total is correct"`)
}
else {
    console.log(`"FAIL: Expected ${expectedTotal}, but got ${actualTotal}"`)
}
}
console.log(validateCartTotal(50, 2, 100)); // "PASS: Cart total is correct"
console.log(validateCartTotal(50, 2, 90));  // "FAIL: Expected 90, but got 100"



//  In Problem 3: return vs console.log & Variable Scope

// In your code, because validateCartTotal didn't have a return, calling console.log(validateCartTotal(...)) ended up printing undefined at the end. Also, actualTotal should live inside the function so other tests don't accidentally mess with it:

// javascript
// const validateCartTotal = (itemPrice, quantity, expectedTotal) => {
//     const actualTotal = itemPrice * quantity; // local variable
    
//     if (actualTotal === expectedTotal) {
//         return "PASS: Cart total is correct";
//     } else {
//         return `FAIL: Expected ${expectedTotal}, but got ${actualTotal}`;
//     }
// };