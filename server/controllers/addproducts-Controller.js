var mongoose = require('mongoose');
var fs = require('fs-extra');
var path = require('path');
var Product = require('../datasets/products');

module.exports.addproducts = function(req, res){
    
    var userid = req.body.userid;
    var file = req.files.file;
    
   // var timeNow = new Date().toISOString();

    var tempPath = file.path;
    var targetPath = path.join(__dirname, "../../uploads/" + userid + file.name);
    var savePath = "/uploads/" + userid + file.name;
    fs.rename(tempPath, targetPath, function(err){
        if(err){
            res.error(err)
        }else{
            var product = new Product();
            product.userid = req.body.userid;
            product.productImage = savePath;
            product.save(function(error, result){
                if(error){
                    res.error(error);
                }else{
                    res.json(result);
                }
                
            });
        }
    })
    
}

module.exports.saveProduct = function(req, res){
    
    if(req.body){
        var user_id = req.body.userid;
        Product.findOne({userid: user_id}, function(error, product){
            if(error){
                res.error(error);
            }else{
                var productItem = product;
                productItem.productName = req.body.productname;
                productItem.productSize = req.body.productsize;
                productItem.productPrice = req.body.productprice;
                productItem.inStock = req.body.productinstock;
                productItem.productDes = req.body.productdescrip;
               
                product.save(function(error, results){
                   if(error){
                       res.error(error);
                   }else{
                       res.json(results);
                   } 
                });
                
            }
        });
    
    
}
}


module.exports.getProduct = function(req, res){
    
    if(req.body){
        var user_id = req.body.userid;
        
        Product.findOne({userid: user_id}, function(error, results){
           if(error){
               res.error(error);
           }else{
               res.json(results);
           }
        });
    }
}








