var express = require('express');
const Review = require('../models/review');
var router = express.Router();
var cors = require('cors');

/* GET home page. */
router.get('/', cors(), function(req, res, next) {
  //res.render('index', { title: 'Express' });
  Review.find({}).then((review) =>{
    res.json(review);
  }).catch((err)=>{
    console.log("error");
  })
});


module.exports = router;
