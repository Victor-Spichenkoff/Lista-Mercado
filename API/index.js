const express = require('express')
const app = express()

const prisma = require('./config/prisma')

app.db = prisma

const consign = require('consign')
consign({extensions: ['.ts', '.js']})
    .then('./config/bodyParser.js')
    .then('./functions')
    .then('./config/routes.js')
    .into(app)

app.listen(2006, ()=> console.log('Rodando na porta 2006'))