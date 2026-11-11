// Problem 2: Filtering Flaky Tests

// You ran 6 tests. Their execution times in seconds are:

// javascript
// const testDurations = [2, 15, 4, 25, 8, 30]; // seconds

// Use .filter() to create a new array called longRunningTests that only contains tests that took more than 10 seconds. Print longRunningTests

const testDurations = [2, 15, 4, 25, 8, 30]; 

const longRunningTests = testDurations.filter((time) => time > 10)
console.log(longRunningTests)