const Users = require('../models/Users');
module.exports = {
    RegisterHandler : function(req,res){
        Errors = [];
        if(!req.body.name || !req.body.email || !req.body.password || !req.body.password2){
            Errors.push({msg:"Please Fill All The Fields"});
        }if(req.body.password < 6){
            Errors.push({msg:"Password Should 6 Characters Long"});
        }if(req.body.password !== req.body.password2){
            Errors.push({msg:"Password Doesn't Match"});
        }
        //Lets Register if There's No Error...
        if(Errors.length>0){
            // console.log(__dirname+"\views\register");
            res.render('register',{
                Errors,
                email : req.body.email,
                password : req.body.password
            });
        }else{
            Users.findOne({email:req.body.email})
            .then(u=>{
                if(u){
                    Errors.push({msg:"This Email Already Exists"});
                    // res.removeHeader('Content-Encoding');
                    res.render('register',{
                        Errors,
                        email : req.body.email,
                        password : req.body.password
                    });
                }else{
                    const NewUser = new Users({
                        name: req.body.name,
                        email: req.body.email,
                        password : req.body.password,
                        status : "Active"
                    });
                    NewUser.save()
                    .then(u =>{
                        req.session.LoginMsg = "You Are Successfully Register, Now try Login";
                        res.redirect('login');
                    })  
                    .catch(err => console.log(err));
                }
            })
            .catch(err=>{

            });
        }
       
    }
}