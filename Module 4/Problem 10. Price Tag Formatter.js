// Problem 3: Price Tag Formatter

// In your Playwright test, you extracted a list of price numbers:

// javascript
// const prices = [10, 50, 100];

// Use .map() to convert each price into a formatted string with a dollar sign in front (e.g., ["$10", "$50", "$100"]). Store the result in formattedPrices and print it.


const prices = [10, 50, 100];

const updatedPrices = prices.map((price) => `$${price}`)
console.log(updatedPrices)