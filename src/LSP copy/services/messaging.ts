import type { IMessaging } from "../classes/interfaces/messaging";

export class Messaging implements IMessaging {
	sendMessage(txt: string): void {
		console.log("Mensagem enviada:", txt);
	}
}
