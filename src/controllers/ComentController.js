const Coment = require('../model/Coment');
const Post = require('../model/Post');

module.exports = {
    async store(req, res) {
        const {postId} = req.params;
        const {description, urlImage} = req.body;

        const post = await Post.findByPk(post_id);

        if(!post){
            return res.status(404).json({message: "Post not found"});
        }

        const coment = await Coment.create({description, urlImage, postId})

        return res.status(200).json(coment)
    }
}