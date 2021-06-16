const mongoose = require('mongoose')

const incidenceCategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

exports.incidenceCategoriesSchema = incidenceCategoriesSchema
