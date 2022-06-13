const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  season: {
    type: String,
    required: true,
    enum: ["Summer", "Spring", "Fall", "Winter"]
  },
  home: {
    type: String,
    required: true,
    enum: ["yes", "no"]
  },
  group: {
    type: String,
    enum: ["yes", "no"]
  },
  free: {
    type: String,
    required: true,
    enum: ["yes", "no"]
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
