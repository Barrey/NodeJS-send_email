var app = require('../bee-queue-ui/app')(options);
  app.listen(1337, function(){
    console.log('bee-queue-ui started listening on port', this.address().port);
  });