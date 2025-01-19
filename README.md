# MongoDB $toDouble in $expr: Handling null and non-numeric values
This repository demonstrates a common error when using the `$toDouble` operator within the `$expr` aggregation pipeline stage in MongoDB. The issue arises when attempting to convert a field to a double, but the field may contain non-numeric values or null.  This example showcases the error and its solution.

## Bug
The `bug.js` file contains a MongoDB query that attempts to use `$toDouble` to convert a field to a double and compare it to a value. If the field is null or not a number, the query throws an error.

## Solution
The `bugSolution.js` file demonstrates the solution by adding conditional checks using `$ifNull` and `$isNumber` to handle null and non-numeric cases gracefully.  This prevents the query from failing and provides more robust data handling.