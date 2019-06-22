const router = require('express').Router();

router.get('/',(req,res) => res.send(require('../middleware/welcome')));
//Login Paths..
router.get('/login',(req,res) => res.render('login'));
router.post('/login',(req,res) => require('../middleware/login').LoginHandler(req,res));
//Register Paths..
router.get('/register',(req,res) => res.render('register'));
router.post('/register',(req,res) => require('../middleware/register').RegisterHandler(req,res));
//Dashboard Paths..
router.get('/dashboard',(req,res) => require('../middleware/dashboard').DashboardHandler(req,res));
// router.get('/login',(req,res) => require('../middleware/login'));
// router.get('/register',(req,res) => require('../middleware/register'));

module.exports = router;