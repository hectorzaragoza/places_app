const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/:id', (req, res) => {
    db.marker.findAll({
        where: {id: req.params.id}
    })
    .then(placeDetail => {
        res.render('comment', {placeDetail})
    })
})

router.post('/:id/comments', (req, res) => {
    let formName = req.body.name
    let formComment = req.body.comment
    db.comment.create({
        name: formName,
        comment: formComment    
    })
    .then(createdComment => {
        console.log ('This is the created content: ', createdComment)
        res.render('comment')
    })
})


module.exports = router