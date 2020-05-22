# Introduction to the Command Line - Launch School

## Getting Started

### Introduction

Like a graphical user interface, the command line is one way that the operating system represents the computer's files, directories, and programs (which are also files) to the user. In fact, the command line is a text-based interface through which one can navigate, create, execute, and act on a computer's files and directories with precision.

To run our first command, we need to open the terminal. Once open, we can execute a very simple command.

```bash
echo "Hello World!"
Hello World!
```

Why would we want to control our computer using a CLI? (Command Line Interface)

- Understand commands that tutorials tell you to use

  - As you learn programming, you will inevitably have to use the command line to install software, compile or run code, and perform other types of system administration.
  - Learning the basics of the command line will help you understand why you are running the commands, and give you a general idea of how they work.

- Power over the computer

  - Being able to communicate with your computer or server via the command line gives you immense and precise power over your computer.
  - With the command line, you can easily monitor your computer and its resources.
  - You can take advantage of a lot of powerful tools in their raw, powerful form.
  - You can learn to diagnose issues with your own software and others' software

---

### Preparations

How to get the most out of this book:

1. Try things out and make what you've learned your own.
2. Do the exercises, and explain to a friend / rubber duck.

---

## Introduction to the Command Line

### The Command Line Interface

What's an interface? an interface is "a system that is used for operating a computer: a system that controls the way information is shown to a computer user and the way the user is able to work with the computer."
In a nutshell, the command line allows for text-based communication with a computer. Let's look at the two parts of the command line interface: the display and the input.

A terminal will follow this format.

```bash
[user]@[hostname]:[current_directory]$
```

The components of the CLI display are the prompt, the cursor, the input (text you have typed in), and the output of your commands and programs.

`echo` is a very basic command that simply sends text to the CLI's output.
`pwd` is a command that prints out the present working directory.

When we type commands into our terminal, it usually takes the following format.
`[command] [arguments]`

We can think of our command line interface like a well trained army. When we tell it to do something, like echo, it will have no trouble instantly running that command. But if we want to give us more specific and unique commands to fit what we need, we need to provide some additional guidelines. This is where arguments come in. Arguments usually start with -, `-c -z -f`. For example, the `tar` command, which can archive files, can take many arguments such as -c for create, -z for zip, and -f for file.

`man` will give us a operating manual of whatever command we type after it.

What are some common use cases for command lines?

- Restart servers
- Rename hundreds or thousands of files according to a prescribed pattern
- Manage system logs
- Set up scheduled tasks (cron jobs)
- Debug server issues
- Monkey patch code on a server
- Query data
- Set up databases and servers
- and many more...

Here are some common commands we will use.

- `cd` Change directory
- `ls` List files and directories in current directory
- `pwd` Display the path of the current directory
- `touch` Create a file
- `mkdir` Create a directory
- `rm` Remove a file or directory. Warning: deleting a file or directory with this command is permanent!
- `cp` Cope a file or directory
- `mv` Move or rename a file or directory
- `echo` Print text to STDOUT
- `cat` Display contents of a file
- `more` Display contents of a file, starting at the top and letting the user scroll down
- `less` Display contents of a file in an even more interactive way
- `head` Display the first part of a file
- `tail` Display the last part of a file
- `man` Display documentation about a command

---

### Files, Directories, and Executables

Unix File System Legend:

- `/` The root directory or a separator when listing directories
- `.` The current directory (also `./`) or the same level
- `..` The directory one level up (also `../`)
- `../..` Two levels up
- `~` Your "home" directory, or the directory you are placed in when you log in
- `*` The "splat" or "glob" operator. This is the wildcard of the command line and represents "any characters"

`/home/ubuntu` can be dissected as follows:

```bash
root directory + "home" directory + directory separator (/) + "ubuntu" (user) directory
```

There is a dramatic difference between a path that starts with a leading slash vs one that doesn't. For example:

- `/home/ubuntu` This path specifies a folder called "ubuntu" that lives in a directory called `home`, which is itself in the root directory.
- `home/ubuntu` This path specifies a completely different folder. This path means there's a folder called "ubuntu" that lives in a directory called "home", which is itself in the current directory.

Navigating:

- `cd` Change directory
- `ls` List files
- `pwd` Display the current working directory
- `dir` Also lists the files in the current directory

Exercises:

- Create a directory in your home directory called "cli-temp"

```shell
cd

mkdir "cli-temp"
```

- From the home directory, create a file in the cli-tmp directory called "from-home.txt"

```shell
touch cli-tmp/from-home.txt
```

- Navigate to the cli-tmp directory, then create a file called "in-cli-tmp"

