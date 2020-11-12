var express = require('express');
var router = express.Router();
var users = require('../utils/users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users)
});

/* GET users listing. */
router.get('/:slug', function(req, res, next) {
  const slug = req.params.slug;
  const newUsers = users;
  const user = newUsers.filter( user => user.username === slug )
  res.json(user[0]);
});

module.exports = router;
