const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    const indexFilePath = path.resolve(__dirname, 'index.html'); 
    const aboutFilePath = path.resolve(__dirname, 'about.html');
    const erreurFilePath = path.resolve(__dirname, 'error.html');

    const index = await fs.readFileSync(indexFilePath, 'utf-8');
    const about = await fs.readFileSync(aboutFilePath, 'utf-8');
    const erreur = await fs.readFileSync(erreurFilePath, 'utf-8')

    const url = new URL(`http://localhost${req.url}`);    
    
    switch (url.pathname) {
        case '/':
        case '/index':
            res.write(index);
            break;
        case '/about':
            res.write(about);
            break;
        default:
            res.write(erreur);
            break;
    }
    res.end();
});

server.listen(8889, () => {
    console.log('Serveur en écoute sur http://localhost:8889');
});
