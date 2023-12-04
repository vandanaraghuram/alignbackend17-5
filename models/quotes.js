const mongoose=require("mongoose")


//quote schema

const quoteSchema=new mongoose.Schema({
    uname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phn:{
        type:String,
        required:true,
        trim:true
    }
   
})

const quotes=new mongoose.model('quotes',quoteSchema)


module.exports=quotes
