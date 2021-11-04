var express = require('express');
var router = express.Router();
const util = require('util');
const fs = require('fs');
var path=require('path');
var cur_path=path.resolve('../myapp/public');

const readFileAsync = util.promisify(fs.stat);
  
router.post('/', function(req, res, next) {
    var file_path=path.join(cur_path, req.body.image_url);

    readFileAsync(file_path,'utf-8').then(result =>{

        var image_path=req.body.image_url;
        
        res.render('result.pug', {data: req.body, url: image_path});

    }).catch((error) =>{
        console.log("no image file search");

        res.redirect('/');  

    });
 
});

module.exports = router;