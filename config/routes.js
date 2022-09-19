const express = require('express')
const routes = express.Router()



routes.get('/home', (req, res) => {
    return res.json(db)
})

routes.get('/cadastro', (req, res) => {
    
})

routes.get('/login', (req, res) => {
    
})


module.exports = routes