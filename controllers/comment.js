const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/:id', (req, res) => {
    db.marker.findAll({
        where: {id: req.params.id},
        include: [db.user, db.comment]
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
        comment: formComment,
        userId: req.params.id,
        markerId: req.params.id    
    })
    .then(createdComment => {
        res.redirect('/comment')
    })
})


module.exports = router