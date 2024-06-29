const userModel = require("../models/UserModel");

const addFavorite = async (req, res) => {
    try {

        const { id, productId } = req.body;
        const user = await userModel.findById(id);
        console.log(id);
        console.log(productId);
        if (productId === "") {
            user.favorite = []
            await user.save()
            return res.status(200).json(user);
        }
        const index = user.favorite.findIndex(x => x == productId)
        if (index === -1) {
            user.favorite.push(productId)
            await user.save()
            return res.status(200).json(user);
        }
        user.favorite = user.favorite.filter(x => x != productId)
        await user.save()
        res.status(200).json(user);
    } catch (error) {
        res.send(error.message);
    }
};

const showFavorite = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await userModel.findById(id).populate("favorite")
        res.status(200).json(user.favorite);
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = { showFavorite, addFavorite  }