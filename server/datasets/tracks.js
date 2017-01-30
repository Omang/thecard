var mongoose = require('mongoose');

module.exports = mongoose.model('Track', {
    userid: String,
    tunes: [{
        trackImage: String,
             track: String, 
             date: {   type:Date, 
                    default: Date.now
                   }
        }]
});