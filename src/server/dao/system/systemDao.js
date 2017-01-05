/**
 * Created by Arnold on 2017/1/3.
 */
var mysqlUtil = require('../../utils/mysqlClient.js');

var systemDao = {};

systemDao.queryAllUser = function (errorHandle, successHandle) {
  mysqlUtil.query('SELECT * FROM t_user', null, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  });
};

systemDao.addUser = function (params, errorHandle, successHandle) {
  mysqlUtil.query('INSERT INTO t_user(name,age) VALUES(?,?)', params, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  });
};

systemDao.updateUser = function (params, errorHandle, successHandle) {
  mysqlUtil.query('UPDATE t_user set name = ? WHERE id = ?', params, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  });
};

systemDao.deleteUser = function (params, errorHandle, successHandle) {
  mysqlUtil.query('DELETE FROM t_user WHERE id = ?', params, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  });
};

module.exports = systemDao;