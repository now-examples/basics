export default (req, res) => {
  const date = new Date().toString();
  res.json({ date });
}
