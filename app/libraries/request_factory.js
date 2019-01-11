let request = require('request');

module.exports = {
    callSendAPI: function (sender_psid, response, access_token, cb = null) {
        console.log('сообщение пошло');
        // Construct the message body
        let request_body = {
            "recipient": {
                "id": sender_psid
            },
            "message": response
        };

        // Send the HTTP request to the Messenger Platform
        request({
            "uri": "https://graph.facebook.com/v2.6/me/messages",
            "qs": { "access_token": access_token },
            "method": "POST",
            "json": request_body
        }, (err, res, body) => {
            if (!err) {
                if (cb) {
                    cb();
                }
            } else {
                console.error("Unable to send message:" + err);
            }
        });
    }
}