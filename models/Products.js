const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

const Products = mongoose.model('products',productSchema);
module.exports = Products;