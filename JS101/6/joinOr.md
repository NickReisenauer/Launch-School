# PEDAC

## Understanding the Problem

- Input:
  Array, string, string

- Output:
  String

- Rules / Requirements:
  The first string argument is the join delimiter
  The second string argument is the word we place between the second to last and last elements
  Defaults are ',' and 'or'
  If length is 1, return element
  If length is 2, don't use a delimiter and use the second string argument

- Clarifying Questions:

## Examples / Test Cases

```js
joinOr([1, 2, 3]); // => "1, 2, or 3"
joinOr([1, 2, 3], "; "); // => "1; 2; or 3"
joinOr([1, 2, 3], ", ", "and"); // => "1, 2, and 3"
joinOr([]); // => ""
joinOr([5]); // => "5"
joinOr([1, 2]); // => "1 or 2"
```

## Data Structures

- Array
- Strings
- Conditionals
- String interpolation
- Array methods

## Algorithm

Create a function `joinOr` that has 3 parameters.
Create default values for our parameters.
If the length is 0, return empty string.
If the length is 1, return single element.
If the length is 2, return with no separator but with last word between them.
If none of the above conditions are true, return each character separated by the separator and the last two separated by
the separator as well as the lastWord.
To do that, store the last element after splicing it, and set the last element to the lastWord value, then add the spliced value to the end.
Return the array joined with the interpolated values of our arguments as well as the last value added to the end.

## Code

```js
const joinOr = (arr, separator = ", ", lastWord = "or") => {
  if (!arr.length) return "";
  else if (arr.length === 1) return arr.join("");
  else if (arr.length === 2) return arr.join(` ${lastWord} `);

  let lastValue = arr.splice(arr.length - 1, 1);
  return arr.join(separator) + `${separator}${lastWord} ${lastValue}`;
};
```
