// require('dotenv').config()
const express = require('express')
const router = express.Router()

const axios = require('axios')
const testAddress = '83350%20camino%20las%20brisas%20coachella%20california%2092236.json?'
//Testing storing my key in dotenv but can't get it to work using exposed key instead for the time being
// const dotEnvKey = process.env.MY_KEY


router.get('/', (req, res) => {
    res.render('main')
    // let name = req.body.name
    // let streetNumber = req.body.streetNumber
    // let streetName = req.body.streetName
    // let cityName = req.body.cityName
    // let stateName = req.body.stateName
    // let zipCode = req.body.zipCode
    // let category = req.body.category
    // let review = req.body.review
    
    // axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${streetNumber}%20${streetName}%20${cityName}%20${stateName}%20${zipCode}%20.json?access_token=pk.eyJ1IjoicGxhY2VzLWFwcCIsImEiOiJja3Z2NWdidXpienpyMnZwZ3VtYXA5ZzZ3In0.xPD6PBPl3J-fosIjAtzYSQ`)
    // .then(apiResponse => {
    //     console.log(apiResponse)
    //     console.log(apiResponse.data.features)
    //     res.render('main', {apiResponse})
    // })
    // .catch(error => {
    //     console.log(error)
    // })
})

router.get('/addplace', (req, res) => {
    res.render('addplace')
})

router.post('/addplace', (req, res) => {
    let name = req.body.name
    let streetNumber = req.body.streetNumber
    let streetName = req.body.streetName
    let cityName = req.body.cityName
    let stateName = req.body.stateName
    let zipCode = req.body.zipCode
    let category = req.body.category
    let review = req.body.review

    console.log('this is the req.body', req.body)
    
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${streetNumber}%20${streetName}%20${cityName}%20${stateName}%20${zipCode}%20.json?access_token=pk.eyJ1IjoicGxhY2VzLWFwcCIsImEiOiJja3Z2NWdidXpienpyMnZwZ3VtYXA5ZzZ3In0.xPD6PBPl3J-fosIjAtzYSQ`)
    .then(apiResponse => {
        // console.log(apiResponse)
        console.log(apiResponse.data.features)
        res.render('main', {apiResponse})
    })
    .catch(error => {
        console.log(error)
    })
})



module.exports = router