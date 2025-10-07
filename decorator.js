function logDecorator(func)
{
	console.log(func);
	console.log(`Calling function ${func.name}`);
	const result = func();
	console.log(`Function ${func.name} has been called. Result: ${result}`);
	return result;
}

export { logDecorator };