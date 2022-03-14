const User = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authorization = require("../../middleware/authorization");
const { check, validationResult } = require("express-validator");

router.get("/user-get", authorization, async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ users, "Users Length": users.length });
  } catch (e) {
    res.send("users list request error");
  }
});

router.post(
  "/register",
  [
    check("username", "username is not valid").not().isEmpty(),
    check("username", "username is not String").isString(),

    check("email", "email is not valid").isEmail(),

    check(
      "password",
      "password is not valid, it must be min 8 length"
    ).isLength({
      min: 8,
    }),
    check("role", "role is not valid").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { username, email, password, role } = req.body;

    try {
      let user = new User({ username, email, password, role });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt); // x-access-token (jwt)

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.SECRET_KEY,
        { expiresIn: "1m" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (e) {
      console.log(e.message);
      res.status(500).send("error in await");
    }
  }
);

router.post(
  "/login",
  [
    check("email", "email is not valid").isEmail(),

    check("password", "password is not valid").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json("user not found");
      }
      const passMatch = await bcrypt.compare(password, user.password);
      if (!passMatch) {
        return res.status(400).send("incorrect password");
      }
      const payload = {
        user: {
          user: user.id,
          password: user.password,
        },
      };

      jwt.sign(
        payload,
        process.env.SECRET_KEY,
        { expiresIn: "1m" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (e) {
      res.status(500).json({
        message: e,
      });
    }
  }
);
module.exports = router;
