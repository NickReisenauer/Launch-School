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

In order to create a local git repository, we first need a directory that we can work in. We can create a test directory for this. `mkdir Desktop/gitbasics`.

Once we cd into our new directory, we can run `git init` from the root folder. This will initialize git in our current directory.

Technically, the only thing that changed was a `.git` directory was added to the `git_basics` directory, but conceptually, you can think about it as turning that directory into a git repository. After you initialize a directory as a git repository, you can then start issuing other git commands.

**Warning:** Do not nest your repositories. That means that if ~/dev/project is a repository, ~/dev/project/other_project should not be another repository. You need to move other_project to ~/dev/other_project.

It's important to only issue the `git init` command from within the directory that you wish to turn into a `git` repository. If you've accidentally typed that command in a directory that you didn't want to turn into a `git` repository, all you have to do is delete the `.git` directory within that directory.

When we initialize our repository, a new `.git` directory is added at the root. We can view this file with `ls -a`. We can see the git config file which contains configurations that are specific to your repository.

We also have access to a computer level git config file where we can specify our name and email so we can keep track of who has committed what.

```bash
git config --global user.name "Nick Reisenauer"
git config --global user.email nickdreisenauer@gmail.com
```

#### .gitignore

If we have private data in our code, such as person credentials or database information, we can hide that from public view by adding it to a `.gitignore` file. First we have to make the file in our root directory: `touch .gitignore`.

Once it is created we can add files in, like so.

```bash
# Ignore all SQLite databases
db/*.sqlite3
```

#### Summary

In this chapter, we learned how to turn any directory into a `git` repository just by using the `git init` command. All the `git init` command does is add a `.git` folder to the current directory, and that enables the directory to be a `git` repository. We also talked about how to configure your `git` repository, and the very important concept of **never nesting your `git` repositories**.

---

### Tracking Change

#### git status

`git status` shows us our working tree and staging area.

The first time we run this command on a new git repository, we should see something like:

```bash
# On branch master

# Untracked files:
# file
# file
# (use "git add <file>..." to include in what will be committed)
```

This output shows us that we have new files in our working tree that we'd like to commit to our repo.

#### Creating a commit

What's a commit?
You can think of a commit as a bundle of changes. A commit can contain changes across many files, it can contain the addition of new files, as well as the deletion of existing files. In git, we're always moving commits around, pushing them, pulling them and merging them. We'll cover this in more detail later, but for now, just think of a commit as a way to logically group a bundle of various changes together.

We have to tell git which files we want to stage to commit.

```bash
git add file1.md file2.md
```

This will `stage` our files. If we run `git status` it will show us which files are staged and which are unstaged/untracked.

When we want to commit our files, we use `git commit`.

```bash
git commit -m "Add first project files"
```

To clarify what just happened, the `git commit` command commits all of the changes which we have staged into our repository. Each time you make a change to a file, you will need to stage the changes using the `git add <file>` command again. Being able to stage changes individually allows you to make lots of changes without worrying about committing them immediately. When you are ready, you can commit all the staged files all at once.

#### git log
