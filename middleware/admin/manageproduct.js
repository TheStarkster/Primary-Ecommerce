const Products = require('../../models/Products');

module.exports = {
    Handler: function (req, res) {
        if (req.session.USER) {
            Products.find({})
                .then(u => {
                    if (u) {
                        ProductList = u;
                        console.log(u);
                        res.render('masters\\admin\\manageproducts', {u});
                    }
                })
        } else {
            req.session.destroy();
            res.redirect('../../login');
        }
    },
    CreateProductHandler: function (req, res) {
        //Check if Product exists already...
        Products.findOne({ title: req.body.title })
            .then(p => {
                if (p) {
                    res.send({
                        title: "Already Exists"
                    })
                } else {
                    const NewProduct = new Products({
                        title: req.body.title,
                        description: req.body.desc,
                        price: req.body.price
                    });
                    NewProduct.save();
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
}