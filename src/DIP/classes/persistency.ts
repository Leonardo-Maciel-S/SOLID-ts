import type { IPersistency } from "./interfaces/persistency";

export class Persistency implements IPersistency {
	saveOrder(): void {
		console.log("Pedido salvo com sucesso.");
	}
}
