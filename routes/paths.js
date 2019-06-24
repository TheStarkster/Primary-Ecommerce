const router = require('express').Router();

router.get('/',(req,res) => res.send(require('../middleware/welcome')));
//Login Paths..
router.get('/login',(req,res) => res.render('login'));
router.post('/login',(req,res) => require('../middleware/login').LoginHandler(req,res));
//Logout path..
router.post('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('login');
});
//Register Paths..
router.get('/register',(req,res) => res.render('register'));
router.post('/register',(req,res) => require('../middleware/register').RegisterHandler(req,res));
module.exports = router;