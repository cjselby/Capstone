const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  customer: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  likely: {
    type: String,
    required: true,
    enum: [
      "ten",
      "nine",
      "eight",
      "seven",
      "six",
      "five",
      "four",
      "three",
      "two",
      "one"
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

//passing in reviewSchema to create a model named Review which will be stored in the Review variable
const Review = mongoose.model("Review", reviewSchema);

//exporting Review to make available outside the model file
module.exports = Review;
