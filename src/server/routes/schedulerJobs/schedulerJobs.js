/**
 * Created by Arnold on 2017/1/4.
 */
var express = require('express'), router = express.Router(),
  path = require('path'), Errors = require('../../utils/error.js'),
  moment = require('moment'), request = require('request');

// 下载文件
router.get('/downloadTemplate', function (req, res, next) {
  res.download(path.join(__dirname, '../../../../docs/readme.md'), moment().format('YYYY-MM-DD HH:mm:ss') + '.md', function (err) {
    if (err) {
      next(new Errors.File('schedulerJobs', err.message));
    }
  });
});

// 接口调用Get
router.get('/requestWeatherAPI', function (req, res) {
  request('http://api.jisuapi.com/weather/query?appkey=bb1dc7c053d701a3&city=安顺&cityid=111&citycode=101260301',
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.json(body);
      }
    });
});

// 接口调用post
router.post('/requestWeatherAPI', function (req, res) {
  request.post('http://api.jisuapi.com/weather/query', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.json(body);
    }
  }).form({
    appkey: 'bb1dc7c053d701a3',
    city: '安顺',
    cityid: 111,
    citycode: '101260301'
  });
});

module.exports = router;