# JavaScript Style

- Your text editor should use two spaces for tabs and indenting should be set to use spaces.

- When you see `//` in your code, that means that everything on the line that follows the `//` is a comment.

- JavaScript also supports multi-line comments that lets you write long-form comments spread over several lines. A multi-line comment starts with a `/*` sequence and ends when it finds a `*/` sequence. It's common to include one or two `*` characters at the beginning of each line between the `/*` and `*/` sequences. Multi-line comments may even appear in the middle of a line, but that's unusual and most likely bad style.

- When you create a function, method, or variable names, you should usually use camelCase formatting: camelCase names always begin with a lowercase letter. Subsequent letters should also be lowercase unless they start a new word. The first letter of each word except the first should be uppercase. `takeThisForExample`.

- File names typically use `snake_case` or `kebab-case`. All lowercase letters with individual words separated with underscores `_` or hyphens `-`.

- When you want to represent a value that won't change once your program begins running, you can define a constant. In JavaScript, constants often use `PascalCase` (also called `CamelCase` -- the first letter is capitalized) or `SCREAMING_SNAKE_CASE`. One convention that you may encounter is to use `SCREAMING_SNAKE_CASE` for global, module, or class constants, and CamelCase for local constants inside of functions and methods. Another more-widely accepted convention is to use CamelCase for object type names and constructor functions, such as `Number`, `String`, and `TodoList`.

- Check out the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) to review styling guidelines.

---
