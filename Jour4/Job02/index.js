const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'LaPlateforme';

async function main() {
    try {
        await client.connect();
        console.log("Connecté correctement à MongoDB");

        const db = client.db(dbName);

        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections);

    } catch (err) {
        console.error("Erreur de connexion à MongoDB", err);
    }
}

main().catch(console.error).finally(() => client.close());
