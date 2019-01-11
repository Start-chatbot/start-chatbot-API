"use strict";

// All config files
let config = require("config"),
  secure = require("../../../config/secure"),
  message_config = require("./fb_config");

// All libraries
const tools = require("../../libraries/tools"),
  request_factory = require("../../libraries/request_factory"),
  database_factory = require("../../libraries/database_factory");

// All local variables
const message_config_path = "app/routes/facebook/fb_config.json";
const secure_path = "config/secure.json";
const myCollection = "fishPlayers";
let myToken = config.facebook.page.access_token;
let messagePeriod = 24; // in hours

module.exports = function(app, db) {
  app.set("view engine", "ejs");

  app.get("/fb", (req, res) => {
    let VERIFY_TOKEN = "CUSTOM_FB_TOKEN";

    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (mode && token) {
      if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        res.status(200).send("EVENT_RECEIVED");
      }
    } else {
      res.status(200).send("EVENT_RECEIVED");
    }
  });

  app.post("/fb", (req, res) => {
    console.log("sad");
    let body = req.body;

    if (body.type === "confirmation") {
      res.end("6394ab9e");
    }

    if (body.object === "page") {
      body.entry.forEach(function(entry) {
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);

        let sender_psid = webhook_event.sender.id;
        console.log("Sender PSID: " + sender_psid);

        if (webhook_event.postback) {
          console.log("event postback " + webhook_event.postback.payload);
        } else if (webhook_event.message) {
          console.log("event message " + webhook_event.message.text);
          handleMessage(sender_psid, webhook_event.message.text);
        }
      });
      res.status(200).send("EVENT_RECEIVED");
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      //res.sendStatus(404);
    }
  });

  // ОБРАБОТКА ХУКОВ

  function handleMessage(sender_psid, text) {
    let response;
    response = tools.genTemplate("ты написал мне: " + text);
    request_factory.callSendAPI(sender_psid, response, myToken);

    // db.collection('fishPlayers').findOne({ psid: sender_psid }, (err, item) => {
    //     if (err) {
    //         res.send({ 'error': 'An error has occurred' });
    //     } else {
    //         if (item === null) {
    //             database_factory.addPlayerToDb(db, myCollection, sender_psid, play_time);
    //             //res.status(200).send('EVENT_RECEIVED');
    //         }
    //         else {
    //             database_factory.updatePlayerInDb(db, myCollection, item._id, sender_psid, play_time);
    //             response = tools.genTemplate(message_config.title, message_config.imageLink, "daily", 5000);
    //             request_factory.callSendAPI(item.psid, response, myToken);
    //             res.status(200).send('EVENT_RECEIVED');
    //         }
    //     }
    // });
  }

  const handlePostback = (sender_psid, received_postback) => {
    let response;

    // Получим данные postback-уведомления
    let payload = received_postback.payload;

    if (payload === "GET_STARTED") {
      response = askTemplate("Are you a Cat or Dog Person?");
      callSendAPI(sender_psid, response);
    }
  };

  // function manualMessageSending(message, image, period) {
  //     console.log("manual message");
  //     let count = db.collection('fishPlayers').count({});
  //     db.collection('fishPlayers').find().toArray(function (err, docs) {
  //         if (err) {
  //             console.log("'error': 'An error has occurred'");
  //         } else {
  //             count.then(length => {
  //                 for (let i = 0; i < length; i++) {
  //                     let time = Date.now();
  //                     if (time - docs[i].time >= period * 3600000) {
  //                         let response;
  //                         response = tools.genTemplate(message, image, "daily", 5000);
  //                         // Sends the response message
  //                         database_factory.updatePlayerInDb(db, myCollection, docs[i]._id, docs[i].psid, time);
  //                         request_factory.callSendAPI(docs[i].psid, response, myToken);
  //                         //res.status(200).send('EVENT_RECEIVED');
  //                     }
  //                 }
  //             });
  //         }
  //     });
  // }

  // setTimeout(function startBot() {
  //     let count = db.collection('fishPlayers').count({});
  //     let sendPeriod = messagePeriod * 3600000;
  //     db.collection('fishPlayers').find().toArray(function (err, docs) {
  //         if (err) {
  //             console.log("'error': 'An error has occurred'");
  //         } else {
  //             count.then(length => {
  //                 for (let i = 0; i < length; i++) {
  //                     let time = Date.now();;
  //                     if (time - docs[i].time >= sendPeriod) {
  //                         let response;
  //                         response = tools.genTemplate(message_config.title, message_config.imageLink, "daily", 5000);
  //                         // Sends the response message
  //                         database_factory.updatePlayerInDb(db, myCollection,docs[i]._id, docs[i].psid, time);
  //                         request_factory.callSendAPI(docs[i].psid, response, myToken);
  //                     }
  //                 }
  //             });
  //         }
  //     });
  //     setTimeout(startBot, 60000);
  // }, 60000);
};
