const express = require("express")
const mongoose = require("mongoose") 


mongoose
	.connect(process.env.Mongo_URL)
	.then(() => {
		console.log("Qosuldu");
	}).catch((err)=>{
        console.log("qosulmadi"+""+err);
    })