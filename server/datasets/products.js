var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
          userid: String,
    productImage: String,
     productName: String,
     productSize: String,
    productPrice: String,
        inStock: String,
    productDes: String
    
});