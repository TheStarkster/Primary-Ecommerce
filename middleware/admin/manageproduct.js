const Products = require('../../models/Products');

module.exports = {
    Handler: function (req, res) {
        if (req.session.USER) {
            res.render('masters\\admin\\manageproducts');
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
            })
    },
    FetchProductList: function(req,res){
        Products.find({}).then(u => {
            res.send(u);
        })
    }
}