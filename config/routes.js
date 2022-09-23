const express = require('express')
const routes = express.Router()
const produtodata = require('../data/produtoData');




routes.get('/product/:id', produtodata.findById);




module.exports = routes