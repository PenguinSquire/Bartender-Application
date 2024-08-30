import express from "express";
import { Order } from "../models/order.models";

let orderNumber = 0

let app = express.Router();
exports.app = app;

let queue: Order[] = []

app.post("/", (req, res) => {
    if (
		req.body.drinkId &&
		req.body.drinkName &&
		req.body.customerName &&
        req.body.totalCost
	) {
		let drinkID = req.body.drinkId
        let drinkName = req.body.drinkName
		let customerName = req.body.customerName
        let totalCost = req.body.totalCost
        
        let newOrder = new Order(orderNumber++, drinkID, drinkName, customerName, totalCost);

		queue.push(newOrder);
		res.status(200).send({message:'New Order Created'})
    } else {
		res.status(400).send({message:'Missing Required Attributes'})
	}
});

app.delete("/:orderID", (req,res) =>{
	let newList: Order[] = [];
	for(let order of queue) {
		if(order.queueID == parseInt(req.params.orderID)) {
			newList = queue.filter(
				(order) =>order.queueID !== parseInt(req.params.orderID)
			);
			queue = newList;
			break;
		}
	}
	if(newList.length === 0) {
		res.status(400).send({ message: "Order Not Found"});
	} else{
		res.status(200).send({ message: "Order Deleted"});
	}
})

app.get("/", (req, res) => {

	res.status(200).send(queue);
});


export { app };