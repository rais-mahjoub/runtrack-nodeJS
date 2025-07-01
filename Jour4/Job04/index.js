const mongoose = require('mongoose');

const yearSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    }
});

const Year = mongoose.model('Year', yearSchema);

const url = 'mongodb://localhost:27017/LaPlateforme';

// Se connecter à MongoDB en utilisant Mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connecté à MongoDB avec Mongoose");

        return Year.create({
            year: 'Bachelor 1'
        },{
            year: 'Bachelor 2'
        },{
            year: 'Bachelor 3'
        });
    })
    .then(year => {
        console.log("Année créée:", year);
    })
    .catch(err => {
        console.error("Erreur de connexion ou de création de l'année:", err);
    })
    .finally(() => {
        mongoose.connection.close();
    });
        