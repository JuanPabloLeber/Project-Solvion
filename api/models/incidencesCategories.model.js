const mongoose = require('mongoose')

const incidenceCategoriesSchema = new mongoose.Schema({
  categories: [{
    type: String
  }]
})

exports.incidenceCategoriesSchema = incidenceCategoriesSchema
