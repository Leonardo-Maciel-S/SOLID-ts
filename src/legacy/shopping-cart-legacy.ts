type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCartLegacy {
	private readonly _items: CartItem[] = [];
	private _orderStatus: OrderStatus = "open";

	get items(): Readonly<CartItem[]> {
		return this._items;
	}

	get orderStatus(): OrderStatus {
		return this._orderStatus;
	}

	addItem(item: CartItem): void {
		this._items.push(item);
	}

	removeItem(index: number): void {
		this._items.splice(index, 1);
	}

	total(): number {
		return +this._items
			.reduce((total, current) => total + current.price, 0)
			.toFixed(2);
	}

	checkout(): void {
		if (this.isEmpty()) {
			console.log("Seu carrinho está vazio.");
			return;
		}

		this._orderStatus = "closed";
		this.sendMessage(
			`Seu pedido com o total de R$${this.total()} foi recebido.`,
		);
		this.saveOrder();
		this.clear();
	}

	sendMessage(txt: string): void {
		console.log("Mensagem enviada:", txt);
	}

	saveOrder(): void {
		console.log("Pedido salvo com sucesso.");
	}

	clear(): void {
		this._items.length = 0;
		console.log("Carrinho de compras foi limpo.");
	}

	isEmpty(): boolean {
		return this._items.length === 0;
	}
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: "Camiseta", price: 40.222 });
shoppingCart.addItem({ name: "Caderno", price: 20 });
shoppingCart.addItem({ name: "Lápis", price: 3 });

console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
