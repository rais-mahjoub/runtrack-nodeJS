const http = require('http');
const fs = require('fs');
const url = new URL('http://localhost:8888')

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du répertoire:", err);
            return;
        }

        

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
});

server.listen(8888, () => {
    console.log('Serveur en écoute sur http://localhost:8888');
    // .open('http://localhost:8888');
});
