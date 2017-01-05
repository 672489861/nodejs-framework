/**
 * Created by Arnold on 2017/1/4.
 */
var express = require('express'), router = express.Router(),
  studentDao = require('../../dao/student/studentDao.js'), Errors = require('../../utils/error.js'),
  async = require('async'), mysqlUtil = require('../../utils/mysqlClient.js');

// add student with transaction
router.post('/testmysql', function (req, res, next) {
  var name = req.body.name, age = req.body.age;
  async.waterfall([
    function (callback) {
      mysqlUtil.beginTransaction(function (connection) {
        callback(null, connection);
      });
    },
    function (connection, callback) {
      studentDao.addStudent([name, age], connection, function (err) {
        next(new Errors.Database('system', err.message));
      }, function (result) {
        callback(null, connection, result);
      });
    },
    function (connection, result) {
      mysqlUtil.commitTransaction(connection, function () {
        res.end(JSON.stringify(result));
      });
    }
  ]);
});

// delete student with transaction
router.delete('/testmysql/:id', function (req, res, next) {
  var id = req.params.id;
  async.waterfall([
    function (callback) {
      mysqlUtil.beginTransaction(function (connection) {
        callback(null, connection);
      });
    },
    function (connection, callback) {
      studentDao.deleteStudent(id, connection, function (err) {
        next(new Errors.Database('system', err.message));
      }, function (result) {
        callback(null, connection, result);
      });
    },
    function (connection, result) {
      mysqlUtil.commitTransaction(connection, function () {
        res.end(JSON.stringify(result));
      });
    }
  ]);
});

// update student with transaction
router.put('/testmysql/:id', function (req, res, next) {
  var name = req.body.name, id = req.params.id;
  async.waterfall([
    function (callback) {
      mysqlUtil.beginTransaction(function (connection) {
        callback(null, connection);
      });
    },
    function (connection, callback) {
      studentDao.updateStudent([name, id], connection, function (err) {
        next(new Errors.Database('system', err.message));
      }, function (result) {
        callback(null, connection, result);
      });
    },
    function (connection, result) {
      mysqlUtil.commitTransaction(connection, function () {
        res.end(JSON.stringify(result));
      });
    }
  ]);
});

module.exports = router;
