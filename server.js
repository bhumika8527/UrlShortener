import express from 'express'
import mongoose from 'mongoose';
import { urlShort } from './Controllers/url.js';  // fixed path


const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://bhumika8527_db_user:IHUf3KBdFU8ec0Nc@cluster0.vpnvclv.mongodb.net/" ,{
    "dbName" : "nodejs_series"
}).then( ()=>console.log("Mongodb connected")).catch((error)=>console.log(error));


app.get('/', (req,res)=>{
    res.render("server.ejs",{shortUrl:null})
})

// handle Url Submission
app.post('/shorten' ,urlShort)







app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})