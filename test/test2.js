var mocha=require('mocha');
var chai=require('chai');
var server=require('..\\server.js');
var status =require('http-status');
var assert = chai.assert;
var users = require('..\\routes\\user.js');
var superagent = require('superagent');
var bodyParser = require('body-parser')


  describe('//users', function(){
  /* {
  var app;
    before(function() {
    app = server(3000);
  });
 
  after(function() {
    app.close();
  });
  */
		 
  it('returns username if name param is a valid user', function() {
   // users.list = ['test'];
    superagent.get('http://localhost:3000/users').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      var result = bodyParser.json(res.text);
	  var expected = bodyParser.json(users.list);
      //assert.deepEqual(expected,result);
     // done();
    });
  });
 /*
  it('returns 404 if user named `params.name` not found', function(done) {
    users.list = ['test'];
    superagent.get('http://localhost:3000/user/notfound').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.NOT_FOUND);
      var result = JSON.parse(res.text);
      assert.deepEqual({ error: 'Not Found' }, result);
      done();
    });
  });*/
});