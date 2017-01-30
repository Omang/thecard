var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartyMiddleware = multipart();
var passport = require('passport');
var crypto = require('crypto');
var jwt = require('express-jwt');

var app = express();

var auth = jwt({
    secret: 'Mysecret',
    userProperty: 'payload'
});
var userController = require('./server/controllers/usersController');
var cvController = require('./server/controllers/cvhub-controller');
var selfcv = require('./server/controllers/mainController');
var addproductController = require('./server/controllers/addproducts-Controller');
var addCom = require('./server/controllers/community-Controller');
var sidebar = require('./server/controllers/sidebar-controller');
var trackwox = require('./server/controllers/track-controller');
//var userController = require('./server/users-Controller');
//var cardController = require('./server/controllers/card-controller');

mongoose.connect('mongodb://localhost:27017/thecard');

app.use(bodyParser.json());
app.use(multipartyMiddleware);
app.use(passport.initialize());

app.use('/thecard', express.static(__dirname + "/thecard"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));
app.use('/user_oracle', express.static(__dirname + "/user_oracle"));
app.use('/user_media', express.static(__dirname + "/user_media"));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.post('/api/register/register', userController.registerUser);
app.post('/api/signin/signin', userController.login);
app.post('/api/cvmaker/make', cvController.cvSave);
app.post('/api/getcv/get', selfcv.ownCv);
app.post('/api/uploadpic/pics',multipartyMiddleware,addproductController.addproducts);

app.post('/api/product/save', addproductController.saveProduct);
app.post('/api/getads/ads', addproductController.getProduct);

app.post('/api/concreate/create', multipartyMiddleware, addCom.createCom);

app.post('/api/getcoms/get', addCom.getComs);

app.post('/api/checkcv/check', sidebar.checkCv);

app.post('/api/checkads/checkad', sidebar.checkAds);
app.post('/api/checkcom/checkcoms', sidebar.checkComs);



app.post('/api/track/tracks', trackwox.trackSave);
app.post('/api/gettracks/tracks', trackwox.getTracks);

app.listen(8080, function(){
    console.log("listerning for localhost at port 8080");
});