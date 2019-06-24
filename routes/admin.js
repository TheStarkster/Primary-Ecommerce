const router = require('express').Router();

//Dashboard Paths..
router.get('/dashboard',(req,res) => require('../middleware/admin/dashboard').AdminDashboardHandler(req,res));
//Handlers Paths...
router.get('/Manage-Products',(req,res) => require('../middleware/admin/manageproduct').Handler(req,res));
//Ajax Calls and others...
router.post('/CreateProduct',(req,res) => require('../middleware/admin/manageproduct').CreateProductHandler(req,res));
module.exports = router;