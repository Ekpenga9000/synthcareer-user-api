const jwt = require("jsonwebtoken"); 

const secretKey = process.env.SESSION_SECRET;

const createToken = (payload, duration) => {
    const token = jwt.sign(payload, secretKey, {
        expiresIn: duration
    }); 
    return token; 
}

const validateToken = (token, key) => {
    if (!token) {
        return null; 
    }
    let result; 
    const authToken = token.split(" ")[1]; 
    jwt.verify(authToken, secretKey, (err, decode) => {
        if (err) {
            return null; 
        }
        result = decode[key]; 
    })

    return result; 
}


module.exports = {
    createToken, 
    validateToken 
}