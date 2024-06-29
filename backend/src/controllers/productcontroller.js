const express = require("express");
const Post = require("../models/productmodel");

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
    const posts = await Post.findOne({_id:req.params.id});
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

const Postfind = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    console.log(error);
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
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }, 
      { new: true } 
    );
    res.send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error updating the post");
  }
};

module.exports={getAll,getbyID,Postfind,DeletebyID,PatchbyID}
