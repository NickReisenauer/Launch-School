const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

const prompt = (message) => console.log(`${message}`);

const isInvalidNumber = (number) => {
  return number.trimStart() === "" || Number.isNaN(Number(number));
};

while (true) {
  console.clear();

  prompt(MESSAGES["en"].languageSelect);
  let language = readline.question().toLowerCase();

  while (language !== "en" && language !== "es") {
    prompt(MESSAGES["en"].languageSelect);
    language = readline.question();
  }

  prompt(MESSAGES[language].welcome);

  prompt(MESSAGES[language].firstNumber);
  let number1 = readline.question();

  while (isInvalidNumber(number1)) {
    prompt(MESSAGES[language].invalidNumber);
    number1 = readline.question();
  }

  prompt(MESSAGES[language].secondNumber);
  let number2 = readline.question();

  while (isInvalidNumber(number2)) {
    prompt(MESSAGES[language].invalidNumber);
    number2 = readline.question();
  }

  prompt(MESSAGES[language].operationType);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGES[language].invalidOperation);
    operation = readline.question();
  }

  let output;
  number1 = Number(number1);
  number2 = Number(number2);
  switch (operation) {
    case "1":
      output = number1 + number2;
      break;
    case "2":
      output = number1 - number2;
      break;
    case "3":
      output = number1 * number2;
      break;
    case "4":
      output = number1 / number2;
      break;
  }

  prompt(MESSAGES[language].result + output);

  prompt(MESSAGES[language].anotherCalculation);
  let decision = readline.question().toLowerCase();

  while (decision !== "n" && decision !== "y") {
    prompt(MESSAGES[language].invalidDecision);
    decision = readline.question().toLowerCase();
  }
  if (decision === "n") break;
}
