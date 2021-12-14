const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.header("token");
  if (!token)
    return res.status(401).json({ message: "You Don't Have Authorization" });
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken.user;
    next();
  } catch (e) {
    res.status(500).json({ message: "Invalid Token" });
  }
};
