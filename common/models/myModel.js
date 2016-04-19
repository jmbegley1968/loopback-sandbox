//var app = require('../../../../server/server'); //require `server.js` as you would normally do in any node.js app

module.exports = function (MyModel) {


  MyModel.myFind1 = function (cb) {
    var id = "string_id";
    MyModel.findById(id, function(err, result) {
      if (err) { return cb(err, null) }
      return cb(null, result)
    });
  };

  MyModel.myFind2 = function (cb) {
    var id = { "key1" : "value1", "key2" : "value2" }
    MyModel.findById(id, function(err, result) {
      if (err) { return cb(err, null) }
      return cb(null, result)
    });
  };


  MyModel.remoteMethod(
    'myFind1', {
      accepts : [
      ],
      returns : { arg : 'myResult', type : 'MyModel' },
      http : { path : "/myFind1", verb : 'get' }
    });

  MyModel.remoteMethod(
    'myFind2', {
      accepts : [
      ],
      returns : { arg : 'myResult', type : 'MyModel' },
      http : { path : "/myFind2", verb : 'get' }
    });

};

