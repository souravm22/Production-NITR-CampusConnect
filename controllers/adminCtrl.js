const userModel = require("../models/userModels");
const clubModel = require("../models/clubModel");
const applyModel = require("../models/applyModel");
const addClubController = async (req, res) => {
  try {
    // req.body.status = "pending"
    const newClub = new clubModel(req.body);
    await newClub.save();

    res.status(200).send({
      success: true,
      message: "Club added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while adding club",
    });
  }
};

const getAllClubsController = async (req, res) => {
  try {
    const clubs = await clubModel.find({});
    res.status(200).send({
      success: true,
      message: "All clubs data fetched successfully",
      data: clubs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching clubs",
      error,
    });
  }
};

const getClubInfoController = async (req, res) => {
  try {
    const club = await clubModel.findOne({ clubId: req.body.clubId });

    res.status(200).send({
      success: true,
      message: "Club data fetched",
      data: club,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching club details",
    });
  }
};

const updateClubController = async (req, res) => {
  try {
    const club = await clubModel.findOneAndUpdate(
      { clubId: req.body.clubId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Club info updated successfully",
      data: club,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Club profile update failed",
      error,
    });
  }
};

const getAllApplicationsController = async (req, res) => {
  try {
    const applications = await applyModel.find({});
    res.status(200).send({
      success: true,
      message: "Applications fetched successfully",
      data: applications,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting applications",
      error,
    });
  }
};

const updateApplicationController = async (req, res) => {
  try {
    const { applicationId, status, message } = req.body;
    const application = await applyModel.findByIdAndUpdate(applicationId, {
      status,
      message,
    });
    res.status(200).send({
      message: "Application updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Update application failed",
      success: false,
      error,
    });
  }
};
module.exports = {
  addClubController,
  getAllClubsController,
  getClubInfoController,
  updateClubController,
  getAllApplicationsController,
  updateApplicationController,
};
