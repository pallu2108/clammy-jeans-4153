const { Router } = require("express");
const { userModel } = require("../models/User.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const adminRoutes = Router();

adminRoutes.post("/", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email, role: "admin" });
  if (user) {
    let hash = user.password;
    bcrypt.compare(password, hash, async function (err, result) {
      if (result) {
        var token = jwt.sign({ userId: user._id }, process.env.privateKey);
        res.send({
          message: "Login Successful",
          token,
        });
      } else {
        res.status(400).send({ Error: "Something Error" });
      }
    });
  } else {
    res.status(400).send("Not authorized. Contact Admin");
  }
});

module.exports = {
  adminRoutes,
};
