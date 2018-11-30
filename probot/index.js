'use strict';

if (process.env.PRIVATE_KEY) {
  process.env.PRIVATE_KEY = Buffer.from(process.env.PRIVATE_KEY, 'base64').toString('utf8')
}

// console.log(process.env.PRIVATE_KEY)

module.exports = (app) => {
  app.log('foo bar');
};
