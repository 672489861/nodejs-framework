/**
 * Created by Arnold on 2017/1/5.
 */
// use mocha,supertest,istanbul module

var app = require('../../../server/server.js');
var supertest = require('supertest');
var expect = require('chai').expect;

var request = supertest(app);

// get
describe('get /system/testmysql', function () {
  it('queryAllUser', function (done) {
    request.get('/system/testmysql').query({})
      .end(function (err, res) {
        expect(res.text).to.contain('1-admin');
        done(err);
      });
  });
});

// post
describe('post /system/testmysql', function () {
  it('addUser', function (done) {
    request.post('/system/testmysql').query({name: '张三', age: 20})
      .end(function (err, res) {
        expect(res.text).to.contain('"affectedRows":1');
        done(err);
      });
  });
});

// put
describe('put /system/testmysql/:id', function () {
  it('updateUser', function (done) {
    request.put('/system/testmysql/1').query({name: '张三xxx', age: 20})
      .end(function (err, res) {
        expect(res.text).to.contain('"affectedRows":1');
        done(err);
      });
  });
});

// delete
describe('delete /system/testmysql/:id', function () {
  it('deleteUser', function (done) {
    request.delete('/system/testmysql/15').query()
      .end(function (err, res) {
        expect(res.text).to.contain('"affectedRows":1');
        done(err);
      });
  });
});


