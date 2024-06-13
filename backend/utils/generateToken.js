import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId,res) => {
  const token=jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:"15d",
  })
  res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000,//maxAge in milliseconds
    httpOnly:true, //prevent XSS attacks cross-site scripting
    sameSite:"strict",//prevent CSRF attacks cross-site request forgery
    secure:process.env.NODE_ENV !== "development", //only send cookie over https
  })
}

export default generateTokenandSetCookie;