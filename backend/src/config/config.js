const express = require("express")
const mongoose = require("mongoose") 


mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
		console.log("Qosuldu");
	}).catch((err)=>{
        console.log("qosulmadi"+err);
    })