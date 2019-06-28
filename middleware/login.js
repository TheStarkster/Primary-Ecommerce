const Users = require('../models/Users');
module.exports = {
    LoginHandler: function (req, res) {
        Errors = [];
        if (!req.body.email || !req.body.password) {
            Errors.push({ msg: "Please Fill All Both Fields" });
        }
        if (req.body.password < 6) {
            Errors.push({ msg: "Incorrect Password" });
        }
        if (Errors.length > 0) {
            res.render('login', {
                Errors,
                email: req.body.email,
                password: req.body.password
            });
        } else {
            if (req.body.email == "admin@admin.com" && req.body.password == "admin12") {
                req.session.USER = {
                    user: "admin"
                };
                res.redirect('/admin/dashboard');
            } else {
                Users.findOne({ email: req.body.email })
                    .then(u => {
                        if (u && u.password == req.body.password) {
                            // res.end();
                            // console.log(__dirname+"\\views");
                            req.session.USER = u;
                            res.redirect('/users/dashboard');
                        } else {
                            // res.end();
                            Errors.push({ msg: "Wrong Password" });
                            res.render('login', {
                                Errors,
                                email: req.body.email,
                                password: req.body.password
                            });
                        }
                    });
            }
        }
    }
}
