const Coment = require('../model/Coment');
const Post = require('../model/Post');

module.exports = {
    async index(req, res) {
        const {postId} = req.params;

        const post = await Post.findByPk(postId, {
            include: {association: 'comentarios'}
        });

        return res.json(post)
    },
    async store(req, res) {
        const {postId} = req.params;
        const {description, urlImage} = req.body;

        const post = await Post.findByPk(postId);

        if(!post){
            return res.status(404).json({message: "Post not found"});
        }

        const coment = await Coment.create({description, urlImage, postId});

        try{
        return res.status(200).json(coment);
        }catch(err){
            return res.status(400).json({message: err.message});
        }
    },

    async delete(req, res) {
        const { postId, comentId } = req.params;

        const post = await Post.findByPk(postId);

        if(!post){
            return res.status(404).json({message: "Post not found"});
        }

        const coment = await Coment.destroy({where: {id: comentId}});

        try {
            return res.json({message: `Delete coment ${comentId} successfully`});
        }catch(err) {
            return res.status(404).json({message: err.message});
        }
    },

    async edit(req, res) {
        const postId = req.params;
        const {comentId, description, urlImage} = req.body;

        const post = await Post.findByPk(postId);

        if(!post){
            return res.status(404).json({message: "Post not found"});
        }

        const coment = await Coment.findByPk(comentId);
        coment.description = description;
        coment.urlImage = urlImage;

        const newComent = await Coment.save(newComent);

        return res.status(200).json({newComent: newComent});
    }
}