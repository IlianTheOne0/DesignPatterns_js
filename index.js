import { CoffeModule } from './coffeModule.js';
import { logDecorator } from './decorator.js';

const coffeeModule1 = new CoffeModule();

coffeeModule1.getOrders = logDecorator(coffeeModule1.getOrders);
coffeeModule1.addOrder = logDecorator(coffeeModule1.addOrder);
coffeeModule1.clearOrders = logDecorator(coffeeModule1.clearOrders);

coffeeModule1.addOrder('Latte');
coffeeModule1.addOrder('Cappuccino');
console.log('Orders from coffeeModule1:', coffeeModule1.getOrders());

const coffeeModule2 = new CoffeModule();
coffeeModule2.getOrders = logDecorator(coffeeModule2.getOrders);
coffeeModule2.addOrder = logDecorator(coffeeModule2.addOrder);
coffeeModule2.clearOrders = logDecorator(coffeeModule2.clearOrders);

console.log();
console.log('Orders from coffeeModule2:', coffeeModule2.getOrders());

console.log();
coffeeModule2.addOrder('Espresso');
console.log('Orders from coffeeModule1 after adding to coffeeModule2:', coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after adding Espresso:', coffeeModule2.getOrders());

console.log();
coffeeModule1.clearOrders();
console.log('Orders from coffeeModule1 after clearing:', coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after clearing coffeeModule1:', coffeeModule2.getOrders());