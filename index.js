const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const routers = require("./routes/mongodb");

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", routers);
app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});