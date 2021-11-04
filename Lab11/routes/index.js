const User = require('../models/movie');
var express = require('express');
 
var router = express.Router();
var pmovie;

router.get('/', function(req, res, next) {

  User.find({}).then( (movie)=>{
    User.find({trending: true}).then( (pmovie)=>{
      res.render('index.pug', {movie: movie, pmovie: pmovie});
    }).catch((err)=>{
    console.log(err);
    });
  }).catch((err)=>{
    console.log(err);
  });

});

router.get('/newmovie',function(req,res,next){
  res.render('newmovie.pug');
});

router.get('/admin', function(req, res, next){
  User.find({}).then( (movie)=>{
    res.render('admin.pug', {movie: movie});
  }).catch((err)=>{
    console.log(err);
  });
});


module.exports = router;
