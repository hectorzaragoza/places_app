const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')


//controller for profile route
router.get('/', (req, res)=>{
    db.marker.findAll()
    .then(foundData => {
        db.user.findAll({
            where: {id: 1}
        })
        .then(user => {
            let userName = user[0].name
            res.render('profile', {userName, foundData})
        })
    })
    .catch(error => {
        console.err
    })
})

router.delete('/:id', (req, res) => {
    // console.log('this is the id: ', req.params.id)
    db.marker.destroy({
        where: { id: req.params.id }
    })
    .then(deletedItem => {
        console.log('This is the deletedItem: ', deletedItem)
        res.redirect('/profile')
    })
    .catch(error => {
        console.error
    })
})

//get and put routes for UPDATE
router.get('/edit/:id', (req, res) => {
    db.marker.findAll({
        where: {id: req.params.id}
    })
    .then(placeToEdit => {
        console.log(`This is the editable place: ${placeToEdit}`)
        res.render('edit', {placeToEdit})
    })
    .catch(error => {
        console.error
    })
})

router.put('/edit/:id', (req, res) => {
    console.log('this is the new review in form: ', req.body.review)
    let newReview = req.body.review
    db.marker.update({
        review: newReview
    }, 
    {where: {id: req.params.id}})
    .then(
    res.redirect('/profile')
    )
    .catch(error => {
        console.error
    })
})


module.exports = router