const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const engine = require('ejs-locals');
const db = require('./private/keys').mongoURI;
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.listen(5000);

app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const client = new MongoClient(db, { useNewUrlParser: true });
client.connect(err => {
    // perform actions on the collection object
    client.close();
  });

//mere Pyaare Headers...
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store');
    next();
});  
app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true
  }));
  app.use((req,res,next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
app.use(express.static(__dirname + '/public'));
app.use('/',require('./routes/paths'));
app.use('/users',require('./routes/users'));
app.use('/admin',require('./routes/admin'));
app.engine('ejs', engine);
app.use(expressLayouts);
app.set('view engine','ejs');