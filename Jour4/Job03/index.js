// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

// Définir le schéma "student"
const studentSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     // required: true,
    //     unique: true
    // },
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    students_number: {
        type: Number,
        required: true,
        //unique: true
    },
    year_id: {
        type: Number,
        required: true,
    }
    // Ajoutez d'autres champs selon vos besoins
});

// Créer le modèle "Student" à partir du schéma
const Student = mongoose.model('Student', studentSchema);

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017/LaPlateforme';

// Se connecter à MongoDB en utilisant Mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connecté à MongoDB avec Mongoose");

        // Exemple d'utilisation du modèle Student
        return Student.create({
            firstname: 'Bob',
            lastname: 'Lebricoleur',
            students_number: 22000002,
            year_id: 3
        },{
            firstname: 'John',
            lastname: 'Doe',
            students_number: 23000002,
            year_id: 2
        },{
            firstname: 'Marine',
            lastname: 'Dupont',
            students_number: 24000002,
            year_id: 1
        });
    })
    .then(student => {
        console.log("Étudiant créé:", student);
    })
    .catch(err => {
        console.error("Erreur de connexion ou de création de l'étudiant:", err);
    })
    .finally(() => {
        mongoose.connection.close();
    });
