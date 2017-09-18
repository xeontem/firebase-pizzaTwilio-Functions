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
      client.messages.create(textMessage);// vip string
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

exports.storeMessage = functions.database.ref()
    .onWrite(event => {
      // Grab the current value of what was written to the Realtime Database.
      // const original = event.data.val();
      // admin.database().ref('/changes').set(messagesStore);
      console.log(JSON.stringify(event.data.previous));
      console.log(JSON.stringify(event.data));
      // const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      return event.data.ref;
// index.js
});

let FCMSendToDeviseCounter = 1;
exports.FCMSendToDevise = functions.database.ref('/FCMmessages/{userId}/')
  .onUpdate(messages => {

    let message = messages.data.val();
    message = message[message.length-1] || [];
    const userId = messages.params.userId;

    const payload = {
      notification: {
        title: message.title || 'Message was deleted',
        body: message.body || '',
        icon: message.icon || 'https://lh3.googleusercontent.com/-9WyEKa363Ek/AAAAAAAAAAI/AAAAAAACXaM/bOBuIAj0_P4/s60-p-rw-no/photo.jpg'
      }
    }

    admin.database().ref(`/fcmTokens/${userId}`).once('value')
      .then(token => token.val())
      .then(userFcmToken => {
        return admin.messaging().sendToDevice(userFcmToken, payload);// vip string
      })
      .then(res => {
        console.log("Sent Successfully" + FCMSendToDeviseCounter++, res);
      })
      .catch(err => {
        console.log(err);
      })
  });

// exports.FCMSendToDevise = functions.database.ref('/FCMmessages/{userId}/{messageId}')
//   .onCreate(event => {

//     const message = event.data.val();
//     const userId = event.params.userId;

//     const payload = {
//       notification: {
//         title: message.title,
//         body: message.body,
//         icon: message.icon
//       }
//     }

//     admin.database().ref(`/fcmTokens/${userId}`).once('value')
//       .then(token => token.val())
//       .then(userFcmToken => {
//         return admin.messaging().sendToDevice(userFcmToken, payload);// vip string
//       })
//       .then(res => {
//         console.log("Sent Successfully" + FCMSendToDeviseCounter++, res);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   });