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

module.exports = router;