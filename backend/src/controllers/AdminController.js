const express = require("express");
const Post = require("../models/adminModel");
var jwt = require('jsonwebtoken');

const loginAdmin = async (req, res) => {
    let Userfind = await Post.findOne({ password: req.body.password })

    if (Userfind) {
        let token = jwt.sign({ passcode: req.body.passcode }, process.env.SECRET_CODE,
        );
        res.status(201).send(token)
    } else {

        res.status(200).send("E-mail or password is wrong")

    }


};

const Postadmin = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(200).send(post);
    } catch (error) {
        console.log(error);
    }
};
const getAll = async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { loginAdmin, Postadmin, getAll }