import type {
	IndividualCustomerProtocol,
	EnterpriseCustomerProtocol,
	CustomerOrder,
} from "./customer-protocol";

export class IndividualCustomer
	implements IndividualCustomerProtocol, CustomerOrder
{
	constructor(
		public name: string,
		public lastName: string,
		public cpf: string,
	) {}

	getName(): string {
		return this.name;
	}
	getIDN(): string {
		return this.cpf;
	}
}

export class EnterpriseCustomer
	implements EnterpriseCustomerProtocol, CustomerOrder
{
	constructor(
		public name: string,
		public cnpj: string,
	) {}
	getName(): string {
		return this.cnpj;
	}
	getIDN(): string {
		return this.name;
	}
}
