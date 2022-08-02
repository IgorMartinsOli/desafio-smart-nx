const Post = require('../model/Post')

module.exports = {
    async index(req, res) {
        const posts = await Post.findAll({
            include: {association: 'comentarios'}
        });
        return res.status(200).json(posts);
    },

    async findByPk(req, res){
        const {postId} = req.params;

        const post = await Post.findByPk(postId, {
            include: {association: 'comentarios'}
        });

        return res.status(200).json(post);
    },

    async store(req, res){
        const {description, urlImage } = req.body;

        const post = await Post.create({description, urlImage});
        try{
            return res.status(201).json(post);
        }catch(err){
            return res.status(400).json({err: err.message});
        }
    },

    async delete(req, res){
        const {postId} = req.params;

        const post = await Post.destroy({where: {id: postId}});
        try{
            return res.json({message: `Delete post ${postId} successfully`});
        }catch(err){
            return res.status(400).json({err: err.message});
        }
    }
}