const router = require('express').Router();

//Dashboard Paths..
router.get('/dashboard',(req,res) => require('../middleware/admin/dashboard').AdminDashboardHandler(req,res));
//Handlers Paths...
router.get('/Manage-Products',(req,res) => require('../middleware/admin/manageproduct').Handler(req,res));
router.get('/Manage-Users',(req,res) => require('../middleware/admin/manageusers').Handler(req,res));
//Ajax Calls and others...
router.post('/CreateProduct',(req,res) => require('../middleware/admin/manageproduct').CreateProductHandler(req,res));
router.post('/EditUser',(req,res) => require('../middleware/admin/manageusers').EditUserHandler(req,res));
router.post('/FetchUsers',(req,res) => require('../middleware/admin/manageusers').FetchUserList(req,res));
router.post('/EditStatus',(req,res) => require('../middleware/admin/manageusers').EditUserStatus(req,res));
router.post('/DeleteUser',(req,res) => require('../middleware/admin/manageusers').DeleteUser(req,res));
router.post('/FetchProducts',(req,res) => require('../middleware/admin/manageproduct').FetchProductList(req,res));
module.exports = router;