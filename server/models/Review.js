const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  likely: {
    type: String,
    required: true,
    enum: [
      "10 - Very likely",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1 - Not likely"
    ]
  },
  category: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  experience: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  interests: [String]
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
