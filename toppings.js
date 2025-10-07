function chocolateSauce(topping)
{
	return topping + ' + chocolate sauce';
}

function whippedCream(topping)
{
	return topping + ' + whipped cream';
}

function cinnamon(topping)
{
	return topping + ' + cinnamon';
}

function caramel(topping)
{
	return topping + ' + caramel';
}

function topping(func)
{
	return function(type, ...toppings)
	{
		let drink = func(type);
		for (const top of toppings) { drink = top(drink); }
		return drink;
	}
}

export { chocolateSauce, whippedCream, cinnamon, caramel, topping };