export class Drink {
	drinkId: number;
	drinkName: string;
    drinkDescription: string;
	drinkCost: number;
	constructor(drinkId: number, name: string, drinkDescription: string, cost: number) {
		this.drinkId = drinkId;
		this.drinkName = name;
        this.drinkDescription = drinkDescription;
		this.drinkCost = cost;
	}
}