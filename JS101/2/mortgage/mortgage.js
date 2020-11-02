const readline = require("readline-sync");
const MESSAGES = require("./mortgage_messages.json");

const prompt = (message) => console.log(`=> ${message}`);
const isInvalidNumber = (number) => {
  return number.trimStart() === "" || Number.isNaN(Number(number));
};

console.clear();
prompt(MESSAGES.welcome);

prompt(MESSAGES.loanAmount);
let loanAmount = readline.question("");
while (isInvalidNumber(loanAmount)) {
  prompt(MESSAGES.invalidNumber);
  loanAmount = readline.question();
}

prompt(MESSAGES.APRInput);
let percentageRate = readline.question();
while (isInvalidNumber(percentageRate)) {
  prompt(MESSAGES.invalidNumber);
  percentageRate = readline.question();
}

prompt(MESSAGES.loanDuration);
let loanDuration = readline.question();
while (isInvalidNumber(loanDuration) || loanDuration <= 0) {
  prompt(MESSAGES.invalidNumber);
  loanDuration = readline.question();
}

let annualPercentageRate = Number(percentageRate) / 100;
let monthlyPercentageRate = Number(annualPercentageRate) / 12;
let monthDuration = Number(loanDuration) * 12;
loanAmount = Number(loanAmount);

let result =
  loanAmount *
  (monthlyPercentageRate /
    (1 - Math.pow(1 + monthlyPercentageRate, -Number(monthDuration))));

prompt(`Monthly Payments: $${result.toFixed(2)}`);
// Input validation
// Convert everything to a number below
