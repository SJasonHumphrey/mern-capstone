const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcryptjs');
//bring in db
const config = require('../secrets');




//local strategy - inital login
let localLogin = new LocalStrategy(()=>{
    
})


//jwt strategy - once user has a jwt 