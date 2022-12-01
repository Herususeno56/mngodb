const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URL);

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