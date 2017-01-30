var mongoose = require('mongoose');
var Cvs = require('../datasets/cvs');

module.exports.cvSave = function(req, res){
    console.log(req.body);
    var cv = new Cvs();
    cv.userid = req.body.userid;
    cv.fname = req.body.fname;
    cv.lname = req.body.lname;
    cv.resadd = req.body.resadd;
    cv.location = req.body.location;
    cv.email = req.body.email;
    cv.skill = req.body.skill;
    cv.experince = req.body.experince;
    cv.work = req.body.work;
    cv.hobbies = req.body.hobbies;
    
    cv.save(function(err, data){
        if(err){
            res.error(err);
        }else{
            res.status(200).json({message: "ok"});
            res.json(data);
        }
    });
    
}