/**
 * Created by Arnold on 2017/1/3.
 */
var mysqlUtil = require('../../utils/mysqlClient.js');

var userDao = {};

userDao.queryLoginUser = function (params, errorHandle, successHandle) {
  mysqlUtil.query('SELECT * FROM t_user where id = ? and name = ?', params, function (err, result) {
    if (err) {
      errorHandle(err);
    } else {
      successHandle(result);
    }
  });
};

module.exports = userDao;