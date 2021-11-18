const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')

//controller for profile route
router.get('/', (req, res)=>{
    db.marker.findAll()
    .then(foundData => {
        console.log(foundData)
        db.user.findAll({
            where: {id: 1}
        })
        .then(user => {
            console.log(user)
            let userName = user[0].name
            res.render('profile', {userName, foundData})
        })
    })
    .catch(error => {
        console.err
    })
})

module.exports = router