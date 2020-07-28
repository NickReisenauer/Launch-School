# Terminal vs Node

## The Terminal and the Shell

The terminal is an application on your computer that allows you to run commands by typing them at a command line. The shell is a program that runs in the terminal; it handles the details of interpreting the commands you enter, sends those commands to the operating system for execution, and displays the result. We may use the terms "terminal" and "shell" somewhat interchangeably, but it's worth keeping in mind that they are different things, albeit closely related.

## Running a JavaScript Program File

Say we have a JavaScript file called `hello-world.js` and inside is just a `console.log("Hello")`. We can open up our terminal and locate the directory that our file is located in and run `node hello-world.js` and it should print out "Hello".

## Running JavaScript Code in a REPL

You can also run JavaScript code a line at a time in the node REPL. We met the concept of REPLs in the command-line book. In short, a REPL is a program that reads input from the user, evaluates the input, prints the results, and then loops back to wait for more input.

To enter a Node REPL, just type `node` into the shell.

It's important to realize that the shell REPL and the node REPL are not the same thing. The shell REPL executes system commands, while the node REPL executes JavaScript. You can't use the shell to execute JavaScript, and you can't use node to execute system commands:

When inside the Node REPL, you can type out JavaScript and it will be evaluated one line at a time.

## Recap

Use the shell command-line to run system commands. Many (but not all) system commands concern themselves with files and directories, system configuration, and starting other programs (like editors and REPLs for programming languages like JavaScript). The shell doesn't know how to run JavaScript code, or that of any other programming language.

---
