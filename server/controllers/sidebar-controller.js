var mongoose = require('mongoose');
var Cv = require('../datasets/cvs');
var Ad = require('../datasets/products');
var Cm = require('../datasets/community');

module.exports.checkCv = function(req, res){
    console.log(req.body.userid);
    var userid = req.body.userid;
    Cv.find({userid: userid}).exec(function(error, results){
        if(error){
            console.log(error);
        }else{
            console.log(results);
            res.json(results);
        }
    });
}
module.exports.checkAds = function(req, res){
    var userid = req.body.userid;
    Ad.find({userid: userid}).exec(function(error, results){
        if(error){
            res.error(error);
        }else{
            res.json(results);
        }
    });
}
module.exports.checkComs = function(req, res){
    var userid = req.body.userid;
    Cm.find({userid: userid}).exec(function(error, results){
        if(error){
            res.error(error);
        }else{
            res.json(results);
        }
    })
}

