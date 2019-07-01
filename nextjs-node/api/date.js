module.exports = (req, res) => {
  res.status(200).json({ date: new Date().toString() });
};
