Deploying Meteor.js application to now
======================================

For this example to work, you need to provide external MONGO_URL:

```
now secret add now-examples-mongodb-url "<your-mongodb-url>"
```

Also, if you have a non-minimal app, you'll need to use a .dockerignore file to get docker to ignore the node_modules folder and others, which can unnecessarily add a lot of MBs to your deployment.

You can grab a decent free MongoDb instance at mLab or MongoDb Atlas, should be enough for testing and small projects.

After this, as usual:

```
now
```
