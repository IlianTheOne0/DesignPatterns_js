class NewPrinter
{
	print(orders) { console.log(orders.length < 1 ? 'No orders' : orders.join(', ')); }
}

export { NewPrinter };