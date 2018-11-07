# node-express

In this project we will be building and deploying a Hello World example using [Express](https://github.com/expressjs/express).

Express is a fast, unopinionated, minimalist web framework for node.

### Getting started with Express

#### Create a new folder with the name of your app

```
mkdir my-app && cd my-app
```

#### Create a server.js file

```
touch server.js
```

For this example we will use the minimal requirements to run a Hello World.

```
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from Express!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

### Adding Dockerfile for Node

#### Instructions

We will create a `Dockerfile` with multi stage builds to:

- Install all the dependencies
- Create a new lighter Docker image to reduce boot time
- Pull built files and production dependencies from previous steps

#### Dockerfile

We will start by using the official Node Alpine 10 image to install the dependencies and build the project, after that we will use a slighter image to have the minimum requirements and lower the Docker image size to run the app and copy all the files.

Then using the Docker `CMD` we will start the app in production mode.

```
FROM mhart/alpine-node:10 as base
WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn --production
COPY . .

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
CMD ["node", "server.js"]
```

#### Add a .dockerignore

We can tell to Docker which files should only be required for building the project using an `.dockerignore` file.

```
touch .dockerignore
```

For this project we only need the `server.js` file and our dependencies files, `package.json` and `yarn.lock`.

```
*
!server.js
!package.json
!yarn.lock
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Cloud V2.

```
touch now.json
```

By just adding the features key, we can specify the Now cloud to use.

```
{
  "features": {
    "cloud": "v2"
  }
}
```

We are now ready to deploy the app.

```
now
```
