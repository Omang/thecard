var mongoose = require('mongoose');

module.exports = mongoose.model('Cvs', {
    userid: String,
    fname: String,
    lname: String,
    resadd: String,
    location: String,
    email: String,
    skill: String,
    experince: String,
    work: String,
    hobbies: String
})