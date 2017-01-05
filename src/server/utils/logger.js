/**
 * Created by Arnold on 2016/12/30.
 */
var path = require('path'), winston = require('winston');
require('winston-syslog').Syslog;
require('winston-daily-rotate-file');

var transport = new winston.transports.DailyRotateFile({
  filename: path.join(__dirname, '../../../log/Notification-Web.log'),
  datePattern: 'yyyy-MM-dd.',
  prepend: true,
  level: process.env.ENV === 'development' ? 'debug' : 'info'
});

// create logger instance
var myLogger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Syslog)(),
    new (winston.transports.Console)({timestamp: true, colorize: true, label: ' notification-web'}),
    transport
  ]
});

module.exports = myLogger;
