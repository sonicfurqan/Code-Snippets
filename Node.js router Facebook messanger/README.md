# Facebook_Messenger_Router
Simple node script to receive and send message
There are lot of npm for FB messaging but this too only display how to use the functionality for total beginners

app.get('/webhook');
in this call validate facebook call by using page verification token passed from webhook call, the same token is to be assigned to variable VERIFY_TOKEN

app.post('/webhook');
in this call, Facebook sends the event to over server that user has made
json body received contains event details 
roughly  in this hierarchy details needed are stored like user message and what type of event along with sender id 
body.object.entry[0].messaging[0]

callSendAPI(response)
in this method, rest post call is sent to https://graph.facebook.com/v2.6/me/messages along with sender id as parameter and json body 
usually used JSON structure is defined in following methods
//normal text reply
creates on()
```json
      {
        "recipient": {
          "id": sender_psid
        },
        "message": {
        "text" : <reply text>
        }
```
//text with buttons of postback type
```javascript
createButtonJson()
```
 ```json      
     {
              "recipient":{
            "id":sender_psid
              },
              "message":{
                "attachment":{
                      "type":"template",
                      "payload":{
                        "template_type":"button",
                        "text":msg,
                        "buttons":[
                          {
                            "type":"postback",
                            "payload":<text that is returend on click>,
                            "title":<title>
                            }
                ]
                      }
                }
              }
        }
```
//text with url buttons 
```javascript
createUrlButtonJson()
```
```json
    "recipient":{
            "id":sender_psid
              },
              "message":{
                "attachment":{
                      "type":"template",
                      "payload":{
                        "template_type":"button",
                        "text":msg,
                        "buttons":[
                              {
                        "type":"web_url",
                        "url":<url>,
                        "title":<title>
                        }
                ]
                      }
                }
              }
        }
```
