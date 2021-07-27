const express = require('express')
var router = express.Router()
var {users} = require('../models/users')

//express parser
router.use(express.urlencoded({extended:false}));
router.use(express.json());

//for jwt
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const config = require('../secrets')
const passport = require('passport');

// V brings in the passport functions
require('../auth/index');

let requireLogin = passport.authenticate('local',{session:false})
let requireJwt = passport.authenticate('jwt',{session:false})


//function to return a jwt
const token = (user) => {
    let timestamp = new Date().getTime();
    return jwt.encode({sub:user.id,iat:timestamp},config.secrets)
}


router.get('/', (req, res)=>{
    users.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while retrieving users: ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/register', async (req, res) => {
    let password = bcrypt.hashSync(req.body.password,8);
    var newUser = new users({
        username: req.body.username,
        password: password
    })

    newUser.save((err, docs) => {
        if (!err) {
            let jwtToken = token(docs);
            return res.json({token:jwtToken})
            
        }
        else {
            console.log('Error while creating new user: ' + JSON.stringify(err, undefined, 2))
        }
    })
})//eo /register

router.post('/login',requireLogin,(req,res) => {

    res.json({token:token(req.user)})
}
)

router.get('/checkAuth', requireJwt, (req,res) => {
    res.json({success:"true"})
})

module.exports = router;