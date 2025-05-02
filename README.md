# Node.js - Basic Overview
📌 What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 engine.

It allows server-side scripting using JavaScript.

Event-driven, non-blocking I/O model makes it lightweight and efficient.

## Key Features:

- Asynchronous & Event-Driven
- Single-threaded but highly scalable (thanks to the Event Loop)
- NPM (Node Package Manager) – largest ecosystem of open-source libraries

 ``` Basic 
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
