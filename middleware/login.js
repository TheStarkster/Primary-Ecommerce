
module.exports = {
    LoginHandler : function(req,res){
        return console.log(res.session.LoginMsg);
    }
}