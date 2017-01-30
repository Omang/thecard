var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var User = require('../datasets/users');

var generateJwt = function(){
     jwt.sign({
        _id: user.id,
        email: user.email,
        name: user.username,
    }, "Mysecret");
}


module.exports.registerUser = function(req, res){
    console.log(req.body);
    var password = req.body.password;
    var salt = crypto.randomBytes(16).toString('hex');
    var hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 
                                 function(err, hash){
                 if(err){ throw err;}
                  hash.toString('hex');
                });
    
    
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.salt = salt;
    user.hash = hash;
    
    user.save();
}
module.exports.login = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
       User.findOne({email: email}).exec(function(err, user){
        
              if(err){
         res.error(err);
    }
    if(!user){
        console.log("user not found");
     res.json({message: "incorrect details"});
    }else{
        var salt = user.get("salt");
        var userhash = user.get("hash");
        console.log(salt);
        var hash = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
        if(!userhash == hash){
        console.log("wrong password");
        res.json({
            message: 'Password is wrong'
        });
        }
        console.log("user found");
        var response = {
        _id: user.id,
        //email: user.email,
        name: user.username,
    }
        res.json(response);
        //console.log(token);
        
    }
    
});
}

module.exports.getProfile = function(req, res){
    
    if(!req.payload._id){
        res.status(401).json({
            "message": "acccess denied"
        });
        
    }else{
        User.findById(req.payload._id).exec(function(err, user){
            res.status(200).json(user);
        });
    }
}




