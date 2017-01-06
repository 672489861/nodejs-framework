/**
 * Created by Arnold on 2017/1/6.
 */
var ResponseData = function (statusCode, message, obj) {
  this.statusCode = statusCode;
  this.message = message;
  this.obj = obj;
};

module.exports = ResponseData;