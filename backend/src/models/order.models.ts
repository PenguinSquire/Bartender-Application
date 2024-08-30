export class Order {
	orderID: number;
	drinkId: number;
	customerName: string;
    totalCost: number;
	constructor(
		orderID: number,
		drinkId: number,
		customerName: string,
        totalCost: number
	) {
		this.orderID = orderID;
		this.drinkId = drinkId;
		this.customerName = customerName;
        this.totalCost = totalCost;
	}
}