const { MongoClient } = require("mongodb");
const uri ="mongodb://localhost:27017"
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } catch(error) {
    console.log(error);
  }
}
const db = client.db("latihan");

module.exports = db;