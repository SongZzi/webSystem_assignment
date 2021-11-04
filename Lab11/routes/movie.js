const User = require('../models/movie');
var express = require('express');
 
var router = express.Router();

router.post('/',function(req,res,next){
    const user = new User({
        title : req.body.title,
        year : req.body.year,
        url : req.body.url,
        trending: false
      });
      user.save((err)=>{
        res.redirect('/');
      });
});

router.get('/routes/movie/read/:id', function(req,res,next){
    
    User.findById(req.params.id).then( (movie)=>{
    res.render('editmovie.pug', {movie: movie});
    //res.redirect('/editmovie'); //error
    });
});

router.post('/routes/movie/update/:id',function(req,res,next){
    User.findByIdAndUpdate(req.params.id, req.body, (err, movie)=>{
        res.redirect('/admin');
    });
});

router.post('/routes/movie/delete/:id',function(req,res,next){
    User.deleteOne({ _id: req.params.id}).then((result)=>{
        res.redirect('/admin');
    }).catch((err)=>{
        console.log("error");
    });
    /*User.deleteOne({_id : req.params.id}).then((result)=>{
        var response = {
          success : true
        }
        res.status(200).json(response);
      }).catch((err)=>{
        var response = {
          success : false
        }    
        res.status(500).json(response);
      });*/
});

module.exports = router;
