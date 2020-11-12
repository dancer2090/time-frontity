var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs');

/* GET teammembers. */
router.get('/wp/v2/teammembers', function(req, res, next) {
  let rawdata = fs.readFileSync('public/res-json/teammembers/index.json');  
  res.json(JSON.parse(rawdata));
});

/* GET posts. */
router.get('/wp/v2/posts', function(req, res, next) {
  let rawdata = fs.readFileSync('public/res-json/posts/index.json');  
  res.json(JSON.parse(rawdata));
});

/* GET posts by slug. */
router.get('/wp/v2/posts/:slug', function(req, res, next) {
  let rawdata = fs.readFileSync('public/res-json/posts/'+req.params.slug+'.json');
  res.json(JSON.parse(rawdata));
});

/* GET cases. */
router.get('/wp/v2/portfolio', function(req, res, next) {
  let rawdata = fs.readFileSync('public/res-json/portfolio/index.json');  
  res.json(JSON.parse(rawdata));
});

/* GET cases by slug. */
router.get('/wp/v2/portfolio/:slug', function(req, res, next) {
  let rawdata = fs.readFileSync('public/res-json/portfolio/'+req.params.slug+'.json');
  res.json(JSON.parse(rawdata));
});

/* GET pages by slug. */
router.get('/wp/v2/pages/:slug', function(req, res, next) {
  let rawdata = fs.readFileSync('public/res-json/pages/'+req.params.slug+'.json');
  res.json(JSON.parse(rawdata));
});

/* GET options. */
router.get('/frontity-api/get-options', function(req, res, next) {
  let rawdata = fs.readFileSync('public/res-json/options/index.json');  
  res.json(JSON.parse(rawdata));
});



module.exports = router;
