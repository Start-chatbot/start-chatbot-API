const fs = require('fs');
const bonus_factory = require('../libraries/bonus_factory')

module.exports = {
  writeConfig: (value, path) => {
    let json = JSON.stringify(value);
    fs.writeFile(path, json, function (error) {
      if (error) throw error;
    });
  },
  refreshToken: (secureConfig, securePath, routeName) => {
    let query = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    let value = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    secureConfig.tokens[routeName].query = query;
    secureConfig.tokens[routeName].value = value;

    let json = JSON.stringify(secureConfig);
    fs.writeFile(securePath, json, function (error) {
      if (error) throw error;
    });
  },
  genTemplate: (title) => {
    //let payload = bonus_factory.creteBonus(bonusType,steambits);

    return {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [
            {
              "title": title,
              "image_url": "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/45175793_334991173901017_99047877195595776_n.jpg?_nc_cat=111&_nc_ht=scontent-frt3-1.xx&oh=fbdf035aec783f42414614df98514248&oe=5C765D30",
              "buttons": [
                {
                  "type":"postback",
                  "title":"Cats",
                  "payload":"1"
                },
                {
                  "type": "web_url",
                  "url": "https://www.facebook.com/startchatpage/",
                  "title": "VISIT PAGE"
                }
              ]
            },
            {
              "title": title,
              "image_url": "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/45175793_334991173901017_99047877195595776_n.jpg?_nc_cat=111&_nc_ht=scontent-frt3-1.xx&oh=fbdf035aec783f42414614df98514248&oe=5C765D30",
              "buttons": [
                {
                  "type":"postback",
                  "title":"Cats",
                  "payload":"1"
                },
                {
                  "type": "web_url",
                  "url": "https://www.facebook.com/startchatpage/",
                  "title": "VISIT PAGE"
                }
              ]
            }
          ]
        }
      }
    }
  }
}

// "attachment": {
//   "type": "template",
//   "payload": {
//     "template_type": "generic",
//     "elements": [
//       {
//         "title": title,
//         "image_url": image,
//         "buttons": [
//           {
//             "type":"postback",
//             "title":"Cats",
//             "payload":"1"
//           },
//           {
//             "type": "web_url",
//             "url": "https://www.facebook.com/startchatpage/",
//             "title": "VISIT PAGE"
//           }
//         ]
//       }
//     ]
//   }
// }