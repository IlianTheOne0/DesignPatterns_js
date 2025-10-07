import { OldPrinter } from './oldPrinter.js';
import { NewPrinter } from './newPrinter.js';

class PrinterAdapter extends NewPrinter
{
	#oldPrinter;

	constructor(oldPrinter)
	{
		super();

		if (!(oldPrinter instanceof OldPrinter)) { throw new Error('Invalid printer instance'); }
		this.#oldPrinter = oldPrinter;
	}

	print(orders) { this.#oldPrinter.printOld(orders); }
}

export { PrinterAdapter };