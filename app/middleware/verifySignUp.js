const db = require("../models")
const User = db.user

checkDuplicates = (req, res, next) => {

   User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "User already taken"
            })
            return
        }
     

        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.status(400).send({
                    message: "Email already in use"
                })
                return
            }

                next()
            })
        }).catch(err => {
            res.status(500).send({message: err.message})
        })
    
}

const verifySignUp = {
    checkDuplicates: checkDuplicates
}

module.exports = verifySignUp