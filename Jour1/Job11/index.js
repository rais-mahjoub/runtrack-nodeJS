// import open from 'C://Users/raisr/node_modules/open/index.js';
const http = require('http');
// const open = require('open');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World !');
});

server.listen(8888, () => {
  console.log('Serveur en écoute sur http://localhost:8888');
  // .open('http://localhost:8888');
});
