process.EventEmitter = require('events').EventEmitter;
var zetta = require('zetta');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var PORT = process.env.PORT || 3000;
var pidlock = require('pidlock');
pidlock.guard('/tmp', 'supercalifragilisticexpialidocious', function(error, data, cleanup) {
  if (!error) {
    // Should run.
    run();
    cleanup();
  } else {
    // Another instance is already running.
  }
});

zetta()
  .name('cloud')
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
