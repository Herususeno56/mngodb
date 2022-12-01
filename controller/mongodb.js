const { ObjectId } = require("mongodb");
const db = require("../config/mongodb");

const controller = {
  inputData: async (req, res) => {
    const { name, price, stock, status } = req.body;
    db.collection("lathiandb")
      .insertOne({ name, price, stock, status })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  },

  getData: async (req, res) => {
    const name = req.query.name || '';
    db.collection("lathiandb")
      .find()
      .toArray()
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  },

   putData : async (req, res) => {
    const { name, price, stock, status } = req.body;
    db.collection("lathiandb")
    .updateOne({_id:ObjectId(req.params.id)},{ $set : {name, price, stock, status}})
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
    },

   deleteData : async (req, res) => {
    db.collection("lathiandb")
    .deleteOne({_id:ObjectId(req.params.id)})
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
    },

    detailData : async (req, res) => {
      db.collection("lathiandb")
      .findOne({_id:ObjectId(req.params.id)})
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
     }
};

module.exports = controller;
