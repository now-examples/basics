# Contributing

Thank you for your interest in contributing to the ZEIT Now Examples!

The following describes how to contribute to the Now Examples repository.

## What Does this Document Contain?

This document contains all the required information and links to resources needed to contribute to the ZEIT documentation:

- [Code of Conduct](#code-of-conduct) - our Code of Conduct, adapted from the [Contributor Covenant](http://contributor-covenant.org)
- [Reporting an Issue](#reporting-issues) - guidance on how to raise an issue or provide feedback on examples
- [Contributing Content](#contributing-content) - a collection of all information required for contributing
  - [Forking Workflow](#forking-workflow) - a guide on how to keep your fork in sync with `master`
  - [Documentation](#documentation) - information on contributing to the [ZEIT Now Documentation](https://github.com/zeit/docs) repository

## Code of Conduct

We provide a [Code of Conduct](https://github.com/zeit/docs/blob/master/CONTRIBUTING.md) to make clear the behavior we expect from contributors and maintainers alike. We are committed to providing a welcoming and supportive environment and kindly request that you participate in these values also.

Our Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.4, available at [http://contributor-covenant.org/version/1/4](http://contributor-covenant.org/version/1/4/).

## Reporting Issues

If you have found a bug, spelling mistake, or anything related to an example that you feel is an issue that should be reported, please create a new issue here on GitHub. For issues relating to documents, please [create an issue in the documentation repository](https://github.com/zeit/docs/issues/new).

An issue can be raised by clicking the 'Issues' tab at the top of the repository, followed by the Green 'New issue' button. When submitting an issue, please thoroughly and concisely describe the problem you are experiencing, or improvement you feel could be made, so that we may easily understand and resolve the issue in a timely manner.

## Contributing Content

Most examples feature a frontend that consumes a serverless function found in the `/api` directory. Examples are kept organized and easy to find by listing them in order of frontend framework or static generator, followed by the technology used for the serverless function if applicable.

When contributing a new framework, we kindly ask that you follow the steps below:

- Create an example that uses the same markup, CSS and `/api` directories as existing examples
- Add a README.md file using the same format as existing examples
- Test the example with `now dev` to ensure it is working correctly

When contributing a new static site generator, we kindly ask that you follow the steps below:

- Add an example that uses the default theme or template of the generator
- Add a README.md file using the same format as existing examples
- Test the example with `now dev` to ensure it is working correctly

When contributing an example, please fork this repository and then add your example before submitting a pull request. If you are not sure how to do this then please take a look at the [Forking Workflow](#forking-workflow) below.

The simplest and easiest way to add an example is to focus first on the framework or static generator you are looking to add, using the markup and CSS from an existing example if it's a framework, else the default theme or template from the static generator. Once complete, copy an `/api` directory from one of the existing examples if applicable and include a request to fetch the data. You can then test your example locally by [using `now dev`](https://zeit.co/docs/v2/development/basics/) to provide a reproduction of the ZEIT Now serverless environment. Finally, if the example requires a serverless function, simply add the name of the language used to your example and submit a pull request.

We appreciate all contributions and don't expect anyone to submit a frontend example for each individual language that could be used in a serverless function. This is something we will happily do for you once the pull request is merged. Of course, if you'd like to do that then please do!

## Forking Workflow

To contribute to this repository, you will need to fork it, make changes and submit a pull request. This section is a brief guide on how to do this whilst making sure your forked repository stays up to date the with the official one.

The first step is to fork the repository, creating a copy of it under your own account. To do this, click the 'fork' button at the top right of the page.

A few seconds later you should be redirected. Now, if you look at the top left of the page it should show your GitHub username before the repository, confirming the fork has been successful.

Next you need to clone your fork your local environment so you can make changes to it. To do this you can click the Green 'Clone or download' button which will give you a URL to copy. Once copied, enter `git clone` in your terminal followed by the URL and hit enter, the command should look like this:

`git clone git@github.com:<your username here>/docs.git`

If successful, you should see the forked repository being cloned to your local environment.

Once you've cloned the forked repository to your local environment, it's a good idea to install the project dependencies. We use [Yarn](https://yarnpkg.com/en/) as our package manager, if you do not have it installed currently, their documentation provides a set of [instructions](https://yarnpkg.com/en/docs/install#mac-stable).

To install the project dependencies, simply enter:

`yarn`

With the dependencies installed, you should now add a remote path to the official repository. This will allow you to pull the most recent changes from the official repository into your local fork at any time, ensuring things are kept up to date and in sync.

To add the remote path for the official git repository, enter the following:

`git remote add upstream git@github.com:zeit/docs.git`

This command adds a new remote branch, with the name 'upstream'. If you ever want to pull the recent changes to update your local fork you can use the following command:

`git pull upstream master`

So far you've managed to fork, clone, install dependencies and add a remote, not bad going! Now you want to start making our changes, to do this you should create a new branch. Creating a branch for each change you make will keep things simpler for everyone and allow you to work on multiple changes at once if you like.

You can create a branch by using:

`git checkout -b <your branch name>`

Remember to use a descriptive and meaningful name when creating your branch, this will help you remember what its purpose is!

Now you're working on a branch you are a free to make the changes needed, further help with this can be found [below](#platform-and-usage-documentation). After you've finished making changes, commit them and push them to your new branch, you will need to create a new upstream remote to do this.

To create a new upstream remote, enter:

`git push --set-upstream origin <your branch name>`

Your new branch should now appear on your remote repository. It can be viewed by visiting your remote repository and clicking 'Branches'. On this page you will see multiple sections, the most important one being 'Your branches'.

To the right of the branch you will see a button that says 'New pull request', click this to begin the process of submitting your changes for review. You will now be prompted to enter a relevant title and a description of the changes made. When entering this information try to be concise but make sure to include the following information:

- What changes you've made
- Your reason for making them
- A request for feedback if required (add [WIP] to your title)

Congratulations, you've just made your first pull request to the ZEIT Documentation!

The rest of this section relates to other scenarios you may encounter whilst contributing and may not be applicable just yet, so feel free to [read ahead](#platform-and-usage-documentation). If you want to know what you should do in the event changes are requested to your pull request, or your master branch becomes out of sync with the official repository, read on below:

### Master Branch out of Sync

This is a very common situation and happens when changes are made to the official repository, meaning your fork is suddenly out of date. The only time you need to consider this is before you create a new branch, this means that whenever you start working on changes, your branch will always be up to date as of that moment.

When pulling changes from the official repository, it is always a good idea to do so from your master branch. Providing you've followed the advice above about adding a remote upstream, your command should look like this:

`git pull upstream master`

This will get the most recent changes and bring your local fork up to date, at this point it is a good idea to have your remote fork reflect this, all this requires is to use:

`git push`

Now, both your local and remote fork are up to date with the official repository, you are ready to create branches and make changes!

### Pull Request Changes Requested

When you submit a pull request, a reviewer may request that you make further changes before merging with the master branch. This situation might seem difficult at first but is extremely straightforward.

All you need to do is make the changes on the same branch locally, commit and push them. Because you already have a pull request set up to track that branch, GitHub will automatically update it with your most recent changes. At this point it's a good idea to tag the original reviewer in the pull request using `@<reviewers username>`, to let them know you've made the requested changes.

## Documentation

The content for the examples section is not contained within this repository. To contribute an example, please head over to the [now-examples](https://github.com/zeit/now-examples) repository where you will find all the relevant information to do so.

This repository contains only examples to be used with the Now platform.
