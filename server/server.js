const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req, res) => {
    console.log('input from front end: ', req.query.input);
    axios(
        (`http://api.openweathermap.org/data/2.5/weather?q=${req.query.input}&APPID=${process.env.WEATHER_API_KEY}`)
    )
    .then(response => {
        console.log(response.data)
        res.send(response.data)
        
    })
    .catch((error) => {
     console.log(error)
    })
    
       
    
        
})

module.exports = app;
