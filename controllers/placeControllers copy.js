const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Place = require('../models/placeModel');
const generateToken = require('../config/generateToken');

const createCountry = asyncHandler(async (req, res) => {
  const { country, state } = req.body;

  let allCountries = await Place.find();

  let allStates = [];
  let txExists = false;
  let stateExists = false;
  let countryExists = false;

  let newPlace;

  countryExists = await Promise.all(
    allCountries.map(async (x) => {
      if (x?.name === country) {
        allStates = x?.states;
        return true;
      }
    })
  );

  if (!countryExists) {
    newPlace = new Place({
      country: {
        name: country,
        state: [state],
      },
    });
  }

  if (countryExists === true) {
    stateExists = await Promise.all(
      allStates.map(async (x) => {
        if (x === state) {
          return true;
        }
      })
    );
  }

  if (!stateExists) {
    newPlace = new Place({
      country: {
        name: country,
        state: [state, ...allStates],
      },
    });
    return;
  }

  if (stateExists) {
    return;
  }

  const savedPlace = await newPlace.save();
  console.log({ savedPlace: savedPlace });

  if (savedPlace) {
    res.status(200).json(savedPlace);
  }
  console.log('Place:', savedPlace);
});

// const getAllPlaces = asyncHandler(async (req, res) => {
//   const places = await Place.findById(); // get managers userId from "protect middleware"

//   res.json(places);
// });

const getAllCountries = asyncHandler(async (req, res) => {
  const Countries = await Place.find(); // get managers userId from "protect middleware"

  res.json(Countries);
});

const getAllStatesByCountry = asyncHandler(async (req, res) => {
  const { country } = req.params;
  const places = await Place.find({ country: country }); // get managers userId from "protect middleware"

  res.json(places);
});

module.exports = {
  allUsers,
  registerUser,
  login,
  usersAdmin,
  adminLogin,
  getUser,
  loginStatus,
  updateUser,
  getAllUsers,
  getTransactions,
  getTransactionByUserId,
  getUserById,
};
