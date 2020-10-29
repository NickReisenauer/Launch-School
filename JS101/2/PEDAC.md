# PEDAC

## Understanding the Problem

- Input:
  String(number), string(number), string(number)

- Output:
  String

- Rules / Requirements:
  Ask the user for the first number.
  Ask the user for the second number.
  Ask the user for an operation to perform.
  Perform the operation on the two numbers.
  Print the result to the terminal.

- Mental Model:
  Ask the user for their numbers, and then ask for which operation they'd like to perform, then perform their operations.

## Test Cases / Examples

5,3, addition => 8
4,7, multiply => 28
5,1, divide => 5

## Data Structures

- String=>Number
  Input
- If
  Checking input
- String
  Output

## Algorithm

Using readlineSync, get the user's two numbers as well as which operation they'd like to perform, then using if or switch determine their output.

## Code

```js
const readline = require("readline-sync");

console.log("Welcome to Calculator!");

console.log("What's the first number?");
const number1 = Number(readline.question());

console.log("What's the second number?");
const number2 = Number(readline.question());

console.log(
  "What operation would you like to perform?\n1: Add 2: Subtract 3: Multiply 4: Divide"
);
const operation = readline.question();

let output;
if (operation === "1") output = number1 + number2;
else if (operation === "2") output = number1 - number2;
else if (operation === "3") output = number1 * number2;
else if (operation === "4") output = number1 / number2;

console.log(`The result is: ${output}`);
```
