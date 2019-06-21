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
    }
});

const User = mongoose.model('user',userSchema);
module.exports = User;