const jwt = require("jsonwebtoken");

const generateToken = (user) =>{
    return jwt.sign({
        id: user._id,
        role: user.role,
        email: user.email,
    },process.env.JWT_SECRET || "snd5e545dsfew8",{
        expiresIn : "7d"
    })
}

module.exports = generateToken;