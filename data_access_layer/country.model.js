const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  countryName: { type: String, required: false },
  countryCity: { type: String, required: false},
  lengthOfStay: { type: Number, required: true },
  wouldVisitAgain: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;