const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const twilio = require('twilio');

const accountSid = functions.config().twilio.sid;
const authToken  = functions.config().twilio.token;
const twilioNumber = functions.config().twilio.number; // your twilio phone number

let textMessage = {
  body: '',
  to: '',  // Text to this number
  from: twilioNumber // From a valid Twilio number
};

const client = new twilio(accountSid, authToken);

exports.sendSMS1 = functions.https.onRequest((request, response) => {
	admin.database()
		.ref()
    .once('value')
    .then(snapshot => snapshot.val())
    .then(db => {
		  textMessage.body = db.message;
		  textMessage.to = db.sendTo;  // Text to this number
      client.messages.create(textMessage);
			return db})
    .then(db => response.send(`send to: ${textMessage.to}; message: ${db.message}`))
    .catch(err => {
    	response.send(err);
    	console.log(err);
    });
});