```shell
cd cli-tmp

touch in-cli-tmp
```

- Try to make a directory called "in-cli-tmp" within the `cli-tmp` directory. What happens?

```bash
mkdir in-cli-tmp

mkdir: cannot create directory "in-cli-tmp": File exists
```

- Remove the `from-home.txt` file

```bash
rm from-home.txt
```

- Remove the `cli-tmp` directory (use `man` to see how to remove a directory recursively)

```bash
cd

rm -r cli-tmp
```

- Create a nested set of directories in your home directory: cli-tmp > parents > children > grandchildren (use the `-p` flag to do it all at once)

```bash
mkdir -p cli-tmp/parents/children/grandchildren
```

- Navigate to the children directory

```bash
cd cli-tmp/parents/children
```

- Create a file named "bob"

```bash
touch bob
```

- Move the file named "bob" to the `grandchildren` directory

```bash
mv bob grandchildren
```

- Copy the `grandchildren` directory to the `parents` directory and rename it "nephews"

```bash
cp -r grandchildren ../nephews
```

- Copy the contents of the "nephews" directory to the "children" directory

```bash
cp -r nephews/* children
```

- View what you've done with the `tree` command: `$ tree ~/cli-tmp`

```bash
tree cli-tmp
cli-tmp/
└── parents
    ├── children
    │   ├── bob
    │   └── grandchildren
    │       └── bob
    └── nephews
        └── bob
```

- Remove the "bob" file from the `grandchildren` directory

```bash
rm cli-tmp/parents/children/grandchildren/bob
```

- Remove the cli-tmp directory

```bash
rm -r cli-tmp
```

Executables

A command is just a file, and files that can be used as commands are called executables. Not all files are executables.

What makes an executable different from other files?:

