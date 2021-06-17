require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const api = express()
const { router } = require('./api/routes')

mongoose.connect (
 'mongodb://localhost:27017/',
  {
    dbName: process.env.MONGODB || 'IMG',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) {
      console.log(`DB error: ${err}`)
      return
    }
    console.log('Connected to DB')

    api
      .use(morgan('dev'))
      .use(cors())
      .use(express.json())
      .use('/api', router)
      .listen(8080, (err) => {
        console.info('\n\n' + '>'.repeat(40))
        console.info(`💻  Reboot Server Live`)
        console.info(`📡  PORT: http://localhost:8080`)
        console.info(">".repeat(40) + "\n\n")
      })
  }
)
