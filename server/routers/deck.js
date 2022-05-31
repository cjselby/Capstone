const { Router } = require("express");
const Deck = require("../models/Deck");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newDeck = new Deck(request.body);
  newDeck.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
