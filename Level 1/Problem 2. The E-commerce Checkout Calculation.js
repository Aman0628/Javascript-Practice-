// Problem 2: The E-commerce Checkout Calculation

// You are testing an e-commerce checkout page:

// Create a variable itemPrice with a value of 120.
// Create a variable shippingFee with a value of 15.
// Create a variable discount with a value of 20.
// Calculate finalAmount = (itemPrice + shippingFee) - discount.
// Print: "The total cart value is $115" using a template literal (backticks `).


const itemPrice = 120;
const shippingFee = 15;
const discount = 20;
const finalAmount = ( itemPrice + shippingFee) - discount;
console.log(`The total cart value is $${finalAmount}`);