/**
 * Created by Arnold on 2017/1/3.
 */
var express = require('express'), router = express.Router(),
  userDao = require('../../dao/user/userDao.js'), Errors = require('../../utils/error.js');

router.post('/login', function (req, res, next) {
  var id = req.body.id, name = req.body.name;
  userDao.queryLoginUser([id, name], function (err) {
    next(new Errors.Database('login', err.message));
  }, function (result) {
    if (result.length === 1) {
      req.session.user = result[0];
      res.redirect('/system/testmysql');
    } else {
      res.redirect('back');
    }
  });
});

module.exports = router;