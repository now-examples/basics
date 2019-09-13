# Jekyll Example

This directory is a brief example of a [Jekyll](https://jekyllrb.com/) site that can be deployed to ZEIT Now with zero configuration.

## How we created this example 

To get started with Jekyll on Now, you can use the [Jekyll CLI](https://jekyllrb.com/docs/usage/) to initialize the project:

```shell
$ jekyll new my-blog
```

## How to configure

Add a `package.json` file with the following:

```json
{
  "private": true,
  "scripts": {
    "build": "jekyll build && mv _site public"
  }
}
```

This instructs ZEIT Now to build the Jekyll website and move the output to the public directory.

## Deploying this Example

Once initialized, you can deploy the Jekyll example with just a single command:

```shell
$ now
```
