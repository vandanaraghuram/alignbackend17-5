const mongoose=require("mongoose")


//admin schema

const adminSchema=new mongoose.Schema({
    uname:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true

    },
    psw:{
        type:String,
        required:true,
        trim:true
    },
    isAdmin:{
        type:Boolean,
        default:true
    }
})

const admins=new mongoose.model('admins',adminSchema)


module.exports=admins
