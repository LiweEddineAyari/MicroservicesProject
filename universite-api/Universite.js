const mongoose = require('mongoose');

const UniversiteSchema = new mongoose.Schema({
  nomUniversite: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  }
});

const Universite = mongoose.model('Universite', UniversiteSchema);

module.exports = Universite;
