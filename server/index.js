const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const db = require("./db/routes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/factory-list", db.factory_list.getAll);
app.get("/factory-name", db.factory_name.getAll);

dotenv.config();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(process.env.PORT + " listening ...");
  }
});
