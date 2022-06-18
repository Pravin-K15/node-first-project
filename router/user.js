const router = require("express").Router();
const UserModel = require("../schema/user")
const { sign } = require("jsonwebtoken")
const AuthMiddleware = require("../middleware/auth")

// /api/v1/user/login
router.post("/login", async function (req, res) {

    try {
        const { body } = req;
        const { email, name, password } = body;

        if (email && name && password,
            typeof email == "string" && typeof password == "string" &&
            email !== "" && password !== ""
        ) {
            const doc = await UserModel.findOne({ email, password })
            const token = sign({ id: doc._id }, "SECRET_KEY", { expiresIn: "24h" })
            res.json({ status: "success", message: "User logged in", token: token })
        }
        else {
            res.status(400).json({ status: "error", message: "Invalid form info" })
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({ status: "error", message: "Invalid user info" })
    }

})
// /api/v1/user/register
router.post("/register", async function (req, res) {
    const { body } = req;
    const { email, name, password } = body;

    if (email && name && password,
        typeof email == "string" && typeof name == "string" && typeof password == "string" &&
        email !== "" && name !== "" && password !== ""
    ) {
        const user = new UserModel({ email, name, password });
        const doc = await user.save();
        res.json({ status: "success", message: "user added successfully", id: doc._id })
    }
    else {
        res.status(400).json({ status: "error", message: "Invalid form info" })
    }

    const user = new UserModel({});
    user.save();
})
// /api/v1/user/whoami
router.get("/whoami", AuthMiddleware, function (req, res) {
    res.json({ message: "hello" })
})

module.exports = router;