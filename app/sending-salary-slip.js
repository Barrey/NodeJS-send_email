module.exports = function (parameter){
	var nodemailer = require('nodemailer');

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport({
		port: 1025,
		ignoreTLS: true,
		// other settings...
	  });

	// setup e-mail data with unicode symbols
	var mailOptions = {
		from: '"Ridwan Aji Bari ??" <ajibari@gmail.com>', // sender address
		to: 'tes@gmail.com, tes@yahoo.com', // list of receivers
		subject: parameter, // Subject line
		text: 'Hello world ??', // plaintext body
		attachments:[
			{
				filename: 'salary-slip.pdf',
				path: './attachment/SalarySlip.pdf'
			},
			{
				filename: 'text1.txt',
				path: './attachment/text1.txt'
			}],
		html: '<p style= "height: 600px; width: 600px;background-color: orange; border: 1px solid black;"><b>Hello this email contains attachment</b></p>'
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log('Message sent: ' + info.response);
	});
}