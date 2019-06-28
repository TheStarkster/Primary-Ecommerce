const Users = require('../../models/Users');
module.exports = {
    UserDashboardHandler: function (req, res) {
        if (req.session.USER && req.session.USER.isUser == true) {
            var UserObj = req.session.USER;
            res.render('masters\\users\\dashboard', {
                UserObj
            });
        } else {
            req.session.destroy();
            res.redirect('../../login');
        }
    },
    CreditHandler: function (req, res) {
        // console.log(req.body.NewAmount);
        // // console.log(Amount);
        // console.log(req.session.USER.credits.amount);
        var NewAmount = parseFloat(req.session.USER.credits.amount) + parseFloat(req.body.NewAmount);
        // var Amount = (NewAmount + " <--- Here' The Problem May Be!!";
        req.session.USER.credits.amount = NewAmount;
        // console.log(req.body.NewAmount);
        // // console.log(Amount);
        // console.log(req.session.USER);
        // console.log(req.session.USER.credits.amount);
        Users.updateOne({
            name:
                req.session.USER.name
        }, {
                $set: {
                    credits: {
                        amount: NewAmount //Renew amount is not actually the only new amount but its the total = old + new...
                    }
                }
            })
            .then(u => {
                if (u) {
                    // console.log("_____________");
                    // console.log(u);
                    // res.send(u);
                    res.send({
                        msg:"Amount Added"
                    });
                }
            })
            .catch(err => console.log(err));
    },
    DashboardHandler: function () {

    }
}