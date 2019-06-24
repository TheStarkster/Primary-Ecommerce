const router = require('express').Router();
//Dashboard Paths..
router.get('/dashboard',(req,res) => require('../middleware/users/dashboard').UserDashboardHandler(req,res));

module.exports = router;