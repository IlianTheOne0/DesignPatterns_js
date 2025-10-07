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
	addOrder(order) { this.#orders.push(order); }
	clearOrders() { this.#orders = []; }
}

export { CoffeModule };