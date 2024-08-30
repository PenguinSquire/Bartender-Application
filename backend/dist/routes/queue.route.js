"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const order_models_1 = require("../models/order.models");
let orders = 0;
let totalSales = 0;
let app = express_1.default.Router();
exports.app = app;
exports.app = app;
let queue = [];
app.post("/", (req, res) => {
    if (req.body.drinkId &&
        req.body.customerName &&
        req.body.totalCost) {
        let drinkID = req.body.drinkId;
        let customerName = req.body.customerName;
        let totalCost = req.body.totalCost;
        let newOrder = new order_models_1.Order(totalSales++, drinkID, customerName, totalCost);
        queue.push(newOrder);
        res.status(200).send({ message: 'New Opportunity Created' });
    }
    else {
        res.status(400).send({ message: 'Missing Required Attributes' });
    }
});
app.delete("/:orderID", (req, res) => {
    let newList = [];
    for (let order of queue) {
        if (order.orderID == parseInt(req.params.orderID)) {
            newList = queue.filter((order) => order.orderID !== parseInt(req.params.orderID));
            queue = newList;
            break;
        }
    }
    if (newList.length === 0) {
        res.status(400).send({ message: "Order Not Found" });
    }
    else {
        res.status(200).send({ message: "Order Deleted" });
    }
});
app.get("/", (req, res) => {
    res.status(200).send(queue);
});
