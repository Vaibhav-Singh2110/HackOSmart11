const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    // type_of_user:{
    //     type:String,
    //     required:true
    // }

  });

  module.exports = mongoose.model('User',UserSchema);