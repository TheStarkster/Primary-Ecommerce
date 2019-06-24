const Users = require('../../models/Users');
module.exports = {
    Handler: function (req, res) {
        Users.find({}).then(u => {
            if (u) {
                res.render('masters\\admin\\manageusers');
            } else {
                res.render('masters\\admin\\manageusers');
            }
        })
    },
    EditUserHandler: function (req, res) {
        console.log(req.body);
        Users.findOne({
            name: req.body.Oldname,
            email: req.body.Oldemail
        })
            .then(u => {
                console.log(u);
                if (u) {
                    Users.updateOne({
                        name: req.body.Oldname,
                        email: req.body.Oldemail
                    }, {
                            name: req.body.Newname,
                            email: req.body.Newemail,
                            password: req.body.Newpassword
                        })
                        .catch(err=>{
                            console.log(err);
                        });
                }
            })
    },
    FetchUserList: function(req,res){
        Users.find({}).then(u => {
            res.send(u);
        })
    }
}