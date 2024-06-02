var jwt = require('jsonwebtoken');

module.exports = {
    tokenValid: (req, res, next) => {
        try {
            const token = req.header('Authorization')
            req.user = jwt.verify(token.slice(7), 'rubicamp');
            next()
        } catch (err) {
            console.log(err)
            res.status(401).json({success: false, message: 'Access denied'})
        }
    }
}