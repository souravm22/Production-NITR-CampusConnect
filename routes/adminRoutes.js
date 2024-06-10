const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  addClubController,
  getAllClubsController,
  getClubInfoController,
  updateClubController,
  getAllApplicationsController,
  updateApplicationController,
} = require("../controllers/adminCtrl");

const router = require("express").Router();

// add club || post

router.post("/add-club", authMiddleware, addClubController);

// get all clubs || get
router.get("/get-all-clubs", authMiddleware, getAllClubsController);

// get a single club info || get
router.post("/get-club-info", authMiddleware, getClubInfoController);

//update a club details || post
router.post("/update-club", authMiddleware, updateClubController);

// view all applications || post
router.get("/get-applications", authMiddleware, getAllApplicationsController);

// accept or rejct application || post
router.post("/update-application", authMiddleware, updateApplicationController);
module.exports = router;
