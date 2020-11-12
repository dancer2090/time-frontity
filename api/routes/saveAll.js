var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs');

/* GET all. */
let postsList = [];
router.get('/', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/pages?slug=home')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/home/index.json', data);
    });
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/posts')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/posts/index.json', data);
      postsList = json;
    });
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/portfolio')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/portfolio/index.json', data);
    });
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/teammembers')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/teammembers/index.json', data);
  });
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/categories')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/categories/index.json', data);
    });
  fetch('https://admin.sirinsoftware.com/wp-json/frontity-api/get-options')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/options/index.json', data);
    });
  res.json(postsList)
});


module.exports = router;
