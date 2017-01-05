/**
 * Created by Arnold on 2017/1/3.
 */
var mysqlUtil = (function () {
  var _pool = null;
  var _logger = null;

  var util = {};

  // init
  util.init = function () {
    if (!_pool) {
      _pool = require('../datasource/mysql.js');
    }
    _logger = require('./logger.js');
    return util;
  };

  // query
  util.query = function (sql, args, cb, connection) {
    if (connection === undefined) {
      _pool.getConnection(function (err, resultConnection) {
        if (err) {
          _logger.error(err.stack);
          return;
        } else {
          resultConnection.query(sql, args, function (err, result) {
            if (err) {
              rollback(connection);
            }
            _pool.releaseConnection(resultConnection);
            cb(err, result);
          });
        }
      });
    } else {
      connection.query(sql, args, function (err, result) {
        if (err) {
          rollback(connection);
        }
        cb(err, result);
      });
    }
  };

  // beginTransaction
  util.beginTransaction = function (cb) {
    _pool.getConnection(function (err, connection) {
      if (err) {
        _logger.error(err.stack);
        return;
      } else {
        connection.beginTransaction(function (err) {
          if (err) {
            _logger.error(err.stack);
            return;
          } else {
            cb(connection);
          }
        });
      }
    });
  };

  // commitTransaction
  util.commitTransaction = function (connection, cb) {
    connection.commit(function (err) {
      if (err) {
        rollback(connection);
      } else {
        _pool.releaseConnection(connection);
        cb();
      }
    });
  };

  // releaseConnection
  util.releaseConnection = function (connection) {
    _pool.releaseConnection(connection);
  };

  // rollback
  function rollback (connection) {
    connection.rollback(function () {
      // releaseConnection
      _pool.releaseConnection(connection);
    });
  }

  return util.init();
})();

module.exports = mysqlUtil;