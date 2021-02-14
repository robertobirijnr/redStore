const expressjwt = require('express-jwt');

exports.protected = expressjwt({
    secret:process.env.JWT_SECRETE,
    algorithms: ["HS256"],
    usersProperty:'auth'
})