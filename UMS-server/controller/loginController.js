const users = require("../models/userModel");

exports.loginController = async (req, res) => {
  console.log("loginController");
  const { password, email } = req.body;

  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      if (password == existingUser.password) {
        res.status(200).json({ user: existingUser });
      } else {
        res.status(409).json("Incorrect Email / password");
      }
    } else {
      res
        .status(409)
        .json("Invalid Email... Please Register to access to Cookpedia!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
