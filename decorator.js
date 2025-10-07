function logDecorator(func)
{
	return function(...args)
	{
		console.log(`Calling function ${func.name} with arguments:`, ...args);
		const result = func.apply(this, args);
		console.log(`Function ${func.name} has been called. Result: ${result}`);
		return result;
	}
}

export { logDecorator };