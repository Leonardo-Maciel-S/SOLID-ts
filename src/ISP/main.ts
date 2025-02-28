import { NoDiscount } from "./classes/discount";
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./classes/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { IndividualCustomer } from "./classes/customer";

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
	"Leonardo",
	"Maciel",
	"111.111.111-11",
);
const order = new Order(
	shoppingCart,
	messaging,
	persistency,
	individualCustomer,
);

shoppingCart.addItem(new Product("Camiseta", 49.91));
shoppingCart.addItem(new Product("Caderno", 9.9123));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
