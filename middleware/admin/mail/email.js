const nodemailer = require('nodemailer');
module.exports = {
    Handler: function(req,res){
        let trasnporter = nodemailer.createTransport({
            service : 'gmail',
            secure : 'false',
            port: 25,
            auth: {
                user : '<YOUR EMAIL HERE>',
                pass: '<PASSWORD HERE>'
                //To Make This Feature Work Read The Following....
                //IMPORTANT NOTE: Please Goto your Gmail-Account> Settings > Forwarding and POP/IMAP > Enable ---> [IMAP]
                //Also Goto This Link --- > https://myaccount.google.com/lesssecureapps and then > Allow Less Secure Apps
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        console.log(req.body);
        let HelperOption = {
            from: '"Gurkaran Singh"'+ '<'+req.body.MailFrom+'>',
            to: req.body.MailTo,
            subject:req.body.Subject,
            text:req.body.Text
        }
        trasnporter.sendMail(HelperOption,(err,info)=>{
            if(err){
                console.log(err);
            }else{
                res.send("Message Sent!");
            }
        })
    }
}