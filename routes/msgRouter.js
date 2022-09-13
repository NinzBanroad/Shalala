const router = require('express').Router();
let Message = require('../models/msgSchema');
const nodemailer = require('nodemailer');

//add message
router.route('/add').post((req, res) => {

	// Get body or Data
	const name = req.body.data.name;
	const email = req.body.data.email;
	const message = req.body.data.message;

	//Send automatic reply to the email provided using nodemailer
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'nino.bandalan21@gmail.com',
			pass: 'eemsesprsmbboskm'
		}
	})

	console.log(email)
	const mailOptions = {
		from: 'nino.bandalan21@gmail.com',
		to: email,
		subject: 'Shalala. Design & Build.',
		text: 'Thanks for messaging Shalala. Will reach out to you in a call via zoom. Thanks.'
	}

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error)
		}else{
			console.log('Email Sent: ' + info.response)
		}
	})

	if(name == '' && email == '' && message == '') {
		res.status(400).send("Invalid Credentials");
	}else{
		const newMessage = new Message({
			name : name,
			email : email,
			message : message
		});
		
		newMessage.save()
		.then(() => res.json('Message Successfully Sent'))
		.catch(err => res.status(400).json('Error: ' + err));
	}
})


module.exports = router