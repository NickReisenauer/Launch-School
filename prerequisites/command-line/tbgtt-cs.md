# The Beginner's Guide to Terminal - Colt Steele

## Course overview

What we cover:

- Why you need to know terminal
- Navigating
  - ls
  - pwd
  - cd
- Relative & absolute paths
- Flags
- Creating/deleting
  - touch
  - mkdir
  - rm
  - rmdir
- Other commands
  - man pages
  - clear

## Why you need to know terminal

1. Can be much quicker if you know what you are doing.
2. Lots of things that are only available from the terminal:
   Some examples include

- Git
- Databases
- Servers
- Django
- Node

## Terminal vs shell

Terminal: A text-based interface to your computer. Originally a physical object, but now we use software terminals.

Shell: The program running on the terminal.

There are a lot of options available for shells, but the most popular is bash. This is the default shell on many machines including Macs.

## Setup

If we are using Linux or Mac we have `bash` enabled as the default terminal.
Windows users will have to enable the Linux subsystem for Windows to be able to run `bash` commands.

## ls command

The `ls` command is used to list the contents of your current directory.

```bash
ls

Desktop/    Downloads/  Pictures/  snap/       Videos/
Documents/  Music/      Public/    Templates/
```

## pwd command

The `pwd` command is used to print the path of the working directory (where you currently are).

```bash
pwd

/home/nick
```

## cd command

The `cd` command is used to change and move between folders/directories.

```bash
cd Desktop
cd tcndc-am
```

In order to reverse our directories, or "go back" we can use `..`

```bash
cd Desktop
cd tcndc-am
cd ..
# Desktop
cd ..
# /home/nick
```

## Relative vs Absolute paths

Absolute Paths: An absolute path is a reference or full path name to any file and it doesn't matter where we are located in the terminal because we can use the absolute path to directly locate any path.

When working with absolute paths, we always use the root directory `/`.

We also use our `home` directory quite often, and there's a helpful shortcut that allows us to quickly access it. Typing `~` is a shortcut to home.

```bash
# Absolute path to a static HTML file in a course folder
/home/nick/Desktop/tcndc-am/web-server/index.html
```

A relative path is only available relative to where you are. So something like `cd Desktop`. This is a path, but it will only work if we are in our home directory or if the folder we're in happens to contain a folder called Desktop.

## touch command

The `touch` command is used to create one or more files.

```bash
ls testFolder
files index.html index.js index.css
#
touch README.MD
ls testFolder
files index.html index.js index.css README.MD
```

We can also add multiple files in one command by leaving spaces between them.

`touch hello.txt hi.txt index.md`

## Flags

Flags are options that we can pass in when we run certain commands.

One example is `ls -l`, this will run our list command but will also include some additional information about each file and the permissions it has as well as when it was created.

Another example is `ls -a` which will run our list command again but will also reveal all hidden files.

We can chain flags together like `ls -la`.

## man command

The `man` command will give us a user manual of sorts and contains all the possible flags and what they're used for and what the command itself is used for.
