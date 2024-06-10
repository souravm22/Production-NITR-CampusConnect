const userModel = require("../models/userModels");
const bcrypt = require("bcrypt"); // here that .js adding is not working in my case, this should work fine ig
const jwt = require("jsonwebtoken");
const applyModel = require("../models/applyModel");
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({
        message: "User Not Found",
        success: false,
      });
    } else {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(200).send({
          message: "Invalid Credentials, please verify",
          success: false,
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.status(200).send({
        message: "User Login Successful",
        success: true,
        token: token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: `Error in login controller ${error.message} `,
    });
  }
};

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(200).send({
        message: "user already exists",
        success: false,
      });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({
      message: "Registered Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `register controller ${error.message}`,
    });
  }
};

const authController = async (req, res) => {
  // console.log(req.headers);
  try {
    const user = await userModel.findOne({ _id: req.body.userId });

    if (!user) {
      return res.status(200).send({
        message: "user not found",
        succcess: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
    });
  }
};

const applyClubController = async (req, res) => {
  console.log(req.body);
  try {
    const newApply = new applyModel(req.body);
    await newApply.save();

    res.status(200).send({
      success: true,
      message: "Club application sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while applying",
    });
  }
};

const getUserApplicationsController = async (req, res) => {
  try {
    const application = await applyModel.find({
      userId: req.body.userId,
    });
    res.status(200).send({
      success: true,
      message: "Application fetched sucessfully",
      data: application,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Some issue in appl fetch",
      error,
    });
  }
};

module.exports = {
  loginController,
  registerController,
  authController,
  applyClubController,
  getUserApplicationsController,
};
