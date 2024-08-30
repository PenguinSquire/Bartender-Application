export class Order {
	queueID: number;
	drinkID: number;
	drinkName: string
	customerName: string;
    totalCost: number;
	constructor(
		queueID: number,
		drinkID: number,
		drinkName: string,
		customerName: string,
        totalCost: number
	) {
		this.queueID = queueID;
		this.drinkID = drinkID;
		this.drinkName = drinkName;
		this.customerName = customerName;
        this.totalCost = totalCost;
	}
}