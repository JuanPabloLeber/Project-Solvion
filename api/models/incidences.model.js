const mongoose = require('mongoose')
//const actionSchema = require('./action.model')
const clientSchema = require('./clients.model')

const incidenceSchema = new mongoose.Schema({
  subject: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  attachment: {
    type: String
  },
  startDate: {
    type: Date,
    required: true
  },
  finishDate: {
    type: Date,
    required: true
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
    required: true
  }],
  incidenceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'incidenceCategories',
    required: true
  },
 // actions: [actionSchema],
  client: [clientSchema]
})

const incidencesModel = mongoose.model('incidences', incidenceSchema)

exports.incidencesModel = incidencesModel
