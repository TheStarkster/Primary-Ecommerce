const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const db = require('./private/keys').mongoURI;

const app = express();
app.listen(5000);

app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
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

app.use('/',require('./routes/paths'));
app.use(expressLayouts);
app.set('view engine','ejs');