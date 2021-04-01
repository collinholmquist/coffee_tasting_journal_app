


module.exports = (sequelize, Sequelize) => {

    User = require("../models/user.model")(sequelize,Sequelize)

    const Post = sequelize.define("posts", {

        author_id: {
            type: Sequelize.INTEGER,
        },
        roaster: {
            type: Sequelize.STRING
        },
        origin: {
            type: Sequelize.STRING
        },
        brew_method:{
            type: Sequelize.STRING
        }, 
        tasting_notes:  {
            type: Sequelize.STRING
        }, 
        rating: {
            type: Sequelize.INTEGER
        },
        comments: {
            type: Sequelize.STRING
        },
        public: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }


    })

    return Post

    //calling to sequelize will automatically generate 
    /*
        Create a user
        find user by id
        find a user by email
        get all user
        find all users by username
    */
}