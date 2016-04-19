//var app = require('../../../../server/server'); //require `server.js` as you would normally do in any node.js app

module.exports = function (MyModel) {


  MyModel.myFind = function (cb) {
    //if (err) { return cb(err, null) }

    return cb(null, "MY RESULT!")

  };


  MyModel.remoteMethod(
    'myFind', {
      accepts : [
      ],
      returns : { arg : 'myResult', type : 'MyModel' },
      http : { path : "/myFind", verb : 'get' }
    });

};

