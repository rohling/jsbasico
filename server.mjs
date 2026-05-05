// server.mjs
import { createServer } from 'node:http';

const a = 34;
const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello World!</h1> ${a}`);
});

// starts a simple http server locally on port 3000
server.listen(3000);

// run with `node server.mjs`