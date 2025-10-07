import { CoffeModule } from './coffeModule.js';
import { NewPrinter } from './newPrinter.js';
import { OldPrinter } from './oldPrinter.js';
import { PrinterAdapter } from './adapter.js';

const printer = new NewPrinter();
const printerAdapter = new PrinterAdapter(new OldPrinter());

const coffeeModule1 = new CoffeModule();

coffeeModule1.addOrder('Latte');
coffeeModule1.addOrder('Cappuccino');
console.log('Orders from coffeeModule1:')

console.log();
const coffeeModule2 = new CoffeModule();
console.log('Orders from coffeeModule2:'); printer.print(coffeeModule2.getOrders());

console.log();
coffeeModule2.addOrder('Espresso');
console.log('Orders from coffeeModule1 after adding to coffeeModule2:'); printerAdapter.print(coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after adding Espresso:'); printerAdapter.print(coffeeModule2.getOrders());

console.log();
coffeeModule1.clearOrders();
console.log('Orders from coffeeModule1 after clearing:'); printer.print(coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after clearing coffeeModule1:'); printer.print(coffeeModule2.getOrders());