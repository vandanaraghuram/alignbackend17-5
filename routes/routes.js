
const express=require('express')
const { signupAdmin, adminLogin,addwork,getAllWorks,addQuotes, getQuotes } = require('../controllers/logic')
const upload = require('../middlewears/multermiddlewears')
;


const router = new express.Router()

//path for admin signup
 router.post("/align/adminSignup",signupAdmin)

 //path for login
 router.post("/align/adminLogin",adminLogin)

 //add works
 router.post("/align/addWorks",upload.single("user_profile"),addwork)

 //get works
 router.get("/align/getWorks",getAllWorks)

  //add quote
  router.post("/align/addquotes",addQuotes)

   //get works
 router.get("/align/getQuotes",getQuotes)

 module.exports=router