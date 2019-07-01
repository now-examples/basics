module.exports = (req, res) => {
  res.status(200).send({ date: new Date().toString() });
};
