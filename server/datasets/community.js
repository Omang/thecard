var mongoose = require('mongoose');

module.exports = mongoose.model('Community', {
    userid: String,
    comName: String,
    comContent: String,
    comImage: String,
    comdate: String
})