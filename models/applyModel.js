const mongoose = require("mongoose");

const applySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    clubId: {
      type: String,
      required: true,
    },
    clubName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
      default: "pending",
    },
    message: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

const applyModel = mongoose.model("apply", applySchema);
module.exports = applyModel;
