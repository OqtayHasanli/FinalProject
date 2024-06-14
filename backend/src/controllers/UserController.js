const express = require("express");
const Post = require("../models/UserModel");

const getAll = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};
const getbyID = async (req, res) => {
  try {
    const posts = await Post.findOne();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

const Postfind = async (req, res) => {
  let Userfind = await Post.findOne({ email: req.body.email })
  if (Userfind) {
    res.status(201).send("Bu email istifade olunub")
  } else {

    const post = new Post(req.body);
    await post.save();
    res.status(200).send(post);

  }

};

const DeletebyID = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    console.log(error);
  }
};

const PatchbyID = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch (error) {
    console.log(error);
  }
};


const login = async (req, res) => {
  let Userfind = await Post.findOne({ email: req.body.email })
  if (Userfind) {
    res.status(201).send("Welcome")
  } else {

    res.status(200).send("E-mail or password is wrong")

  }

};

module.exports = { getAll, getbyID, Postfind, DeletebyID, PatchbyID ,login}
