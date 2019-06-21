const http = require("http");

const server = http.createServer((req, res) => {
  res.end("The first response on Server");
});

server.listen(process.env.PORT || 3000);
