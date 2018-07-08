var express = require('express');
var router = express.Router();

const Eureka = require('eureka-js-client').Eureka;

const eureka = new Eureka({
  instance: {
    app: 'nodeService',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:5000/status',
    port: {
      '$': 5000,
      '@enabled': 'true',
    },
    vipAddress: 'localhost',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    }
  },
  eureka: {
    host: '138.122.226.57',
    port: 8761,
    servicePath: '/eureka/apps/'
  }
});
eureka.logger.level('debug');
eureka.start(function(error){
  console.log(error || 'complete');
});

router.get('/start', function(req, res){
    res.send('starting eureka');
    eureka.start(function(error){
        console.log(error || 'complete');
    });
});

router.get('/stop', function(req, res){
    res.send('stoping eureka');
    console.log('stoping eureka');
    eureka.stop();
});

module.exports = router;