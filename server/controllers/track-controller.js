var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs-extra');
var Tracks = require('../datasets/tracks');

module.exports.trackSave = function(req, res){
    console.log(req.body);
    console.log(req.files);
    var userid = req.body.userid;
    var file = req.files.file;
    
    var datenow = new Date().toISOString();
        datenow = datenow.replace("-", ".");
        datenow = datenow.replace("-", ".");
        datenow = datenow.replace(":", ".");
        datenow = datenow.replace(":", ".");
    
    var tempPath = file.path;
    var targetPath = path.join(__dirname, "../../user_media/" + datenow + userid + file.name);
    var savePath = "/user_media/" + datenow + userid + file.name;
    
    fs.rename(tempPath, targetPath, function(error){
        if(error){
            res.error(error);
        }else{
            var tracks = new Tracks();
                tracks.userid = userid;
                tracks.tunes.push({track: savePath});
                tracks.save(function(error, response){
                    if(error){
                        res.error(error);
                    }else{
                        res.json(response);
                    }
                });
            }
    });
    
    
    
}


module.exports.getTracks = function(req, res){
    var userid = req.body.userid;
    
    Tracks.find({userid: userid}).exec(function(error, results){
        if(error){
            res.error(error);
        }else{
            res.json(results);
        }
    })
}