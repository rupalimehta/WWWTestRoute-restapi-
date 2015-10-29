var mocha=require('mocha');
var chai=require('chai');
var server=require('../server.js');
var status =require('http-status');
var assert = chai.assert;
var users = require('../routes/user.js');
var superagent = require('superagent');
var bodyParser = require('body-parser')


  describe('/users', function(){
		 
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
});
