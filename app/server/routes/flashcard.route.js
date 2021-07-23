let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// model:
let flashcardSchema = require('../models/flashcard');

// CREATE 
router.route('/create').post((req, res, next) => {
    flashcardSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ 
router.route('/').get((req, res) => {
    flashcardSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get one card
router.route('/').get((req, res) => {
    flashcardSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update 
router.route('/update').put((req, res, next) => {
    flashcardSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Flashcard update successful')
        }
    })
})

// Delete 
router.route('/delete').delete((req, res, next) => {
    flashcardSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;