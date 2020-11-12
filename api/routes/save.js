'use strict';

var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs');

function saveFileSync(path, data){
  let list = path.split(/[\\\/]/);
  let filename = list.pop();
  let filepath = list.join('/');
  fs.mkdirSync(filepath, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFileSync(path, data);
}

/* GET posts. */
router.get('/posts', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/wp/v2/posts?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/posts/index.json', data);
    });
  res.json({'res':'ok'})
});

/* GET posts by slug. */
router.get('/posts/:slug', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/wp/v2/posts?slug='+req.params.slug+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/posts/'+req.params.slug+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET spec. */
router.get('/get-spec', function(req, res, next) {
  fetch(`https://admin.timeua.info/wp-json/frontity-api/get-spec`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync(`api/public/res-json/get-spec/index.json`, data);
    });
  res.json({'res':'ok'})
});

/* GET tag info. */
router.get('/get-tag-info', function(req, res, next) {
  const page = req.query && req.query.tag ? req.query.tag : 1;
  fetch(`https://admin.timeua.info/wp-json/frontity-api/get-tag-info?tag=${req.query.tag}`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync(`api/public/res-json/get-tag-info/index.json`, data);
    });
  res.json({'res':'ok'})
});

/* GET tags. */
router.get('/get-tags/:post', function(req, res, next) {
  fetch(`https://admin.timeua.info/wp-json/frontity-api/get-tags/${req.params.post}`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync(`api/public/res-json/get-tags/tag-${req.params.post}.json`, data);
    });
  res.json({'res':'ok'})
});

/* get auhtor-group-info. */
router.get('/get-auhtor-group-info/:authors', function(req, res, next) {
  fetch(`https://admin.timeua.info/wp-json/frontity-api/get-auhtor-group-info/${req.params.authors}`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync(`api/public/res-json/get-auhtor-group-info/tag-${req.params.authors}.json`, data);
    });
  res.json({'res':'ok'})
});

/* get get-persona. */
router.get('/get-persona', function(req, res, next) {
  fetch(`https://admin.timeua.info/wp-json/frontity-api/get-persona`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync(`api/public/res-json/get-persona/index.json`, data);
    });
  res.json({'res':'ok'})
});

/* get category link */
router.get('/get-category/:category', function(req, res, next) {
  fetch(`https://admin.timeua.info/wp-json/frontity-api/get-category/${req.params.category}`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync(`api/public/res-json/get-category/cat-${req.params.category}.json`, data);
    });
  res.json({'res':'ok'})
});

/* get-main */
router.get('/get-main', function(req, res, next) {
  fetch(`https://admin.timeua.info/wp-json/frontity-api/get-main`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync(`api/public/res-json/get-main/index.json`, data);
    });
  res.json({'res':'ok'})
});

/* GET actual. */
router.get('/get-actual/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-actual/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-actual/index-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET analytic. */
router.get('/get-analytic/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-analytic/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-analytic/index-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET last. */
router.get('/get-last/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-last/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-last/index-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET category. */
router.get('/get-category/:category/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-category/'+req.params.category+'/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-category/'+req.params.category+'-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET persona. */
router.get('/get-persona/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-persona/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-persona/index-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET author. */
router.get('/get-author/:author/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-author/'+req.params.author+'/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-author/'+req.params.author+'-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET tag. */
router.get('/get-tag/:tag/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-tag/'+req.params.tag+'/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-tag/'+req.params.tag+'-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET spec. */
router.get('/get-spec/:tag/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-spec/'+req.params.tag+'/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-spec/'+req.params.tag+'-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET video. */
router.get('/get-video/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-video/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-video/index-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET images. */
router.get('/get-images/page/:page', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/frontity-api/get-images/page/'+req.params.page+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/get-images/index-p'+req.params.page+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET video by slug. */
router.get('/cases/:slug', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/wp/v2/video?slug='+req.params.slug+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/portfolio/'+req.params.slug+'.json', data);
    });
  res.json({'res':'ok'})
});


/* GET page by slug. */
router.get('/pages/:slug', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/wp/v2/pages?slug='+req.params.slug+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/pages/'+req.params.slug+'.json', data);
    });
  res.json({'res':'ok'})
});


/* GET categories. */
router.get('/categories', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/wp/v2/categories')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/categories/index.json', data);
    });
  res.json({'res':'ok'})
});

/* GET options. */
router.get('/options', function(req, res, next) {
  fetch('https://admin.timeua.info/wp-json/acf/v3/options/options')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      saveFileSync('api/public/res-json/options/index.json', data);
    });
  res.json({'res':'ok'})
});

module.exports = router;
