const express = require("express");
const router = express.Router();
const controller = require("../controller/mongodb");

router
  .get("/", controller.getData)
  .post("/", controller.inputData)
  .put("/:id", controller.putData)
 .delete("/:id", controller.deleteData)
  .get("/:id", controller.detailData);
module.exports = router;