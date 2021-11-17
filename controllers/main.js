// require('dotenv').config()
const express = require('express')
const router = express.Router()

const axios = require('axios')
const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const testAddress = '83350%20camino%20las%20brisas%20coachella%20california%2092236.json?'
//Testing storing my key in dotenv but can't get it to work using exposed key instead for the time being
// const dotEnvKey = process.env.MY_KEY
const myKey = 'access_token=pk.eyJ1IjoicGxhY2VzLWFwcCIsImEiOiJja3Z2NWdidXpienpyMnZwZ3VtYXA5ZzZ3In0.xPD6PBPl3J-fosIjAtzYSQ'

// const apiRequest = baseUrl+testAddress+myKey


router.get('/', (req, res) => {
    axios.get(baseUrl+testAddress+myKey)
    .then(apiResponse => {
        console.log(apiResponse)
        console.log(apiResponse.data.features)
        res.render('main', {apiResponse})
    })
    .catch(error => {
        console.log(error)
    })
})

router.get('/addplace', (req, res) => {
    res.render('addplace')
})


module.exports = router