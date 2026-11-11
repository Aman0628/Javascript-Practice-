// Problem 2: The Element Locator Cleaner

// When Playwright extracts text from a web page, it often has unwanted messy spaces at the start or end (e.g., "   Login Successful   ").

// Create a function cleanText(rawText) that takes a string.
// It should trim off extra spaces (Hint: JavaScript strings have a built-in .trim() method!).
// It should convert the text to lowercase (Hint: .toLowerCase()).
// Return the cleaned string.


const cleanText = ( rawText ) => {
    return rawText;
}

const message = cleanText("    HeLLOOOO    ").trim().toLowerCase();

console.log(message);



// In Problem 2: Encapsulation (Hiding the work inside the function)

// You applied .trim().toLowerCase() outside the function. The whole purpose of writing helper functions is so that all the work happens inside the function, keeping your test files clean:

// javascript
// const cleanText = (rawText) => {
//     return rawText.trim().toLowerCase(); // Done inside!
// };
// console.log(cleanText("    HeLLOOOO    ")); // "helloooo"