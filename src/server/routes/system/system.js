/**
 * Created by Arnold on 2016/12/30.
 */
var express = require('express'), router = express.Router(),
  systemDao = require('../../dao/system/systemDao.js'), Errors = require('../../utils/error.js');

router.get('/', function (req, res, next) {
  systemDao.queryAllUser(function (err) {
    next(new Errors.Database('system', err.message));
  }, function (result) {
    res.json(result);
  });
});

router.get('/:id', function (req, res, next) {
  systemDao.queryUserWithId(req.params.id, function (err) {
    next(new Errors.Database('system', err.message));
  }, function (result) {
    res.json(result);
  });
});

// add
router.post('/', function (req, res, next) {
  var name = req.body.name, age = req.body.age;
  systemDao.addUser([name, age], function (err) {
    next(new Errors.Database('system', err.message));
  }, function (result) {
    res.end(JSON.stringify(result));
  });
});

// delete
router.delete('/:id', function (req, res, next) {
  systemDao.deleteUser(req.params.id, function (err) {
    next(new Errors.Database('system', err.message));
  }, function () {
    systemDao.queryAllUser(function (err) {
      next(new Errors.Database('system', err.message));
    }, function (result) {
      res.json(result);
    });
  });
});

// update
router.put('/:id', function (req, res, next) {
  var name = req.body.name, id = req.params.id;
  systemDao.updateUser([name, id], function (err) {
    next(new Errors.Database('system', err.message));
  }, function () {
    systemDao.queryAllUser(function (err) {
      next(new Errors.Database('system', err.message));
    }, function (result) {
      res.json(result);
    });
  });
});


module.exports = router;