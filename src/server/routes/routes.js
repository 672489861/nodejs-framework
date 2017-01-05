/**
 * Created by Arnold on 2016/12/30.
 */
var logger = require('../utils/logger.js');

module.exports = {
  register: function (app) {
    // user interceptor
    app.use(require('../middlewares/loginInterceptor.js'));

    app.use('/user', require('./user/user.js'));
    app.use('/system', require('./system/system.js'));  //   crud method not include transaction
    app.use('/student', require('./student/student.js')); //  crud method include transaction
    app.use('/schedulers', require('./schedulerJobs/schedulerJobs.js'));  // download and request interface

    // error handler
    app.use(function (err, req, res, next) {
      if (err) {
        logger.error(err.stack);
        res.status(500).json({status: 500, moduleName: err.moduleName, message: err.message});
      } else {
        next();
      }
    });

    // 404 handle
    app.use(function (req, res) {
      if (!res.headersSent) {
        res.status(404).json({status: 404, url: req.originalUrl, message: '地址不存在!'});
      }
    });
  }
};