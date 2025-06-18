const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du répertoire:", err);
        return;
    }

    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });

    server.listen(8888, () => {
        console.log('Serveur en écoute sur http://localhost:8888');
        // .open('http://localhost:8888');
    });
})
  

