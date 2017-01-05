/**
 * Created by Arnold on 2016/12/30.
 */
var mongoose = require('mongoose'), config = require('../config/config.js');

mongoose.connect(config.mongodb);

module.exports = mongoose;