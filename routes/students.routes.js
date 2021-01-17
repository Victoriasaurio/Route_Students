const express = require('express')
const routes = express.Router()
const studentController = require('../controllers/students.controller')

routes.post('/students', (req, res) => {
    const body = JSON.parse(JSON.stringify(req.body))
    let status = 201
    let msg = "Student was created"
    let ok = studentController.newStudent(body)
    if(!ok) {
        status = 401,
        msg = "Invalid data"
    }
    return res.status(status).send({
        status,
        data: body,
        msg
    })
})

module.exports = routes