// You send a request in Playwright and get back an HTTP status code.

// Declare a variable statusCode = 404.
// Write an if / else if / else statement:
// If statusCode === 200, print: "Test Passed: Page Loaded"
// Else if statusCode === 404, print: "Test Failed: Page Not Found"
// Else if statusCode === 500, print: "Test Failed: Server Error"
// Else, print: "Test Inconclusive: Unknown Status"

const statusCode = 404 ;

if ( statusCode === 200 ){
    console.log("test Passed : Page loaded ")
}
else if ( statusCode === 404 ){
    console.log("Test Failed: Page Not Found")
}
else if (statusCode === 500 ){
    console.log("Test Failed: Server Error")
}
else {
    console.log("Test Inconclusive: Unknown Status")
}

