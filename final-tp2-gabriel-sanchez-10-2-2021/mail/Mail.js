const nodemailer = require('nodemailer')

class Mail{
	constructor(config){
		this.trnsprtr = nodemailer.createTransport(config)
	}
	send(_subject, _text, _to){
		this.trnsprtr.sendMail({
			to: _to,
			subject: _subject,
			text: _text
		})
	}
}

module.exports = Mail
