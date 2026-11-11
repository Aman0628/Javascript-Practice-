// Problem 1: The Dropdown Checker

// You have an array of dropdown options scraped from a settings page:

// javascript
// const options = ["Account", "Security", "Notifications", "Billing"];
// Check if "Billing" is in the list using .includes(). If yes, print "Option found", else "Option missing".
// Add a new option "Privacy" to the end of the array using .push().
// Print the total count of options using .length.

const options = ["Account", "Security", "Notifications", "Billing"];

if (options.includes("Billing")) {
    console.log("Option found")
}
else {
    console.log("Option missing")
}

const newOptions = options.push("Privacy")

console.log( newOptions )


// If you ran this in the console, you noticed it printed: 5 (a number), not the array!

// Why?

// In JavaScript, options.push("Privacy") changes the options array directly in-place.
// What does .push() hand back (return)? The new total length of the array!

// Here is how you do it properly:

// javascript
// options.push("Privacy"); // Just add it to the original array!
// console.log(options);    // ["Account", "Security", "Notifications", "Billing", "Privacy"]
// console.log(options.length)