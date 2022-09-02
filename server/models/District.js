const mongoose = require('mongoose');

const DistrictSchema = mongoose.Schema({
  city: String,
  distName: String,
  mahalle: [String],
  hour: Number,
});

module.exports = mongoose.model('district', DistrictSchema);