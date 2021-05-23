const mongoose = require("mongoose");
const { Schema, model }=mongoose;
const productSchema= new Schema({
    fileName: { 
        type: String, 
        required: true, 
        trim: true,
    },
    productName: { 
        type: String, 
        required: true, 
        trim: true,
    },

    productDesc: { 
        type: String, 
        required: true,
        trim: true, 
    },

    productPrice: {
        type: Number,
        required: true,
        
    },
    productCategory: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Category' },
    productQty:{
        type: Number,
        required:true,
    }

}, { timestamps: true });

module.exports= Product= model("product", productSchema);


{/*reviews: [
    {
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        review: String
    }
],*/}