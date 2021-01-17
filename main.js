const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// routes
const students = require('./routes/students.routes')
require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/v1/students', students)

app.listen(process.env.PORT, ()=> {
    console.log(`Server on port ${process.env.PORT}`)
})