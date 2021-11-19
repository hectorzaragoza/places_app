const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/:id', (req, res) => {
    db.marker.findOne({
        where: {id: req.params.id}
    })
    .then(placeDetail => {
        res.render('comment', placeDetail)
    })
})


module.exports = router