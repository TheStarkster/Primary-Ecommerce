module.exports = {
    AdminDashboardHandler : function(req,res){
        if(req.session.USER){
            res.render('masters\\admin\\dashboard',{

            })
        }else{
            req.session.destroy();
            res.redirect('../../login');
        }
    }
}