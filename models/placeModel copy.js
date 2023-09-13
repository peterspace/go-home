const mongoose = require('mongoose');

const placeSchema = mongoose.Schema(
  {
    countries: { type: Array, default: [] },
    states: { type: Array, default: [] },
    cities: { type: Array, default: [] },
    countriesCount: Number,
    statesCount: Number,
    citiesCount: Number,
  },
  { timestaps: true }
);

const Place = mongoose.model('Place', placeSchema);

module.exports = User;
