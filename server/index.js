const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authorization = require("./middleware/authorization");
const log = require("./middleware/log");

const db = require("./db/routes");
const user = require("./mongodb/router/user");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", log, user);
app.get("/factory-list", authorization, db.factory_list.getAll);
app.get("/factory-name", authorization, db.factory_name.getAll);

dotenv.config();

mongoose.connect(
  process.env.MONGO_DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected Mongo Database");
    }
  }
);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(process.env.PORT + " listening ...");
  }
});
