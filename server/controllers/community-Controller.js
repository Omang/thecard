var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs-extra');
var Community = require('../datasets/community');

module.exports.createCom = function(req, res){

    var userid = req.body.userid;
    var file = req.files.file;
    var datenow = new Date().toISOString();
        datenow = datenow.replace("-", ".");
        datenow = datenow.replace("-", ".");
        datenow = datenow.replace(":", ".");
        datenow = datenow.replace(":", ".");
    
    console.log(datenow);
    var tempPath = file.path;
    var targetPath = path.join(__dirname, "../../user_oracle/" + userid + datenow + file.name);
    var savePath = "/user_oracle/" + userid + datenow + file.name;
    
    fs.rename(tempPath, targetPath, function(err){
        if(err){
            res.error(err);
        }else{
            var com = new Community();
            com.userid = req.body.userid;
            com.comName = req.body.comNane;
            com.comContent = req.body.comContent;
            com.comImage = savePath;
            com.comdate = datenow;
            com.save(function(error, results){
                if(error){
                    res.error(error);
                }else{
                    res.json(results);
                }
            });
            
        }
    });
    
}
module.exports.getComs = function(req, res){
    var user_id = req.body.userid;
    Community.findOne({userid: user_id}, function(error, results){
        if(error){
            res.error(error);
        }else{
            res.json(results);
        }
    });
}
