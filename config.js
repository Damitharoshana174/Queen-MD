const fs = require('fs')
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
    OWNER: process.env.OWNER_NUMBER || "94718949747",
    PREFIX: process.env.PREFIX || ".",
    USER_NAME: process.env.USER_NAME || "Damith_Bbh",//Enter Your UserName (contact Nimesh Piyumal for get username and password +94786802371)
    PASSWORD: process.env.PASSWORD || "Damith1749",//Enter Your Password
}
