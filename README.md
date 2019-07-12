# ZEIT Now Examples

This is the public list of examples for **ZEIT Now**.

All of the examples include an `/api` folder to help you understand how to use serverless functions with your frontend, this can be removed if you do not require it for your use case.

## What is ZEIT Now?

ZEIT Now is a cloud platform for serverless deployment. It enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision.

## What Does this Repository Contain?

This repository consists of multiple examples, created for use with the [ZEIT Now](https://zeit.co/now) platform. Examples are listed by framework then technology used in the `/api` folder. In addition to this, it also contains:

- [Code of Conduct](https://github.com/zeit/now-examples/blob/master/CODE_OF_CONDUCT.md) - our Code of Conduct, adapted from the [Contributor Covenant](http://contributor-covenant.org)
- [Contributing Guidelines](https://github.com/zeit/now-examples/blob/master/CONTRIBUTING.md) - a guide on how to contribute to the Now Examples repository

We recommend familiarizing yourself with the above sections, particularly if you are looking to make a contribution.

## Developing Examples

To get started using any of these examples as your own project, [install Now](https://zeit.co/docs/v2/getting-started/installation) and use either of the following commands in your terminal:

```sh
now init                    # Pick an example in the CLI
now init <example>          # Create a new project from a specific <example>
now init <example> <name>   # Create a new project from a specific <example> with a different folder <name>
```

The `now init` command allows you to select any example listed in this repository and creates a copy locally. As you can see above, you are able to supply additional parameters if you know which example you are looking to get started with or want to choose a different folder name for your project.

Once your project is setup you are then able to get started developing immediately with just a single command:

```sh
now dev                    # Runs the project locally in a reproduction of the Now serverless environment
```

By using `now dev`, you are immediately able to run your project locally in a reproduction of the Now serverless environment. This allows you to develop your application in as close to a production environment as possible, ensuring rapid development and complete confidence in your code.

Deploying your project is just as straightforward, again only requiring a single command:

```sh
now dev                    # Deploys the project with Now
```

With the `now` command, your project will be built and served by Now, providing you with a URL that can be shared there and then.

## How to Contribute

Contributing to the Now Examples should be an enjoyable experience, as such we have created a set of [contributing guidelines](https://github.com/zeit/docs/blob/master/CONTRIBUTING.md) to help you do so.

The guidelines cover important information such as the requirements for new examples and where to get help if you have any questions.

We have tried to make contributing to Now Examples as easy as possible, especially for those new to Open Source. If anything is unclear or you have any questions then please reach out to us on [ZEIT Spectrum](https://spectrum.chat/zeit) where we will do our best to help you.

## Reporting Issues

We actively encourage our community to raise issues and provide feedback on areas of the Now documentation that could be improved.

An issue can be raised by clicking the 'Issues' tab at the top of the repository, followed by the Green 'New issue' button. To make this process as easy as possible we have created a few basic templates to choose from, there are, however, often cases that will fall outside of the templates provided.

If your issue doesn't fit with any of the templates then that's okay, please submit it as a 'Documentation Issue or Request'. When submitting an issue, please thoroughly and concisely describe the problem you are experiencing so that we may easily understand and resolve the issue in a timely manner.

## License

Now Examples is an open source project released under the [MIT License](https://github.com/zeit/docs/blob/master/LICENSE.md).

## Get In Touch

If you have any questions that are not covered by raising an issue then please get in touch with us on the [ZEIT Spectrum](https://spectrum.chat/zeit). There you will find both members of the community and staff who are happy to help answer questions on anything ZEIT related.

[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/zeit)
