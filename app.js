const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {

const url = req.url;
const method = req.method;

if (url === '/') { // string and has that value for ===
 
   res.write('<html>');
   res.write('<head><title>Enter any message</title></head>');
   res.write('<body><form action = "/message" method = "POST"> <input type = "text" name = "message"> <button type = "submit">send<form><body>'); // a get request automaic to be send when you click a link and entre a url
   res.write('</html>');
   return res.end();
 }
       if ( url ===  "/message" && method === 'POST') {
         fs.writeFile('message.text')

       }

   res.setHeader('content-type','text/html');
   res.write('<html>');
   res.write('<head><title>my first page , hello world shoeb </title></head>');
   res.write('<body><h1>Shoeb<body></h1></body>');
   res.write('</html>');
   res.end();

});

server.listen(3000);
