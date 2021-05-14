const db = require('../models/index')
const Post = db.post
const User = db.user

exports.getAllPosts = (req, res) => {

    //get all posts that are marked with the public marking of true.  
    Post.findAll({
        where: {
            public: true
        }
    }).then(posts => {
        res.send(posts)
    }).catch(err => {
        res.status(500).send({message: err.message})
    })
    //res.status(200).send({message: "Public Posts"})
}

exports.getUserPosts = (req, res) => {

    //ensure user exists, then find by pk
    Post.findAll({
        where: {
            author_id: req.params.id
        }
    }).then(data =>{
        res.send(data)
    }).catch(err => {
        res.status(500).send({message: err.message})
    })
}

exports.findOne = (req, res) => {

    Post.findOne({
        where: {
            author_id: req.params.user_id,
            id: req.params.post_id
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({message: err.message})
    })
}

exports.updateOne = (req, res) => {

    updatedPost = {
        roaster: req.body.from_post.roaster,
        origin: req.body.from_post.origin,
        brew_method: req.body.from_post.brew_method,
        tasting_notes: req.body.from_post.tasting_notes,
        rating: req.body.from_post.rating,
        comments: req.body.from_post.comments,
        public: req.body.from_post.public
    }

    Post.update(updatedPost,{
        where: {
            id: req.params.post_id
        }
    }).then(data => {
        res.send(data)
    }). catch(err => {
        res.status(500).send({message: err.message})
    })
}

exports.create = async (req, res) => {

    const newPost = {
        author_id: req.body.author_id,
        roaster: req.body.roaster,
        origin: req.body.origin,
        brew_method: req.body.brew_method,
        tasting_notes: req.body.tasting_notes,
        rating: req.body.rating,
        comments: req.body.comments,
        public: req.body.public
    }
    
   /* {
        "author_id": 2,
        "roaster": "Archetype",
        "origin": "Kenya",
        "brew_method": "Chemex",
        "tasting_notes": "Berry and Citrus",
        "rating": 5,
        "comments": "Yummy",
        "public": true
    }*/
    const user = await User.findOne({where: {id: req.body.author_id}})
    const post = await Post.create(newPost)
    //set the foreign key
    post.setUser(user)
    
    res.status(200).send({message:"Successful Entry"})
    /* Post.create(newPost).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    }) */
}

exports.deleteOne = (req, res) => {

   Post.destroy({
       where: {
        id: req.params.post_id
       }
   }).then(data => {
        res.send({message: 'Deletion Successful'})
   }).catch(err => {
       console.log(err)
       res.status(500).send({message: err.message})
   })

   
}