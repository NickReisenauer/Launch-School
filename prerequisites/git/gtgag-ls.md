# A Guide to Git and GitHub - Launch School

## Getting Started

### Introduction

Source Control Management or SCM, is the process programmers and software engineering organizations follow to iterate on their projects or codebases. SCM tools include git, SVN, CVS, Team Foundation, and many others. Another term for SCM is "Version Control System".

SCM tools, like git, store your files into a repository, or just repo for short. The exact implementation of a code repository will differ based on the SCM tool, but in the case of git, it's just a directory and files. There's no running database or external systems. You don't need to worry about what a repository is -- only that it's the place where your code and version history are stored.

A local repository will refer to a repository located on the computer you are using. A remote repository, on the other hand, refers to a repository that is located on another computer or server. Repositories created on Github.com, for example, are considered remote because they are located on Github's servers.

---

### Preparations

Verify that git is installed by running this command:
`git --version`

For the most part, we will be using the command line to interact with git repositories. There are also graphical user interface, or GUI, applications available for viewing and maintaining your repositories, which we will occasionally use to see a visual representation of the changes we have made.

The important thing to know is that a git GUI application is simply a layer between the user and git. All of the commands that the GUI issues are relayed to the underlying `git` command line application. That means anything you can do using a GUI, you can also do using the git command line application.

GitKraken Git GUI is available as a `snap` on Linux.

---

## Working Locally

### Creating Repositories
