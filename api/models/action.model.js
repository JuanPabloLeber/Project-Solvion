const mongoose = require('mongoose')

const actionSchema = new mongoose.Schema({
  done: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: [true, 'Status is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  finishDate: {
    type: Date,
    required: [true, 'Finish date is required']
  },
  technicianId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
    required: true
  }
})

const actionModel = mongoose.model('action', actionSchema)

exports.actionModel = actionModel
