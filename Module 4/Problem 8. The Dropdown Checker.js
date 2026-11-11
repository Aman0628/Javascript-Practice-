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