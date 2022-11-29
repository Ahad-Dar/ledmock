process.EventEmitter=require('events').EventEmitter
var zetta = require('zetta');
var StateMachineDevice = require('./device.js');
var port = process.env.PORT || 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  zetta()
    .name('State Machine Server')
    .use(StateMachineDevice)
    .listen(port, function(){
       console.log('Zetta is running at http://127.0.0.1:3000');
  });
