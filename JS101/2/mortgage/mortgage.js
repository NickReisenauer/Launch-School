const readline = require("readline-sync");
const MESSAGES = require("./mortgage_messages.json");

const MONTHS = 12;

const prompt = (message) => console.log(`-> ${message}`);

const isInvalidNumber = (number) => {
  return (
    number.trimStart() === "" || Number.isNaN(Number(number)) || number < 0
  );
};

const isInvalidDuration = (number) => {
  let num = Number(number);
  return !Number.isInteger(num);
};

const retrieveInput = (message, inputCheck, errorMessage) => {
  prompt(message);
  let input = readline.question();
  while (inputCheck(input)) {
    prompt(errorMessage);
    input = readline.question();
  }
  return input;
};

const retrieveDurationInput = (
  message,
  numberCheck,
  durationCheck,
  errorMessage
) => {
  prompt(message);
  let input = readline.question();
  while (numberCheck(input) || durationCheck(input)) {
    prompt(errorMessage);
    input = readline.question();
  }
  return input;
};

const calculateResult = (loanAmount, monthlyPercentageRate, monthDuration) => {
  return (
    loanAmount *
    (monthlyPercentageRate /
      (1 - Math.pow(1 + monthlyPercentageRate, -Number(monthDuration))))
  );
};

const formatDollarResult = (result) => {
  return Number(result.toFixed(2)).toLocaleString();
};

const logResult = (monthDuration, result) => {
  return console.log(
    `-> Monthly Payments:\nOver ${monthDuration.toLocaleString()} months, pay $${formatDollarResult(
      result
    )} per month`
  );
};

const anotherCalculation = () => {
  console.log("\n");
  prompt(MESSAGES.anotherCalculation);
  let decision = readline.question().toLowerCase();

  while (decision !== "n" && decision !== "y") {
    prompt(MESSAGES.invalidDecision);
    decision = readline.question().toLowerCase();
  }
  if (decision === "n") {
    prompt(MESSAGES.goodbye);
    return "n";
  }
  return "y";
};

while (true) {
  console.clear();
  prompt(MESSAGES.welcome);

  let loanAmount = retrieveInput(
    MESSAGES.loanAmount,
    isInvalidNumber,
    MESSAGES.invalidNumber
  );

  let percentageRate = retrieveInput(
    MESSAGES.APRInput,
    isInvalidNumber,
    MESSAGES.invalidNumber
  );

  let loanDuration = retrieveDurationInput(
    MESSAGES.loanDuration,
    isInvalidNumber,
    isInvalidDuration,
    MESSAGES.invalidDuration
  );

  let annualPercentageRate = Number(percentageRate) / 100;
  let monthlyPercentageRate = Number(annualPercentageRate) / MONTHS;
  let monthDuration = Number(loanDuration) * MONTHS;
  loanAmount = Number(loanAmount);

  let result = calculateResult(
    loanAmount,
    monthlyPercentageRate,
    monthDuration
  );

  console.log("\n");
  logResult(monthDuration, result);

  if (anotherCalculation() === "n") break;
}
