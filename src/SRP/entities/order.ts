import type { Messaging } from "../services/messaging";
import type { OrderStatus } from "./interfaces/order-status";
import type { Persistency } from "./persistency";
import type { ShoppingCart } from "./shopping-cart";

export class Order {
	private _orderStatus: OrderStatus = "open";

	constructor(
		private readonly cart: ShoppingCart,
		private readonly messaging: Messaging,
		private readonly persistency: Persistency,
	) {}

	get orderStatus(): OrderStatus {
		return this._orderStatus;
	}

	checkout(): void {
		if (this.cart.isEmpty()) {
			console.log("Seu carrinho está vazio.");
			return;
		}

		this._orderStatus = "closed";
		this.messaging.sendMessage(
			`Seu pedido com o total de R$${this.cart.total()} foi recebido.`,
		);
		this.persistency.saveOrder();
		this.cart.clear();
	}
}
