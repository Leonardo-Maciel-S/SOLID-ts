import type { ICustomerOrder } from "./customer-protocol";
import type { IMessaging } from "./interfaces/messaging";
import type { OrderStatus } from "./interfaces/order-status";
import type { IPersistency } from "./interfaces/persistency";
import type { IShoppingCart } from "./interfaces/shopping-cart-protocol";

export class Order {
	private _orderStatus: OrderStatus = "open";

	constructor(
		private readonly cart: IShoppingCart,
		private readonly messaging: IMessaging,
		private readonly persistency: IPersistency,
		private readonly customer: ICustomerOrder,
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
			`Seu pedido com o total de R$${this.cart.totalWithDiscount()} foi recebido.`,
		);
		this.persistency.saveOrder();
		this.cart.clear();
		console.log(
			"O cliente é:",
			this.customer.getName(),
			this.customer.getIDN(),
		);
	}
}
