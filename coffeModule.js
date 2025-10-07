class CoffeModule
{
	#orders;

	constructor()
	{
		if (CoffeModule.instance) { return CoffeModule.instance; }
		CoffeModule.instance = this;

		this.#orders = [];
	}

	getOrders() { return this.#orders; }
	addOrder(order) { this.#orders.push(order); return true; }
	clearOrders() { this.#orders = []; return true; }
}

export { CoffeModule };