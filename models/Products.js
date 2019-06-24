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
        type:mongoose.Schema.Types.Decimal128,
        required:true
    }
});

const Products = mongoose.model('products',productSchema);
module.exports = Products;