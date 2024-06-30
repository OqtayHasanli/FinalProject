const userModel = require("../models/UserModel");

const addBasket = async (req, res) => {
    try {
        const { id, productId } = req.body;
        const user = await userModel.findById(id);

        if (productId === "") {
            user.basket = [];
            await user.save();
            return res.status(200).json(user.basket);
        }

        const index = user.basket.findIndex(item => item.productId.toString() === productId);
        if (index === -1) {
            user.basket.push({ productId, count: 1 });
        } else {
            user.basket[index].count += 1;
        }
        await user.save();
        return res.status(200).json(user.basket);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteBasket = async (req, res) => {
    try {
        const { id, productId } = req.body;
        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        user.basket = user.basket.filter(item => item.productId.toString() !== productId);
        await user.save();

        
        res.status(200).json(user.basket);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const showBasket = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await userModel.findById(id).populate("basket.productId");
        res.status(200).json(user.basket);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const decrementBasket = async (req, res) => {
    try {
        const { id, productId } = req.body;
        const user = await userModel.findById(id);
        const index = user.basket.findIndex(item => item.productId.toString() === productId);


       if (user.basket[index].count==1) {
        user.basket = user.basket.filter(item => item.productId.toString() !== productId);
        await user.save();
       } else {
        user.basket[index].count=user.basket[index].count-1
        await user.save();
       }
        res.status(200).json(user.basket);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const incrementBasket = async (req, res) => {
    try {
        const { id, productId } = req.body;
        const user = await userModel.findById(id);



        const index = user.basket.findIndex(item => item.productId.toString() === productId);

        user.basket[index].count += 1;

        await user.save();
        return res.status(200).json(user.basket);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { showBasket, addBasket, deleteBasket,incrementBasket,decrementBasket };
