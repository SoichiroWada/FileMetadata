var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var upload = multer({dest:'uploads/'});

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

/*
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});
*/
app.post('/upload', upload.single('file'), function( req, res, next ) {
  console.log(res);
  res.json(req.file);
})

app.listen( 4000, function () {
    console.log('Listening to port 4000');
});
