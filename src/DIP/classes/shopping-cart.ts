import type { Discount } from "./discount";
import type { CartItem } from "./interfaces/cart-item";
import type { IShoppingCart } from "./interfaces/shopping-cart-protocol";

export class ShoppingCart implements IShoppingCart {
	private readonly _items: CartItem[] = [];

	constructor(private readonly discount: Discount) {}

	get items(): Readonly<CartItem[]> {
		return this._items;
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

	totalWithDiscount(): number {
		return this.discount.calculate(this.total());
	}

	isEmpty(): boolean {
		return this._items.length === 0;
	}

	clear(): void {
		this._items.length = 0;
		console.log("Carrinho de compras foi limpo.");
	}
}
