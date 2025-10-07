class OldPrinter
{
	printOld(orders) { console.log(orders.length < 1 ? 'No orders' : orders.join(', ')); }
}

export { OldPrinter };