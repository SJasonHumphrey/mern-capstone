let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// model:
let userSchema = require('../models/users');

// CREATE 
router.route('/register').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ 
router.route('/login').get((req, res) => {
    userSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get one user
router.route('/login').get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// // Update 
// router.route('').put((req, res, next) => {
//     userSchema.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//             console.log(error)
//         } else {
//             res.json(data)
//             console.log('user update successful')
//         }
//     })
// })

// // Delete 
// router.route('').delete((req, res, next) => {
//     userSchema.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })

module.exports = router;