const mongoose = require("mongoose");

const userSchema = mongoose.Scehma({
    fullname:{
        type:String,
        trim:true,
        minLength:3,
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default: [],
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default: [],
    },
    contact:Number,
    picture:String,

});

module.exports = mongoose.model("user",userSchema);