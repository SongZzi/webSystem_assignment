const User = require('../models/movie');
var express = require('express');
 
var router = express.Router();

router.get('/', function(req, res, next) {
  User.find({}).then( (movie)=>{
    res.render('index.pug', {movie: movie});
  }).catch((err)=>{
    console.log(err);
  });
  
});

router.get('/newmovie',function(req,res,next){
  res.render('newmovie.pug');
});

module.exports = router;
