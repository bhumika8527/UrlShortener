import {Url} from "../Models/Url.js"
import shortid from "shortid"

export const urlShort = async(req,res)=>{
    const longUrl = req.body.longUrl
    const shortCode = shortid.generate();
    const shortUrl = `http://localhost:3001/${shortCode}`


    //save to db
    const newUrl = new Url({shortCode , longUrl})
    await newUrl.save();

    console.log("your short URl is ,newUrl")

    res.render("server.ejs" , {shortUrl})
}