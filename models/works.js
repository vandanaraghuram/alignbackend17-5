const mongoose=require("mongoose")


//admin schema

const worksSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    wname:{
        type:String,
        unique:true,
        trim:true,
        required:true

    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    wtype:{
        type:String,
        required:true,
        trim:true
    },
    year:{
        type:String,
        required:true,
        trim:true
    },
    size:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    },
    profile:{
        type: String,
        trim: true,
        required: true
    }

})

const works=new mongoose.model('works',worksSchema)


module.exports=works
