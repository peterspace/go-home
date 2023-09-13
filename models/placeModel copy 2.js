const mongoose = require('mongoose');

const placeSchema = mongoose.Schema(
  {
    country: {
      name: String,
      states: [String],
    },
  },
  { timestaps: true }
);

const Place = mongoose.model('Place', placeSchema);

module.exports = User;
