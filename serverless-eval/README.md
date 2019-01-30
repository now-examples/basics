## Serverless Eval
Serverless Eval is a Slack app that allows Slack users to execute JavaScript
code using the `/eval` command.

This [blog post](https://zeit.co/blog/slack-apps-with-now) explores its functioning
in detail.

#### Deployment
```
$ now secret add slack-client-id xxxx
$ now secret add slack-client-secret xxxx
$ now
```
