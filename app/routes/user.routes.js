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

    app.get("/home", userController.getAllPosts)
    app.get("/posts/:id", userController.getUserPosts)
    app.post("/posts", userController.create)
    app.get("/posts/:user_id/:post_id", userController.findOne)
    app.put("/posts/:user_id/:post_id", userController.updateOne)
    //app.post("/posts/:user_id/:post_id", userController.)

    //app.get("/users/user", authJwt.verifyToken, userController.userBoard)
}