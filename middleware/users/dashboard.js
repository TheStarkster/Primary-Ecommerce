module.exports = {
    UserDashboardHandler : function(req,res){
        console.log(req.session.USER+"User-A");
        if(req.session.USER && req.session.USER.isUser == true){
            res.render('masters\\users\\dashboard',{

            });
            console.log(req.session.USER);
        }else{
            req.session.destroy();
            res.redirect('../../login');
        }
    }
}