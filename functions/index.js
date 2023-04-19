// Functions for Firebase SDK to create
// Functions and set up triggers.
const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({
  origin: true,
});
// The firebase Admin SDK to access RTDB.
const admin = require("firebase-admin");
admin.initializeApp();

const createCity = async () => {
// API call from teleport
  const response = await axios.get("https://api.teleport.org/api/urban_areas/");
  const urbanAreas = response.data._links["ua:item"];
  const randomCity = urbanAreas[Math.floor(Math.random() * urbanAreas.length)];
  const cityResponse = await axios.get(randomCity.href);
  const image = await axios.get(cityResponse.data._links["ua:images"].href);
  const city = cityResponse.data;

  const payload = {
    // change to unique id
    id: Math.floor(Math.random() * 100000),
    name: city.name,
    country: city.full_name.split(", ")[1],
    visited: false,
    image: image.data.photos[0].image.mobile,
  };
  return payload;
};

exports.createCity = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    // Create random city
    const city = await createCity();
    // Add city to Real Time Database
    const dbRef = admin.database().ref("cities");
    const newCityRef = dbRef.push();
    await newCityRef.set(city);
    // Send back a success message
    res.status(200).json({result: `New city ${city.name} added to database!`});
  });
});
