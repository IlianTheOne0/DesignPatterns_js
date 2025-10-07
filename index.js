import { CoffeModule } from './coffeModule.js';
import { coffeFactory } from './factory.js';

const coffeeModule1 = new CoffeModule();

coffeeModule1.addOrder(coffeFactory.createCoffe('latte', 'small'));
coffeeModule1.addOrder(coffeFactory.createCoffe('cappuccino', 'large'));
console.log('Orders from coffeeModule1:', coffeeModule1.getOrders());

console.log();
const coffeeModule2 = new CoffeModule();
console.log('Orders from coffeeModule2:', coffeeModule2.getOrders());

console.log();
coffeeModule2.addOrder(coffeFactory.createCoffe('espresso', 'small'));
console.log('Orders from coffeeModule1 after adding to coffeeModule2:', coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after adding Espresso:', coffeeModule2.getOrders());

console.log();
coffeeModule1.clearOrders();
console.log('Orders from coffeeModule1 after clearing:', coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after clearing coffeeModule1:', coffeeModule2.getOrders());