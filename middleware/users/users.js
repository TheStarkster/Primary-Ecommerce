const User = require('../../models/Users');
const Product = require('../../models/Products');
module.exports = {
    BuyHandler: function (req, res) {
        console.log(req.params.id);
        Product.findById({ _id: req.params.id }).then(u => {
            var NewAmount = parseFloat(req.session.USER.credits.amount) - parseFloat(u.price);
            console.log(NewAmount);
            req.session.USER.credits.amount = NewAmount;
            if (NewAmount > 0) {
                User.updateOne({ _id: req.session.USER._id }, {
                    $set: {
                        credits: {
                            amount: NewAmount
                        }
                    }
                }).then(u => {
                    res.send({
                        msg:"Success",
                        amount:NewAmount
                    });
                }).catch(err => console.log(err));
            } else {
                res.send("Balance Insufficient");
            }

        });
    }
}