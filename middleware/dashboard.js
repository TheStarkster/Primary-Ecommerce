module.exports = {
    DashboardHandler : function(req,res){
        if(req.session.USER){
            res.render('dashboard',{
                user : req.session.USER
            })
        }else{
            res.redirect('login');
        }
    }
}