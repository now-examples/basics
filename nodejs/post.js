module.exports = (req, res) => {
  let body = '';
  req.on('data', piece => {
    body = body + piece.toString();
  });
  req.on('end', () => {
    res.end(body);
  });
};
