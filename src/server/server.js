/**
 * Created by Arnold on 2016/12/30.
 */
// import modules
var express = require('express'), session = require('express-session'), MongoStore = require('connect-mongo')(session),
  path = require('path'), bodyParser = require('body-parser'), methodOverride = require('method-override');

// import config
var config = require('./config/config.js');

// import logger
var logger = require('./utils/logger.js');

// import routers
var routes = require('./routes/routes.js');

var app = express();

// set use ejs template
app.set('view engine', 'ejs');

// override with different headers; last one takes precedence
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));

// configuration static files catalog
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/views')));
app.use(express.static(path.join(__dirname, '../public/assets')));

// configuration session
app.use(session({
  resave: false,
  saveUninitialized: true,
  name: config.session.key,
  secret: config.session.secret,
  cookie: {
    maxAge: config.session.maxAge
  },
  store: new MongoStore({
    url: config.mongodb
  })
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// set res locals data
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  next();
});

// register routes
routes.register(app);

// start listening port
module.exports = app.listen(config.port, function () {
  logger.info('server is up and listening port : 8080');
});

