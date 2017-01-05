/**
 * Created by Arnold on 2017/1/4.
 */
var mysqlUtil = require('../../utils/mysqlClient.js');

var studentDao = {};

studentDao.addStudent = function (params, connection, errorHandle, successHandle) {
  mysqlUtil.query('INSERT INTO t_student(name,age) VALUES(?,?)', params, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  }, connection);
};

studentDao.updateStudent = function (params, connection, errorHandle, successHandle) {
  mysqlUtil.query('UPDATE t_student set name = ? WHERE id = ?', params, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  }, connection);
};

studentDao.deleteStudent = function (params, connection, errorHandle, successHandle) {
  mysqlUtil.query('DELETE FROM t_student WHERE id = ?', params, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  }, connection);
};

module.exports = studentDao;