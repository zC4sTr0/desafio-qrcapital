const notFoundHandler = (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.status(404).send({ error: "Not found!!", status: 404 });
    return;
  }
  if (req.accepts("html")) {
    res.send("<h1>404 - Not found</h1>");
    return;
  }
  if (req.accepts("text")) {
    res.send("Not found");
    return;
  }
  if (req.accepts("xml")) {
    res.send("<error>Not found</error>");
    return;
  }
};

module.exports = notFoundHandler;
