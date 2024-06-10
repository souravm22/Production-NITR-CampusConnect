const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
  {
    clubId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    clubType: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
      required: true,
    },
    clubInfo: {
      type: String,
      required: true,
    },
    resources: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    applicationForm: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const clubModel = mongoose.model("clubs", clubSchema);
module.exports = clubModel;
