import { CoffeModule } from './coffeModule.js';
import { logDecorator } from './decorator.js';

const coffeeModule1 = new CoffeModule();

coffeeModule1.addOrder('Latte');
coffeeModule1.addOrder('Cappuccino');
console.log('Orders from coffeeModule1:', logDecorator(coffeeModule1.getOrders));

console.log();
const coffeeModule2 = new CoffeModule();
console.log('Orders from coffeeModule2:', logDecorator(coffeeModule2.getOrders));

console.log();
coffeeModule2.addOrder('Espresso');
console.log('Orders from coffeeModule1 after adding to coffeeModule2:', logDecorator(coffeeModule1.getOrders));
console.log('Orders from coffeeModule2 after adding Espresso:', logDecorator(coffeeModule2.getOrders));

console.log();
coffeeModule1.clearOrders();
console.log('Orders from coffeeModule1 after clearing:', logDecorator(coffeeModule1.getOrders));
console.log('Orders from coffeeModule2 after clearing coffeeModule1:', logDecorator(coffeeModule2.getOrders));