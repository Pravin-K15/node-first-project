const {verify} = require("jsonwebtoken")
const UserModel = require("../schema/user")

async function AuthMiddleware(req, res, next) {
    const {headers} = req;
    const {authorization} = headers;

    try {
        const decoded = verify(authorization, "SECRET_KEY")
        const user = await UserModel.findById(decoded.id);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({status: "error", message: "not authorized"})
    }
}

module.exports = AuthMiddleware