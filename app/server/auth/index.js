const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcryptjs');
//bring in db
var {users} = require('../models/users');
const config = require('../secrets');


//local strategy - inital login
let localLogin = new LocalStrategy( async (username,password,done)=>{
    try{
        let records = await users.find({username:username})
        console.log(records)
            if (records != null){
                bcrypt.compare(password,records[0].password,(err,isMatch)=>{
                    if(err){
                        return done(err)
                    }
                    if(!isMatch){
                        return done(null,false)
                    }
                    return done(null,records[0])
                })

            }else{
                return done(null,false);
            }

    } catch(e) {
        return done(e);
    }
    
        
})


//jwt strategy - once user has a jwt

let jwtOptions ={
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:config.secrets,
    passReqToCallback:true
} 

let jwtLogin = new JwtStrategy(jwtOptions,async (req,payload,done) => {
    try {
        let user = await users.find({id:payload.sub});

        if(user){
            done(null,user);
        }
        else{
            done(null,false)
        }
    } catch (e) {
        return done(e)
    }
})

passport.use(localLogin);
passport.use(jwtLogin);

