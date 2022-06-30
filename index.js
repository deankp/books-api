// Require needed modules
const express = require('express')
const app = express()

// Initialize the app object

app.use(express.json())

// Create a homepage route
app.get('/', function (req, res) {
    res.send('Hola')
})

// Listen for connections
app.listen(3000, function () {
    console.log('I am awake!')
})