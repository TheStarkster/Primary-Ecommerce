const router = require('express').Router();
//Dashboard Paths..
router.get('/dashboard',(req,res) => require('../middleware/users/dashboard').UserDashboardHandler(req,res));
router.post('/AddCredits',(req,res) => require('../middleware/users/dashboard').CreditHandler(req,res));
router.post('/Buy/:id',(req,res) => require('../middleware/users/users').BuyHandler(req,res));

module.exports = router;