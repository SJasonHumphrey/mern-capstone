const express = require('express')
var router = express.Router()
var {users} = require('../models/users')

router.get('/', (req, res)=>{
    users.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while retrieving users: ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', (req, res) => {
    var newUser = new users({
        username: req.body.username,
        password: req.body.password
    })

    newUser.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new user: ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router