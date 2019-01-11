'use strict';
let fs = require('fs');
let http = require('http');
let express = require('express'),
  config = require('config'),
  bodyParser = require('body-parser'),
  MongoClient = require('mongodb').MongoClient,
  db = require('./database'),
  app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || config.port;

require('./app/routes')(app);
require('./app/routes/facebook/fb_routes')(app);
require('./app/routes/vk/vk')(app);

// MongoClient.connect(db.FBUrl, (err, FBDatabase) => {
//   if (err) return console.log(err)
//   require('./app/routes/facebook/fb_routes')(app, FBDatabase);
//   require('./app/routes/vk/vk')(app, FBDatabase);
// });

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});

app.get('/', (req, res) => {
  let file = fs.ReadStream('index.html');
  sendFile(file, res);
});

function sendFile (file, res){
  file.pipe(res);
  res.on('close', function() {
    file.destroy();
  }) 
}