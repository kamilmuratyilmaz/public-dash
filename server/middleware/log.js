const Log = require("../mongodb/models/log");

module.exports = async (req, res, next) => {
  try {
    let requestBody = { ...req.body };
    let log = new Log({ requestBody });
    await log.save();
    next();
  } catch (e) {
    res.send("log module error");
  }
};
