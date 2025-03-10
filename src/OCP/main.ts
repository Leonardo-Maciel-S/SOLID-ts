import { NoDiscount } from "./classes/discount";
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./classes/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camiseta", 49.91));
shoppingCart.addItem(new Product("Caderno", 9.9123));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
