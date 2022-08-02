const Post = require('../model/Post')

module.exports = {
    async index(req, res) {
        const posts = await Post.findAll();

        return res.json(posts);
    },

    async store(req, res){
        const {description, urlImage } = req.body;

        const post = await Post.create({description, urlImage});

        return res.json(post);
    }
}