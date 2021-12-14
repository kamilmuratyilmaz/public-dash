const client = require("../db");

const getAll = (request, response) => {
  client.query("SELECT * FROM factory_name", (err, result) => {
    if (!err) {
      response.status(200).json(result.rows);
    } else {
      console.log("factory_name getAll error" + err);
    }
  });
};

module.exports = {
  getAll,
};
