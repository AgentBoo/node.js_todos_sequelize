// NOTE: Modules
const express = require('express'),
      bodyParser = require('body-parser'),
      mustacheExpress = require('mustache-express');

// NOTE: Port
const port = process.env.PORT || 3000;

// NOTE: Router
const routerGen = require('./controllers/routes.js');

// NOTE: Express app
const app = express();
      app.engine('mustache', mustacheExpress());
      app.set('view engine', 'mustache');
      app.set('views', './views');
      app.use('/public', express.static('./public'));
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));

// Router
      app.use('/', routerGen);

// Routes handler
      app.get('/', (req, res) => res.redirect('/todos'));

// Listening to port 8000
      app.listen(port, () => console.log('Listening on ' + port));
