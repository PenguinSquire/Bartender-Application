"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(orderID, drinkId, customerName, totalCost) {
        this.orderID = orderID;
        this.drinkId = drinkId;
        this.customerName = customerName;
        this.totalCost = totalCost;
    }
}
exports.Order = Order;
