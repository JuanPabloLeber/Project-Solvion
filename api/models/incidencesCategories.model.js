const mongoose = require('mongoose')

const incidenceCategoriesSchema = new mongoose.Schema({
  category: {
    type: String
  }
})

const incidenceCategoriesModel = mongoose.model('incidenceCategories', incidenceCategoriesSchema)

exports.incidenceCategoriesModel = incidenceCategoriesModel