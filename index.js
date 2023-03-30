const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = "8080";

const filename = "index.html";

fs.readFile(filename, (err, data) => {
  if (err) {
    throw err;
  }
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log(`server listening at ${hostname}:${port}`);
  });
});
