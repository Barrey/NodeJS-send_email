var config = require('bee-queue-ui/config'),
  app = require('bee-queue-ui/app')(config);

app.listen(config.port, function() {
  console.log("Bee-Queue-UI listening on port", config.port, "in", process.env.NODE_ENV, "mode");
});