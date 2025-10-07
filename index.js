import { CoffeModule } from './coffeModule.js';
import { chocolateSauce, whippedCream, cinnamon, caramel, topping } from './toppings.js';
const coffeeModule1 = new CoffeModule();

coffeeModule1.addOrder('Latte');
coffeeModule1.addOrder('Cappuccino');
console.log('Orders from coffeeModule1:', coffeeModule1.getOrders());

console.log();
const coffeeModule2 = new CoffeModule();
console.log('Orders from coffeeModule2:', coffeeModule2.getOrders());

console.log();
coffeeModule2.addOrder('Espresso');
console.log('Orders from coffeeModule1 after adding to coffeeModule2:', coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after adding Espresso:', coffeeModule2.getOrders());

console.log();
coffeeModule1.clearOrders();
console.log('Orders from coffeeModule1 after clearing:', coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 after clearing coffeeModule1:', coffeeModule2.getOrders());




console.log();
const latte = topping((type) => type)('Latte', chocolateSauce, whippedCream, caramel);
console.log('Latte:', latte);

const cappuccino = topping((type) => type)('Cappuccino', cinnamon, whippedCream);
console.log('Cappuccino:', cappuccino);

const espresso = topping((type) => type)('Espresso', chocolateSauce, whippedCream, cinnamon, caramel);
console.log('Espresso:', espresso);

coffeeModule1.addOrder(latte);
coffeeModule1.addOrder(cappuccino);
coffeeModule1.addOrder(espresso);

console.log('Orders from coffeeModule1 after adding fancy drinks:', coffeeModule1.getOrders());
console.log('Orders from coffeeModule2 remain unchanged:', coffeeModule2.getOrders());