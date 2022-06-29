
import express, { Request, Response } from "express";

const router =express.Router();

router.get("/createUser",()=>{
	console.log("user created")
})