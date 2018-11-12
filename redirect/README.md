# Redirect

In this example we will create a simple Microservice to redirect to an URL.

## Usage

First we need to create an `index.js` file that use an environment variable called `REDIRECT_URL` to make a redirection.

```
if (!process.env.REDIRECT_URL) {
  throw new Error('You must provide the REDIRECT_URL environment variable!');
}

const REDIRECT_URL = process.env.REDIRECT_URL.replace(/\/$/, '') + '/';
const STATUS = parseInt(process.env.STATUS, 10) || 301;

module.exports = (req, res) => {
  const Location = `${REDIRECT_URL}${req.url.substr(1)}`;
  res.writeHead(STATUS, { Location });
  res.end();
};
```

## Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/node to build and deploy the `index.js` JavaScript file. We will also define a name for our project (optional).

```
{
    "version": 2,
    "name": "redirect",
    "builds": [
        { "src": "index.js", "use": "@now/node" }
    ]
}
```

We are now ready to deploy the app using our environment variable.

```
now -e REDIRECT_URL=https://mycompany.com/
```

After the deployment is complete you can create an alias for your custom domain:

```
now alias <unique-deployment-url> example.com
```

In this example you've made a redirect from:

```
https://example.com ⟶ https://www.example.com
```

> On `now` every subdomain is unique. So `example.com` and `www.example.com` can be 2 different instances. This is useful when you want to, for example, redirect from non-www to www.
