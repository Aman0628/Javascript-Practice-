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
