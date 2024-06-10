const express = require("express");
const {
  loginController,
  registerController,
  authConroller,
  authController,
  applyClubController,
  getUserApplicationsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

//routes
// login post
router.post("/login", loginController);

// register post

router.post("/register", registerController);

// auth post
router.post("/getUserData", authMiddleware, authController);

// apply club || post
router.post("/apply-club", authMiddleware, applyClubController);

// get application
router.get(
  "/get-user-applications",
  authMiddleware,
  getUserApplicationsController
);

module.exports = router;
