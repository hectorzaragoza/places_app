const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/:id', (req, res) => {
    db.marker.findAll({
        where: {id: req.params.id},
        include: [db.comment]
    })
    .then(placeDetail => {
        res.render('comment', {placeDetail})
    })
})

router.post('/:id/comments', (req, res) => {
    let formName = req.body.name
    let formComment = req.body.comment
    console.log('This is the id for this place: ', req.params.id)
    db.comment.create({
        name: formName,
        comment: formComment,
        userId: req.params.id,
        markerId: req.params.id    
    })
    .then(createdComment => {
        console.log ('This is the created content: ', createdComment)
        db.marker.findAll({
            where: {id: req.params.id}
        })
        .then(placeDetail => {
            res.render('comment', {placeDetail, createdComment})
        })
    })
})


module.exports = router