const admins= require("../models/adminCollection")
const works=require("../models/works")
const quotes=require("../models/quotes")
const jwt=require('jsonwebtoken')





//logicc for admin signup
const signupAdmin=async(req,res)=>{
    const{uname,email,psw,cpsw}=req.body
    if(!uname || !email || !psw || !cpsw){
        res.status(400).json("all data are required")
    }
    else{
        // try{
           //if already exist
        let preAdmin=await admins.findOne({email})
        if(preAdmin){
             res.status(400).send('user already exists')
        }
        else{
            let newAdmin=new admins({
                uname:uname,
                email:email,
                psw:psw,
                cpsw:cpsw

            })
            if(psw==cpsw){
                await newAdmin.save()
                res.status(200).json(newAdmin)
            }
            else{
                res.status(400).json("passwords do not match")
            }
        }
        // }
        // catch{
        //     res.status(400).json("connection error")
        // }
    }
}


//logic form login
const adminLogin=async (req,res)=>{
    const{email,psw}=req.body
    if(!email || !psw){
        res.status(400).json("All data are required")}
        else{
           const login=await admins.findOne({email,psw})
            if(login){
               var token=jwt.sign({email},"secretkey1234")
                res.status(200).json({
                email:login.email,
                psw:login.psw,
                token
               })
            
            }
            else{
                res.status(400).json("Invalid email or password")
            }
        }
}


//logic for adding works
const addwork=async (req,res)=>{
    if (!req.file) {
        return res.status(400).json({ error: 'No file received' });
    }
    
    const profile=req.file.filename
    const{description,wname,location,wtype,year,size,price}=req.body
    console.log({description,wname,location,wtype,year,size,price,profile});
    let work={description,wname,location,wtype,year,size,price,profile}
    await works.create(work).then((result,error)=>{
        if(result !="null" && result != ""){
            res.send(result)
        }
        else{
            res.send("error",error)
        }
    })
     
}

//logic for getting works
const getAllWorks=async(req,res)=>{
    try {
      const data = await works.find();
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json("No data found");
      }
    } catch (error) {
      res.status(400).json("connection error", error);
    }
  }


  //logic for adding quotes
const addQuotes=async (req,res)=>{
    const{uname,email,phn}=req.body
    console.log({uname,email,phn});
    let quote={uname,email,phn}
    await quotes.create(quote).then((result,error)=>{
        if(result !="null" && result != ""){
            res.send(result)
        }
        else{
            res.send("error",error)
        }
    })
     
}


//logic for getting quotes
const getQuotes=async (req,res)=>{
    try {
        const data = await quotes.find();
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(400).json("No data found");
        }
      } catch (error) {
        res.status(400).json("connection error", error);
      }
}

module.exports={signupAdmin,adminLogin,addwork,getAllWorks,addQuotes,getQuotes}