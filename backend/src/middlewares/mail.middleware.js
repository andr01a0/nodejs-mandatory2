import transporter from '../configs/mail.config.js'
import nodemailer from 'nodemailer'

export default {
	sendMail: async (mailOptions) => {
		let info = await transporter.sendMail({
			from: mailOptions.from, // sender address
			to: mailOptions.to, // list of receivers
			subject: mailOptions.subject, // Subject line
			text: mailOptions.textBody, // plain text body
			html: mailOptions.htmlBody, // html body
		})

		if(process.env.NODE_ENV === 'development') {
			console.log("Message sent: %s", info.messageId)

			console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
		}
	}
}