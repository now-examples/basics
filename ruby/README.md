# Ruby API on ZEIT Now

In this example we will be deploying a simple "Hello World" example with Ruby.

You can run the following command `now init ruby` to fetch the example to your local machine.

This Ruby example features the [`now.json` configuration file](https://zeit.co/docs/v2/deployments/configuration) below.

```json
{
  "name": "ruby",
  "version": 2,
  "builds": [{ "src": "*.rb", "use": "@now/ruby" }],
  "routes": [
    { "src": "/class", "dest": "class.rb" },
    { "src": "/(.*)", "dest": "index.rb" }
  ]
}
```

Deploy the app with Now.

```shell
$ now
```
