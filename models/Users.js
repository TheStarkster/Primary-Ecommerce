const mongoose = require('mongoose');
// This model is Just For Normal Users Not For The Admin...
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    isUser:{
        type:Boolean,
        required:true
    },
    credits:{
        amount: {
            type:String,
            require:false
        },
        required:false
    }
});

// const credits = new mongoose.Schema({
//     balance:{
//         type: mongoose.Schema.Types.Decimal128,
//         required:false
//     }
// });

const User = mongoose.model('user',userSchema);
// const Credits = mongoose.model('credit',credits);
module.exports = User;