require("dotenv").config();

module.exports={
    jwtSecret: process.env.JWTSECRET ?? "G Ramsay's Secret!"
}