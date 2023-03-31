const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./contact-me.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Now listening on ${port}`);
});

// const filename = "index.html";

// fs.readFile(filename, (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     res.end();
//     console.log(req.url.includes("about"));
//   });

//   server.listen(port, hostname, () => {
//     console.log(`server listening at ${hostname}:${port}`);
//   });
// });
