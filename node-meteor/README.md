Deploying Meteor.js application to now
======================================

This example leverages new version of Docker cloud at now (cloud v2).

Usage
=====

1. `now secret add mongo_url <your_mongo_url>` - you can grab a decent free MongoDb instance at mLab or MongoDb Atlas, should be enough for small projects
2. `cd src && npm run bundle-now && cd ..` - this creates the compiled meteor app bundle
3. `now`
