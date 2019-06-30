const { sharedText } = require('../../utils/text');

module.exports = (req, res) => {
  console.log(sharedText);
  res.send(new Date().toString());
};
