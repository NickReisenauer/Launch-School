const readline = require("readline-sync");
const MESSAGES = require("./mortgage_messages.json");

const MONTHS = 12;

const prompt = (message) => console.log(`-> ${message}`);

const isInvalidNumber = (number) => {
  return (
    number.trimStart() === "" || Number.isNaN(Number(number)) || number < 1
  );
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

  prompt(MESSAGES.loanAmount);
  let loanAmount = readline.question("$");
  while (isInvalidNumber(loanAmount)) {
    prompt(MESSAGES.invalidNumber);
    loanAmount = readline.question("$");
  }

  prompt(MESSAGES.APRInput);
  let percentageRate = readline.question();
  while (isInvalidNumber(percentageRate)) {
    prompt(MESSAGES.invalidNumber);
    percentageRate = readline.question();
  }

  prompt(MESSAGES.loanDuration);
  let loanDuration = readline.question();
  while (isInvalidNumber(loanDuration)) {
    prompt(MESSAGES.invalidNumber);
    loanDuration = readline.question();
  }

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

  let playAgain = anotherCalculation();
  if (playAgain === "n") break;
}
