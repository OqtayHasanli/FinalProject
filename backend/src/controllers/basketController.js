const userModel = require("../models/UserModel");

const addBasket = async (req, res) => {
    try {
        const { id, productId } = req.body;
        const user = await userModel.findById(id);

        console.log(id);
        console.log(productId);

        if (productId === "") {
            user.basket = [];
            await user.save();
            return res.status(200).json(user);
        }

        const index = user.basket.findIndex(item => item.productId.toString() === productId);
        if (index === -1) {
            user.basket.push({ productId, count: 1 });
        } else {
            user.basket[index].count += 1;
        }
        await user.save();
        return res.status(200).json(user);

    } catch (error) {
        res.status(500).send(error.message);
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
module.exports = { showBasket, addBasket  }