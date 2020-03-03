var express = require('express');
var router = express.Router();
var request = require('request');
var open = require('open');

/*
_________        __                
\______   \ _____/  |_  ___________ 
 |     ___// __ \   __\/ __ \_  __ \
 |    |   \  ___/|  | \  ___/|  | \/
 |____|    \___  >__|  \___  >__|   
               \/          \/       
3 de marzo 2020
 
 */

/* Get input url and then redirect to img page */
router.post('/dashboard', function(req, res,next) {
    if(req.body.you_url)
    {
     var you_url = req.body.you_url;
     var check_url=you_url.indexOf('https://www.youtube.com/watch?v=');
     
     if(check_url<0){res.render('dashboard');}
    var video_id = you_url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
}
    var urlhq ="https://i3.ytimg.com/vi/"+video_id+"/hqdefault.jpg";
    var urlmx ="https://i3.ytimg.com/vi/"+video_id+"/maxresdefault.jpg";
    
 
    
     res.render('images', {urlhq:urlhq, urlmx:urlmx}
    );   
    }
    else 
    {
        res.render('dashboard');
    }
     
	
});

/* Cheching user and password from form*/
router.post('/imgyoudown', function(req, res,next) {
    var user = req.body.user_name;
    var pass = req.body.user_pass;
    
    if(user=="root" && pass=="toor")
    {res.render('dashboard');}
    
	else
     {
      res.render('404');
         
     }
    
	
});

/* GET login page using  two methods GET && POST*/
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
