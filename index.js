const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(morgan('dev'))






app.listen(3030, () => {
    console.log('Escutando na porta 3030')
})