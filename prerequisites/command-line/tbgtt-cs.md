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
