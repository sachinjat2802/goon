import express from 'express';
import Mongoose  from 'mongoose';

const router = express();
const port = 30000;

router.get("/",(req,res)=>{
	res.send("hello world");
})
 router.listen(port,()=>{
	 Mongoose.connect("mongodb+srv://sachinjat2802:sachinjat2802@cluster0.dndop1h.mongodb.net/?retryWrites=true&w=majority").then(()=>{
		 console.log(`connected to db `)
		 	 console.log(`server is running on ${port}`);

	 })
	 .catch((err)=>{
		 console.log(err)
		 	 console.log(`server is running on ${port}`);

	 })
	 
 })