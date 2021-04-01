const { authJwt } = require('../middleware')
const userController = require("../controllers/user.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next()
    })

    app.get("/posts/all", userController.getAllPosts)
    app.post("/posts/:id", userController.getUserPosts)
    app.post("/posts", userController.create)

    //app.get("/users/user", authJwt.verifyToken, userController.userBoard)
}