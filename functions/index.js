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
      let messagesStore = db.messages || [];
      if(messagesStore.length > 1000) messagesStore = [];
		  textMessage.body = db.message;
		  textMessage.to = db.sendTo;  // Text to this number
      client.messages.create(textMessage);
      messagesStore.push({
        date: `${new Date(Date.now())}`,
        payload: textMessage
      });
      admin.database().ref('/messages').set(messagesStore);
			return db})
    .then(db => response.send(`send to: ${textMessage.to}; message: ${db.message}`))
    .catch(err => {
    	response.send(err);
    	console.log(err);
    });
});

// exports.storeMessage = functions.database.ref()
//     .onWrite(event => {
//       // Grab the current value of what was written to the Realtime Database.
//       const original = event.data.val();
//       console.log('Uppercasing', event.params.pushId, original);
//       const uppercase = original.toUpperCase();
//       // You must return a Promise when performing asynchronous tasks inside a Functions such as
//       // writing to the Firebase Realtime Database.
//       // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
//       return event.data.ref.parent.child('uppercase').set(uppercase);
// index.js

    // });
