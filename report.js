var Queue = require('bee-queue');
var queue = new Queue('sending-salary-slip-jobs');
var job;
var senderCount = process.argv.slice(2)[0];

//sending email script
var tes = require('./app/sending-salary-slip.js');

for (var i = senderCount - 1; i >= 0; i--) {
	job = queue.createJob(tes('sending_email')).save();
}

job.on('progress', function (progress) {
  console.log('Job ' + job.id + ' reported progress: ' + progress + '%');
});

queue.process(function (job, done) {
  // do some work
  job.reportProgress(30);
  // do more work
  job.reportProgress(80);
  // do the rest
  job.reportProgress(100);
  done();
});