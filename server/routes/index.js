var express = require('express');
var router = express.Router();
var CitySchema = require('../models/Cities');
var DistrictSchema = require('../models/District');
var BolgeSchema = require('../models/Bolge');

router.get('/', function (req, res, next) {
  res.json("Connected");
});

router.get('/mersin', async function (req, res) {
  var city = await CitySchema.find({ city: "mersin" });
  res.json(city);
});
router.get('/hatay', async function (req, res) {
  var city = await CitySchema.find({ city: "hatay" });
  res.json(city);
});
router.get('/adana', async function (req, res) {
  var city = await CitySchema.find({ city: "adana" });
  res.json(city);
});
router.get('/mersin/Akdeniz', async function (req, res) {
  var dist = await DistrictSchema.find({ distName: "Akdeniz" });
  res.json(dist);
});

router.get('/mersin/Akdeniz/0', async function (req, res) {
  console.log("ege")
  var bolge = await BolgeSchema.find({ zone_id: 0 });
  res.json(bolge);
});

router.post('/mersin/Akdeniz/bolge', (req, res) => {
  var bolge = new BolgeSchema({
    city: "mersin",
    dist: "Akdeniz",
    bolgeAdi: "ABDULLAH ŞAHUTOĞLU MAHALLESİ",
    toplamArz: 1,
    toplamKullanim: 1,
    kayip: 1,
    kacak: 1,
  })
  bolge.save();
  res.json(bolge);
})

// router.post('/mersin', function (req, res) {
//   var city = new CitySchema({
//     city: "mersin",
//     dists: ["Akdeniz", "Mezitli", "Toroslar", "Deneme", "Deneme2"],
//     hour: 123,
//     lat: 1.1,
//     lng: 21.1
//   })
//   city.save();
//   res.json(city);
// });

module.exports = router;
