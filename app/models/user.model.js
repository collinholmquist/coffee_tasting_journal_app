module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {

        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    })

    return User

    //calling to sequelize will automatically generate 
    /*
        Create a user
        find user by id
        find a user by email
        get all user
        find all users by username
    */
}