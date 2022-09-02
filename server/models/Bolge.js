const mongoose = require('mongoose');

const BolgeSchema = mongoose.Schema({
  city: String,
  dist: String,
  bolgeAdi: String,
  toplamArz: Number,
  toplamKullanim: Number,
  kayip: Number,
  kacak: Number,
});

module.exports = mongoose.model('bolge', BolgeSchema);