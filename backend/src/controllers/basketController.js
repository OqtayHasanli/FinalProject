const userModel = require("../models/UserModel");


const addBasket = async (req, res) => {
    try {

        const { id, productId } = req.body;
        const user = await userModel.findById(id);
        console.log(id);
        console.log(productId);
        if (productId === "") {
            user.basket = []
            await user.save()
            return res.status(200).json(user);
        }
        const index = user.basket.findIndex(x => x == productId)
        if (index === -1) {
            user.basket.push(productId)
            await user.save()
            return res.status(200).json(user);
        }
        user.basket = user.basket.filter(x => x != productId)
        await user.save()
        res.status(200).json(user);
    } catch (error) {
        res.send(error.message);
    }
};


const deleteBasket = async (req, res) => {


    try {

        const { id, productId } = req.body;
        const user = await userModel.findById(id);
        console.log(id);
        console.log(productId);
        if (productId === "") {
            user.basket = []
            await user.save()
            return res.status(200).json(user);
        }
        const index = user.basket.findIndex(x => x == productId)
        if (index === -1) {
            user.basket.pull(productId)
            await user.save()
            return res.status(200).json(user);
        }
        user.basket = user.basket.filter(x => x != productId)
        await user.save()
        res.status(200).json(user);
    } catch (error) {
        res.send(error.message);
    }
};

const showBasket = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await userModel.findById(id).populate("basket.productId")
        res.status(200).json(user.basket);
    } catch (error) {
        res.send(error.message);
    }
};
module.exports = { showBasket, addBasket ,deleteBasket }