- They have special characters at the beginning to tell the computer how to execute them.
- They have scrips or machine language as their content
- They have the executable permission (we'll talk more about this later)

```bash
/bin/echo "Hello World"
Hello World
```

In the above code, echo is our executable and we are specifying the file path to `echo` and passing it an argument (our Hello World string).
Because echo is a common command we don't have to type the full location every time because the CLI knows where to find it.

Sometimes a executable will run in a loop or get caught on something. To exit out of the process, we can use `ctrl + c`.

Exercises

- List the hidden files in a directory

```bash
la -a
```

- List the files in the parent directory. Then list the files in the parent directory's parent directory.

```bash
# Parent
ls ..
# Parent's Parent
ls ../..
```

- What's the difference between abc/ and /abc?

The path `abc/` (also `./abc` and `./abc/`) are paths relative to your current working directory. The path `/abc`, however, is the file or directory `abc` in the root directory.

- What does ../abc mean?

The path `../abc` is a reference to the parent directory (`..`), and the file or directory called "abc" within that directory.

- Suppose you are in a directory with 7 files. You need to move 6 of them into a "tmp" directory, that you have yet to create. How do you do that?

```bash
mkdir tmp

mv /file/location/* /tmp

mv /tmp/lastfile /file/location
```

- Suppose you have two directories called xyz/ and abc/. How do you move all the files in abc/ that end with ".txt" into xyz/?

```bash
mv abc/*.txt /txt
```

Reviewing common navigation tasks:

- `pwd` Get your current location
- `cd` Change your current directory. Use without arguments to go to home directory
- `$HOME` or `~` will achieve the same results as above
- `/` Go to the root directory
- `ls` Determine what files and directories are located in the current directory
- `cd usr` Pass a directory or path as an argument to the `cd` command to go directly to that location
- `ls -lah` Use the `-lah` flags with `ls` to get more detailed information about files and directories
- `which` Finds the location of a default executable

---

### The Environment

Environment variables are like variables that store data and references to locations for easier access. To see a list of all environment variables that have been set on your machine, type `env`.

There are two ways to set environment variables on the fly (lost on session exit)

```bash
SOMETHING="some value"

echo $SOMETHING
# some value
```

```bash
$ SOMETHING='a value' env
...
SOMETHING=a value
...
```

You cannot (very easily) use a value on the same line that you set it. That's because variables are evaluated before the setting occurs:

```bash
$ SOMETHING='something else' echo $SOMETHING
# no output
```

Did you notice that when you set a variable you don't prepend the dollar sign, but when you reference it, you do? Also note that there should be no spaces between the variable and the equal sign or the equal sign and the value. Lastly, it's usually best to use quotations around the value that you are assigning to the variable, but you don't have to when the value doesn't have any special characters.

If we want to change how the terminal prompt looks, we can alter the `PS1` value.

```bash
$ PS1="(testprompt)> "
(testprompt)>
```

If we want to make more permanent changes to our terminal, we're going to have to edit the environment variable files located on our machine. To locate them we can use the ls command but we have to add the `-a` flag to include files that start with . We're going to be looking in the ~ directory so be sure to include that.
`ls -a ~`

In order to add global variables to our CLI, we're going to open our `.bashrc` file in nano or a code editor and scroll down to where we see a section with `export`. From there we can do something like edit our prompt text.

```bash
PS1="[your custom prompt goes here] "
```

We can add some custom text variables in to help customize further

- `\h` Hostname
- `\u` User name
- `\w` Current directory
- `\W` Basename of current directory
- `\d` Current date
- `\n` Newline

The changes are only applied when we restart our terminal or we can use the `source` command to refresh our terminal and have the changes applied.

Using Environment Variables

1. Variables can be used as parts of commands

```bash
MESSAGE="Hello World"
echo $MESSAGE

# Hello World
```

2. Variables can be interpolated in strings

```bash
MESSAGE1="This is message 1"
MESSAGE2="This is message 2"
MESSAGE="$MESSAGE1 $MESSAGE2"
echo MESSAGE

# This is message 1 This is message 2
```

If we want our variables to be interpolated as values not as solid strings we need to use double quotes `" "`

3. Variables can be used behind the scenes

We use variables in a lot of common commands and we can edit those variables if we need to change how we interact with our CLI.

```bash
HOME=/ cd
pwd
# /

cd
pwd
# /home/nick
```

The `$PATH` variable provides context for which files to execute when we run a command like `cd` or `echo`.

```bash
echo $PATH
/home/nick/.nvm/versions/node/v13.12.0/bin:/opt/GitHub Desktop:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

When we view our path variable file, we see a lot of file paths that are separated by colons. A lot of them also end in `/bin`, which is short for binary and is a standard directory name for executable files, or programs.

When you type a word into the command line, and it doesn't start with a `/`, `~`, or a `.` the command line will search each of the directories listed in the `PATH` environment variable for that command.

Exercises

1. Run the following command to experiment with altering your command line environment.

```bash
cd
PS1="\u@\w$ "
```

2. Set your prompt in your `~/.bashrc` file

```bash
echo 'export PS1="this is a test$ "' >> ~/.bashrc
```

3. Set the current path variable so that we can revert to it later:

```bash
OLDPATH=$PATH
echo $OLDPATH
```

4. Temporarily change `PATH` and try to run a program that is no longer located in the directories specified in `PATH`:

```bash
PATH="" ls
# No such file or directory
ls
... ... ...
```

5. Create an executable in your home directory

```bash
echo '#!/bin/bash' > ~/test.sh
echo 'echo "Hello World"' >> ~/test.sh
chmod +x ~/test.sh # Make sure test.sh has the executable permission
```

6. Run the executable, first by specifying the path, then by running it like a command

```bash
./test.sh
Hello World

test.sh
test.sh: command not found
```

---

### Permissions

When logging into your terminal, the user account you logged in with determines what permissions you have and what you are allowed to access using the CLI.

In Unix and Linux file systems, permissions are divided into two parts: `ownership` and `access types`.

There are three levels of `ownership`:

- `user`
- `group`
- `other`

Three levels of `access types`:

- `read`
- `write`
- `execute`

What if we want to edit the permissions on a file or directory? This is where the `chmod` command will come in useful.

Example of adding write permissions to a file.

```bash
chmod +w sample.txt
```

The `+w` means we are adding write access to the file.

Want to set access level permissions for the user, group, and other all at once? We can do this with 3 numbers, ranging from 0-7.

| Number | Permission                     |
| ------ | ------------------------------ |
| 0      | No permission granted          |
| 1      | Can execute                    |
| 2      | Can write                      |
| 3      | Can write and execute          |
| 4      | Can read                       |
| 5      | Can read and execute           |
| 6      | Can read and write             |
| 7      | Can read and write and execute |

In order to change the permissions of a file or directory, you must be its owner, be root, or use sudo.

```bash
chmod 777 test.sh
```

Users and Groups

Users can be a part of many groups, and groups can have many users involved. To see which groups your user is in, use the `groups` command.

In Unix and Linux systems, there is a special user called "root". This user is also known as the super user, because they can read, write, and delete any file. It's best to not log in as a root user for regular computer use because there is so much power with that user, instead just use commands that require root access when necessary.

To switch to the root user, type `su`.

Sudo

While you could log in to the root user when you need to run a certain command, it's easier to use the `sudo` command. `sudo` allows us to "do" something as a "super user". When using `sudo`, you'll still be asked for a password but instead of giving the root password, you'll just give your own.

Why use `sudo` instead of just logging in as root? There are several reasons for doing this, including the following:

- The server administrator wants you to have root access for some commands and/or directories, but not for everything. In this case the administrator will set up sudo to have restrictions or whitelisted commands.

- Running commands while logged in as root can be dangerous. Using a non-root user makes it obvious when you are running a command that requires root privileges because you have to prefix your command with `sudo`.

- The `sudo` command provides a detailed audit trail so that system administrators can track what commands individuals used on system files.

- Sudo uses a ticketing system where you put your password in once, then you don't have to until you haven't run any sudo commands for five minutes or longer. This adds security to you command line session, preventing others from gaining root access if you ever leave your terminal open on accident.

Summary:

- Permissions are assigned to files and directories -- not users and groups.

- Access levels are determined by the `rwx` (read, write, execute) permissions for the owner, group, and other.

- A file must have the `x` (execute) permission to execute that file directly

- To change the permissions of a file or directory, you either must be logged in as that file's owner or the root user, or you must use the `sudo` command.

Exercises:

- Which user and group are assigned to the `/etc` folder on your computer?

```bash
ls -l /
```

- Which user and group are assigned to the `$HOME` folder?

```bash
ls -la $HOME
```

- What are bob's permissions for the `napkins` file in the following outputs?

```bash
$ groups bob
bob travelers vip
$ ls -l custodian_closet
total 0
-rw-rw----  1 acmeair acmeair 0 Jul 21 17:57 napkins
-rw-rw----  1 acmeair acmeair 0 Jul 21 17:57 paper_towels

# Bob doesn't have access to the custodian closet
```

- What are bob's permissions to the `donuts` file in the following example:

```bash
$ groups
bob travelers vip
$ ls -l vip_lounge
$ ls -l ./
...
-rw-rw----  1 acmeair  vip  0 Jul 21 17:57 donuts
...

# Bob has read and write access to the donuts file as shown with -rw
```

- What are bob's permissions to the `laptop` file in the following example? What are the permissions for the group `acmeinc`?

```bash
$ ls -l vip_lounge
...
-r-xrwx---  1 bob  acmeinc 0 Jul 21 17:57 laptop
...

# bob has read and execute permissions
# acmeinc has read, write, and execute permissions
```

- Practice using `sudo`.

```bash
# Log in as root user
cd
sudo su

# Exit out of root user session
exit

# Log in as root in root's home directory
sudo su -

# Run a command as root
ls /root # Error: root user required
sudo ls /root
```

### Other Interfaces

When using our CLI we have some additional commands that will change how we use and interact with our terminal.

- Database management commands: `mysql`, `psql`, `redis-client`, `mongo`
- Text editors: `vim`, `pico`, `nano`, `emacs`
- REPLs (Read-Eval-Print-Loop), which are basically interactive scripting consoles: `irb`, `python`, `php -a`
- System monitoring: `top`, `htop`
- Reading files or manuals: `man`, `less`, `more`
- Window/Session handling: `byobu`, `screen`, `tmux`

`top` is a very useful command that takes over the CLI display and displays system information, such as which programs are running and how much resources each program is using.

When we run a command like `mysql`, our prompt transitions from all-purpose terminal to a mysql focused prompt. This means we no longer have access to commands like `ls`, `echo`, etc... But we do have new commands that are related to mysql.

Programs that follow the pattern of reading user input, evaluating the input, printing the results of the input to the screen, and then allowing for more input, are called "REPLs", or "Read-Eval-Print-Loop". The `bash` shell is an example of a REPL.

If you have Node.js installed, type `node` into the terminal to enter a JavaScript REPL. Once in our REPL we can type regular JavaScript expressions and evaluate them all from the console.

Editors:
Some programmers use the command line as their IDE (Integrated Development Environment). There are a few options for terminal IDEs including Vim, Nano, and Emacs.

Nested Interfaces:
Sometimes when working in terminal, we will come across nested terminal interfaces. When you type exit, the current terminal session closes but you are put into a different terminal.

Summary: When you open up a terminal session, it can sometimes be difficult to know what interface you are using. Often times the terminal prompt will help in determining this.

---

## Conclusion

### Conclusion

Concepts we discussed in this book:

- The command line is an interface to your computer's files and directories.

- Everything you do in the command line is related to files, directories, and executables.

- Environment variables provide context for what you do in the command line.

- Access to files, directories, and executables is determined by their read, write, and execute permissions. There are permissions for the file's user (owner), group, and other (everyone else).

- Some programs provide a completely new context within the command line interface.

---
