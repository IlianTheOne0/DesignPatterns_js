function addUnknownCoffe(func)
{
	return function(type, size)
	{
		const drink = func(type, size);
		return drink;
	}
}

function addKnownCoffe(type, size)
{
	switch (type)
	{
		case "espresso": { return { type: "espresso", size }; }
		case "cappuccino": { return { type: "cappuccino", size }; }
		case "latte": { return { type: "latte", size }; }
		default: { throw new Error("Unknown coffee type: " + type); }
	}
}

const coffeFactory = { createCoffe: addUnknownCoffe(addKnownCoffe) };

export { coffeFactory };