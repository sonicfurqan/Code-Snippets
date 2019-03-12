const express = require('express')
const request = require('request');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

var app = express();
	app.use( bodyParser.json()); 
	app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

//page id
var VERIFY_TOKEN = "<Your page varify token>";


//Facebook apis call start

// user text is recived here
app.post('/webhook', (req, res) => {  
 
  let body = req.body;
  console.log('EVENT_RECEIVED');
  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      let SENDER_ID=webhook_event.sender.id;
      let RECIPIENT_ID=webhook_event.recipient.id;
      handleResponse(webhook_event,SENDER_ID,RECIPIENT_ID);
      
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});
// Adds support for GET requests to our webhook for verification
app.get('/webhook', (req, res) => {
  
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
   console.log('WEBHOOK ENTERED');
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

//sending message to Facebook
function callSendAPI(response) {
  console.log(response);
   // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": VERIFY_TOKEN },
    "method": "POST",
    "json": response
  }, (err, res, body) => {
   		console.log(body);
  }); 
}
//Facebook function end
//Facebook apis call end
//handeling response 
function handleResponse(webhook_event,SENDER_ID,RECIPIENT_ID){
	//@param
	//webhook_event = contains the user submited text
	//SENDER_ID = required to send back message using graph api
	//RECIPIENT_ID = need not require for basic opration but may be needed in future
	let userMsg=webhook_event.message.text;
	//simple text response hi
	callSendAPI(createJSON(SENDER_ID,'Hi'));
	//response with call back buttons
	let buttons=['Yes','No']
	callSendAPI(createButtonJson(SENDER_ID,'Hi',buttons));
	//response with clickable url
	let list=['Google','Heroku'];
	let url=['https://www.google.com','https://www.heroku.com']
	callSendAPI(createUrlButtonJson(SENDER_ID,'Hi',list,url));
}


//creating response simple text
function createJSON(sender_psid,msg){
  	let request_body = {
    	"recipient": {
      	"id": sender_psid
    	},
    	"message": {
    	"text" : msg
    	}
  	}
 	return request_body; 
}

//creating response with button
function createButtonJson(sender_psid,msg,list){
	let b=[];
	//only 3 buttons max 
	for(let i=0;i<3;i++){
	    b.push({
	        "type":"postback",
	        "payload":list[i],
	        "title":list[i]
	        });
	}
	let jsonString={
		  	"recipient":{
		    "id":sender_psid
		  	},
		  	"message":{
		    	"attachment":{
		      		"type":"template",
		      		"payload":{
		        		"template_type":"button",
		        		"text":msg,
		        		"buttons":b
		      		}
		    	}
		  	}
		};
	return(jsonString);
}

//create response with url
function createUrlButtonJson(sender_psid,msg,list,url){
	let b=[];
	
	index=0;
	if(list.length<3)
		index=list.length;
	else
		index=3;
	//only 3 buttons max 
	for(let i=0;i<index;i++){
		
			b.push({
	        "type":"web_url",
	        "url":url[i],
	        "title":list[i]
	        });	
	}
	console.log(b);
	let jsonString={
		  	"recipient":{
		    "id":sender_psid
		  	},
		  	"message":{
		    	"attachment":{
		      		"type":"template",
		      		"payload":{
		        		"template_type":"button",
		        		"text":msg,
		        		"buttons":b
		      		}
		    	}
		  	}
		};
	return(jsonString);
}

//formating facebook send json end
