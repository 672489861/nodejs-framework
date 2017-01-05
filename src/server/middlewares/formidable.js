/**
 * Created by Arnold on 2016/12/30.
 */
var formidable = require('express-formidable'), path = require('path');

module.exports = function (app) {
  app.use(formidable({
    uploadDir: path.join(__dirname, '../../public/upload'),
    keepExtensions: true
  }));
};