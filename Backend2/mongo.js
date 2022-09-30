const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://Brender:Brexh1955@cluster0.z3ofwce.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, (error,client) =>{
    if (error){
        return console.log('unable to connect to database')
    }

    const db = client.db (databaseName);

    db.collection("users").insertMany(
        {
            name: "Brender",
            age: 24,
        },
        (error, results) => {
            if (error){
                return console.log("unable to create user");
            }
            console.log(results);
        }
    );
});

// // import { MongoClient } from "mongodb";
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient

// // Replace the uri string with your MongoDB deployment's connection string.
// const connectionURL = 'mongodb+srv://Brender:Brexh1955@cluster0.z3ofwce.mongodb.net/?retryWrites=true&w=majority'
// const databaseName = 'task-Manager2'

// const db = client.db(databaseName);

// interface ood
// {
//   name: string;
//   healthy: boolean;
// }

// async function run() {
//   try {
//     const database = client.db("insertDB");
//     // Specifying a schema is optional, but it enables type hints on
//     // finds and inserts
//     const foods = database.collection<Food>("foods");

//     const result = await foods.insertMany(
//       [
//         { name: "cake", healthy: false },
//         { name: "lettuce", healthy: true },
//         { name: "donut", healthy: false },
//       ],
//       { ordered: true }
//     );
//     console.log(`${result.insertedCount} documents were inserted`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
