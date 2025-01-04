//Expressを使わないバニラNode.jsの記述を学ぶための内容
// const http = require('http');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write('<html>');
//     return res.end();
//   }
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title><head>');
//   res.write('<body><h1>Hello From Node.js</h1><body>');
//   res.write('<html>');
//   res.end();
// });

// server.listen(8001);

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('In the middleware!');
  next();
})

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello Express</h1>');
})

app.listen(8002);