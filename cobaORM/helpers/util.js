var jwt = require('jsonwebtoken');
const config = require('../config/secret.json');

class Response {
    constructor(data, success = true) {
        this.data = data,
        this.success = success
    }
}

module.exports = {
    tokenValid: (req, res, next) => {
        try {
            const token = req.header('Authorization')
            req.user = jwt.verify(token.slice(7), config.secretKey);
            next()
        } catch (err) {
            console.log(err)
            res.status(401).json({ success: false, message: 'Access denied' })
        }
    },
    Response,
    generateToken: (data) => {
        return jwt.sign(data, config.secretKey);
    }
}