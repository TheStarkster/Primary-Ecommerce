
module.exports = {
    LoginHandler : function(req,res){
        console.log(req.session.LoginMsg);
    }
}