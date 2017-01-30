var mongoose = require('mongoose');
var Cv = require('../datasets/cvs');

module.exports.ownCv = function(req, res){
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