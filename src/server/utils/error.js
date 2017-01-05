/**
 * Created by Arnold on 2017/1/4.
 */
var util = require('util');

var AbstractError = function (moduleName, msg, constr) {
  this.message = msg || 'Error';
  this.moduleName = moduleName || 'noModule';
  Error.captureStackTrace(this, constr || this);
};

util.inherits(AbstractError, Error);
AbstractError.prototype.name = 'Abstract Error';

var DatabaseError = function (moduleName, msg) {
  DatabaseError.super_.call(this, moduleName, msg, this.constructor);
};

util.inherits(DatabaseError, AbstractError);
DatabaseError.prototype.name = 'Database Error';

var FileError = function (moduleName, msg) {
  FileError.super_.call(this, moduleName, msg, this.constructor);
};

util.inherits(FileError, AbstractError);
FileError.prototype.name = 'File Error';

module.exports = {
  Database: DatabaseError,
  File: FileError
};