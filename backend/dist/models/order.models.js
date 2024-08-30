"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(queueID, drinkID, drinkName, customerName, totalCost) {
        this.queueID = queueID;
        this.drinkID = drinkID;
        this.drinkName = drinkName;
        this.customerName = customerName;
        this.totalCost = totalCost;
    }
}
exports.Order = Order;
