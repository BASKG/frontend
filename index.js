const express = require('express'),
      mustacheExpress = require('mustache-express'),
      pgp = require('pg-promise')(),
      bodyParser = require('body-parser');
      app = express(),
      PORT = process.env.PORT || 8080;

// setup for mustache express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// My routes
app.use(require('./routes'));

// Console lets me know wassup
app.listen(PORT, () => console.log('Listening on port', PORT));
