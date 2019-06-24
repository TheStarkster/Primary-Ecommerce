module.exports = {
    Handler : function(req,res){
        if(req.session.USER){
            res.render('masters\\admin\\manageproducts',{

            })
        }else{
            req.session.destroy();
            res.redirect('../../login');
        }
    }
}