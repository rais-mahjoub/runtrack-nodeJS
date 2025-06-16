const fs = require('fs')

fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du répertoire:", err);
        return;
    }

    console.log(data);
})