let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// model:
let flashcardSchema = require('../models/flashcard');

// CREATE 
router.route('/addflashcard').post((req, res, next) => {
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
router.route('/flashcard').get((req, res) => {
    flashcardSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get one card
router.route('/see-flashcard/:id').get((req, res) => {
    flashcardSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update 
router.route('/update-flashcard/:id').put((req, res, next) => {
    studentSchema.findByIdAndUpdate(req.params.id, {
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
router.route('/delete-flashcard/:id').delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
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