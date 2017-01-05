/**
 * Created by Arnold on 2017/1/3.
 */
var whiteListUrls = ['/user/login', '/favicon.ico'], logger = require('../utils/logger.js');

module.exports = function (req, res, next) {
  const url = req.originalUrl;
  if (whiteListUrls.indexOf(url) === -1 && !req.session.user) {
    logger.warn('请先进行登录操作!');
    return res.redirect("/login.html");
  } else {
    next();
  }
};