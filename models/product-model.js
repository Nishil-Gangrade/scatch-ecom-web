const mongoose = require("mongoose");

const productSchema = mongoose.Scehma({
    image:String,
    name:String,
    price:Number,

    email:String,
    password:String,
    discount:{
        type:Number,
        default: 0,
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
    

});

module.exports = mongoose.model("product",productSchema);