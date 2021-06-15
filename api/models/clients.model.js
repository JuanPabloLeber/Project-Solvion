const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema ({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  address: {
    type: String
  }
})

const clientmodel = mongoose.model('client', clientSchema)

exports.clientmodel = clientmodel