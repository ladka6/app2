const mongoose = require('mongoose');
const CitySchema = mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  dists: [String],
  hour: {
    type: Number,
    require: false
  },
  lat: {
    type: Number,
    require: false,
  },
  lng: {
    type: Number,
    require: false,
  }
});

module.exports = mongoose.model('city', CitySchema);