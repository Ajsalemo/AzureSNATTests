const pongController = (res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "pong" }));
  res.end();
};

module.exports = pongController;
