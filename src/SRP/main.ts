import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./entities/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camiseta", 40.22));
shoppingCart.addItem(new Product("Caderno", 20));
shoppingCart.addItem(new Product("Lápis", 3));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
