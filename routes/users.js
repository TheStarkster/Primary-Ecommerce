const router = require('express').Router();
//Dashboard Paths..
router.get('/dashboard',(req,res) => require('../middleware/users/dashboard').UserDashboardHandler(req,res));
router.post('/AddCredits',(req,res) => require('../middleware/users/dashboard').CreditHandler(req,res));

module.exports = router;