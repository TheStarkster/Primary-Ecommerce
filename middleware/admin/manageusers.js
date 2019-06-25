const Users = require('../../models/Users');
module.exports = {
    Handler: function (req, res) {
        res.render('masters\\admin\\manageusers');
    },
    EditUserHandler: function (req, res) {
        Users.findOne({
            name: req.body.Oldname,
            email: req.body.Oldemail
        })
            .then(u => {
                if (u) {
                    Users.updateOne({
                        name: req.body.Oldname,
                        email: req.body.Oldemail
                    }, {
                            name: req.body.Newname,
                            email: req.body.Newemail,
                            password: req.body.Newpassword
                        })
                        .then(u=>{
                            Users.find({}).then(u => {
                                // console.log("****");
                                // console.log(u);
                                // console.log("****");
                                res.send(u);
                            })
                        })
                        .catch(err=>{
                        });
                }
            })
            
    },
    FetchUserList: function(req,res){
        Users.find({}).then(u => {
            // console.log("-----");
            // console.log(u);
            // console.log("-----");
            res.send(u);
        })
    },
    EditUserStatus: function(req,res){
        Users.findOne({
            name: req.body.name,
            email: req.body.email
        })
            .then(u => {
                if (u) {
                    Users.updateOne({
                        name: req.body.name,
                        email: req.body.email
                    }, {
                        status: req.body.status == "Active" ? "Inactive" : "Active"
                        })
                        .then(u=>{
                            Users.find({}).then(u => {
                                // console.log("****");
                                // console.log(u);
                                // console.log("****");
                                res.send(u);
                            })
                        })
                        .catch(err=>{
                        });
                }
            })
    },
    DeleteUser: function(req,res){
        Users.findOneAndDelete({
            name: req.body.name,
            email: req.body.email
        })
            .then(u => {
                Users.find({}).then(u => {
                    // console.log("****");
                    // console.log(u);
                    // console.log("****");
                    res.send(u);
                })
            })
    }
}