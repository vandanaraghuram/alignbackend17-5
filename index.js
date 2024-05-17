require('dotenv').config()
const express=require("express")

const cors=require("cors")
const router=require('./routes/routes')
const server=express();


server.use(cors())
server.use(express.json());
server.use(router)
server.use('/worksimage',express.static('./uploads'))

const{OAuth2Client}=require('google-auth-library')

require('./connections/dbConnection')
const port=4000 || process.env.port
server.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})