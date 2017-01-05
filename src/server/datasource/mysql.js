/**
 * Created by Arnold on 2016/12/30.
 */
var mysql = require('mysql'), config = require('../config/config.js');

var pool = mysql.createPool({
  connectionLimit: config.mysql.connectionLimit,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  port: config.mysql.port
});

module.exports = pool;