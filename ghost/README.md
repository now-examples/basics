# <img src="https://cloud.githubusercontent.com/assets/120485/18661790/cf942eda-7f17-11e6-9eb6-9c65bfc2abd8.png" alt="Ghost" />


In this example we will be deploying a simple "Hello World" example with Gatsby.

In this example we will be deploying an instance of the [Ghost blogging
software](https://ghost.org/) - version 2 - to [Now](https://now.sh), [using Ghost as
an npm module](https://docs.ghost.org/docs/using-ghost-as-an-npm-module).

Additionally, it sets up a google cloud storage adapter (easy to swap out for another adapter), and a remote MySQL database (again, easy to swap out). This is to ensure content persists between deployments.

### Getting started with Ghost

There are a few pre-steps to deploying this to now, due to technical constraints:

1. Change the content path in `config.development.json` to be the directory where you checked this project out, plus `/content`, for example `/home/beyonk/Projects/ghost-example/content`. This path *must* be absolute due to a bug in ghost v2.
1. Add your google cloud storage key to the root directory as `gcloud-storage-account.json`.
1. Update the storage block in the ghost config files to suit your Google Cloud Platform storage details.
1. Update the database blocks in the configuration files to suit your DB connection details.
1. Run the application locally, just once, to migrate the DB (it can be slow): `NODE_ENV=production npm start`

### Deploy with Now

Create the `now.json` file in the the same directory as this readme file, then:

```json
{
    "version": 1,
    "name": "ghost",
    "env": {
      "NODE_ENV": "production"
    },
    "regions": [
      "bru"
    ]
}
```

After following the steps above:

```js
npm install
now
```

> Example: https://now-examples-ghost.now.sh/

You can tweak the `config.*` JSON files and `content` directory to your liking,
and then re-deploy by running `now` again.

### A note on Ephemeral file-systems

The file system on Now deployments is immutable. 
So knowing this, we deploy ghost using a remote MySQL database, 
and a Google Cloud Platform storage adapter. This means that you can 
happily redeploy this to now to make changes as much as you like,
and any changes you make to your live instance will persist.
