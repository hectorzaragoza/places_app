// require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')


//Get Method that renders the Main page
//Will need to add db route to get records of places to render on map
router.get('/', (req, res) => {
    db.marker.findAll()
    .then(existingPlaceData => {
        res.render('main', {existingPlaceData})
    })
    .catch(error => {
        console.error
    })
})

//Get Method that renders the add place page with the form
router.get('/addplace', (req, res) => {
    res.render('addplace')
})

//Post Method that takes form data, pings MapBox forward Geocoding API, and creates record in the marker database
router.post('/addplace', (req, res) => {
    let formName = req.body.name
    let streetNumber = req.body.streetNumber
    let streetName = req.body.streetName
    let cityName = req.body.cityName
    let stateName = req.body.stateName
    let zipCode = req.body.zipCode
    let formCategory = req.body.category
    let formReview = req.body.review

    console.log('this is the req.body', req.body)
    
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${streetNumber}%20${streetName}%20${cityName}%20${stateName}%20${zipCode}%20.json?access_token=pk.eyJ1IjoicGxhY2VzLWFwcCIsImEiOiJja3Z2NWdidXpienpyMnZwZ3VtYXA5ZzZ3In0.xPD6PBPl3J-fosIjAtzYSQ`)
    .then(apiResponse => {
        // console.log(apiResponse)
        // console.log(apiResponse.data.features)
        // console.log('This is the place name: ', formName)
        // console.log('This is the category: ', formCategory)
        // console.log('This is the review: ', formReview)
        // console.log('This is the api Place Name: ', apiResponse.data.features[0].place_name)
        // console.log('This is the longitude: ', apiResponse.data.features[0].center[0])
        // console.log('This is the latitude: ', apiResponse.data.features[0].center[1])

        //Set up the Create route for the marker table
        db.marker.create({
            name: formName,
            category: formCategory,
            review: formReview,
            placeName: apiResponse.data.features[0].place_name,
            long: apiResponse.data.features[0].center[0],
            lat: apiResponse.data.features[0].center[1]
        })
        .then(createdUser => {
            res.redirect('/main')
        })
        
    })
    .catch(error => {
        console.log(error)
    })
})



module.exports = router