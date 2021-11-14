const express = require('express')
const router = express.Router()
const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = 'pk.eyJ1IjoicGxhY2VzLWFwcCIsImEiOiJja3Z2NWFrc3MzeW1vMm9tdGJtM3BlcjVqIn0.1z5SvQW8vrbUnxRBelWG1Q';

let userLong = '';
let userLat = '';

document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(position => {
        let userLong = position.coords.longitude
        let userLat = position.coords.latitude
        let userLocation = [userLong, userLat]

        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 16 // starting zoom
        });
    })
})

router.get('/main', (req, res) => {
    res.render('/main')
})

module.exports = router