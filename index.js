const http = require("http");
const path = require("path");
const fs = require("fs/promises");

const hostname = "127.0.0.1";
const port = "3000";

// async function readHtml() {
//   const filename = "./index.html";
//   try {
//     const data = await fs.readFile(filename, "utf-8");
//     console.log(data);

//     // return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// readHtml();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write("hello\n");

  async function readHtml() {
    const html = await fs.readFile("./index.html", "utf-8");
    res.end(html);
  }

  readHtml();
  //   res.end();
});

server.listen(port, hostname, () => {
  console.log(`server listening at ${hostname}:${port}`);
});
