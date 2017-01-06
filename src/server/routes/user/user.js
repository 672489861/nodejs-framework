/**
 * Created by Arnold on 2017/1/3.
 */
var express = require('express'), router = express.Router(),
  userDao = require('../../dao/user/userDao.js'), Errors = require('../../utils/error.js'),
  ResponseData = require('../../utils/responseData.js');

router.post('/login', function (req, res, next) {
  var id = req.body.id, name = req.body.name;
  userDao.queryLoginUser([id, name], function (err) {
    next(new Errors.Database('login', err.message));
  }, function (result) {
    if (result.length === 1) {
      req.session.user = result[0];
      res.redirect('/index.html');
    } else {
      res.redirect('back');
    }
  });
});

router.get('/', function (req, res, next) {
  userDao.queryAllUser(function (err) {
    next(new Errors.Database('system', err.message));
  }, function (result) {
    res.json(new ResponseData(200, '查询成功', result));
  });
});

router.get('/:id', function (req, res, next) {
  userDao.queryUserWithId(req.params.id, function (err) {
    next(new Errors.Database('system', err.message));
  }, function (result) {
    res.json(new ResponseData(200, '查询成功', result[0]));
  });
});

// add
router.post('/', function (req, res, next) {
  var name = req.body.name, age = req.body.age;
  userDao.addUser([name, age], function (err) {
    next(new Errors.Database('system', err.message));
  }, function (result) {
    res.json(new ResponseData(200, '新增成功', result));
  });
});

// delete
router.delete('/:id', function (req, res, next) {
  userDao.deleteUser(req.params.id, function (err) {
    next(new Errors.Database('system', err.message));
  }, function () {
    userDao.queryAllUser(function (err) {
      next(new Errors.Database('system', err.message));
    }, function (result) {
      res.json(new ResponseData(200, '删除成功', result));
    });
  });
});

// update
router.put('/:id', function (req, res, next) {
  var name = req.body.name, id = req.params.id;
  userDao.updateUser([name, id], function (err) {
    next(new Errors.Database('system', err.message));
  }, function (result) {
    res.json(new ResponseData(200, '编辑成功', result));
  });
});


module.exports = router;