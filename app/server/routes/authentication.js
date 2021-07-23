const express = require('express');
const router = express.Router();

// bring in db 

//express parser
router.use(express.urlencoded({extended:false}));
router.use(express.json());

//for encryption
const bcrypt = require('bcryptjs');

//json web tokens
const jwt = require('jwt-simple');

//passport
const passport =  require('passport');
















module.exports = router;