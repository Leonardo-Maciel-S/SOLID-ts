import type { CartItem } from "./interfaces/cart-item";

export class Product implements CartItem {
	constructor(
		public name: string,
		public price: number,
	) {}
}
