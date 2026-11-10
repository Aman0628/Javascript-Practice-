// Problem 2: The Login Button Validator

// In a test, the "Submit" button should only be clickable if:

// isUsernameFilled is true
// AND isPasswordFilled is true
// AND isTermsCheckboxChecked is true
// Create these three variables with boolean values (true or false).
// Write an if / else condition:
// If all conditions are satisfied, print: "Login button is clickable"
// Otherwise, print: "Login button is disabled. Please complete all fields."
// Try changing one variable to false and verify the output.


const isUsernameFilled = true ;
const isPasswordFilled = true ;
const isTermsCheckboxChecked = false;

if (isUsernameFilled && isPasswordFilled && isTermsCheckboxChecked) {
    console.log("Login button is clickable")
}
else {
    console.log("Login button is disabled. Please complete all fields.")
}