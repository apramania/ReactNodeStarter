const express = require('express')
const connectMySql = require('./config/db')
const path = require('path')
const dotenv = require('dotenv')

//Load Config
dotenv.config({ path: './config.env' })

connectMySql()

const app = express()



app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}...`))
