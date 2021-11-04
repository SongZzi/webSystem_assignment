var express = require('express');
const Review = require('../models/review');
var router = express.Router();
var cors = require('cors');

router.post('/', cors(), function(req, res, next) {
  const{movie_name, review_content, rate} = req.body;
  
  const review = new Review({
    movie_name: movie_name, 
    review_content: review_content, 
    rate: rate, 
    date: ''
  });
  review.save((err)=>{
    console.log("db save");
  })

});

router.delete('/:id', cors(), function(req, res, next) {
  res.send("delete id:"+req.params.id);
  Review.deleteOne({ _id: req.params.id}).then((result)=>{
    console.log("delete review");
}).catch((err)=>{
    console.log("error");
});
})

module.exports = router;
