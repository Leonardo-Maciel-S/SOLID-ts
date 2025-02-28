# SOLID-ts
Repositório para aprender princípios do S.O.L.I.D

<h2 style='color:rgb(1, 228, 39);'>S = Single Responsibility Principle
</h2>

> "Uma classe, método, módulo devem ter apenas uma responsabilidade".

- Não é bom que eu tenha uma classe **Carrinho** e ela tenha métodos de finalizar pedido, para isso eu teria que ter uma classe **Compra** por exemplo.


<h2 style='color:rgb(1, 228, 39);'>O = Open/closed Principle
</h2>

> "Aberto a extensão, porem fechado a alteração."

- Não é bom toda vez que alterar algo no sistema como o valor de desconto, eu tenha que sair mexendo em todo o lugar que chamei aquela função.
- O Certo seria eu abstrair essa classe, assim toda vez que eu tenha que adicionar um desconto novo eu não mexa na estrutura do código já criado, apenas estendo em uma nova classe e passo ela como dependência.

<h2 style='color:rgb(1, 228, 39);'>L = Liskov Substitution Principle
</h2>

> "Um subtipo deve ser substituível por outro subtipo"

- Suponhamos que eu tenha essa classe abstrata **Discount** eu tenha descontos fixo, como 50% por exemplo, nesse caso eu posso criar outra classe que extend essa.
  ```ts
  export abstract class Discount {
    protected discount = 0

    calculate(value: number): number {
      return value - value + this.discount
    }
  }

  export class FiftyPercentDiscount extends Discount {
    protected discount = 0.5
  }
- Nesse caso se eu quiser criar outro desconto de 10% eu crio outra classe
  ```ts
    export class TenPercentDiscount extends Discount {
    protected discount = 0.1
  }

- Esse princípio me diz que se caso eu passar meu Discount como dependência de uma classe, ela deve poder receber qualquer classe herdada de Discount sem que seu funcionamento mude a forma como deve ser, nesse caso, tem que me retornar o cálculo do desconto.
- Se eu em algum momento alterar o tipo de retorno do meu método eu vou quebrar a aplicação.
- No exemplo eu altero apenas a porcentagem do desconto, podem o método ainda funciona da mesma forma.

<h2 style='color:rgb(1, 228, 39);'>I = Interface Segregation Principle
</h2>

> "Os clientes não devem ser forçamos a depender de uma interface, type ou métodos que não utilizam"

- Imagine que temos duas classes, **IndividualCostumer** e **EnterpriseCostumer**, por ser ambos costumer você pode ser tentado a criar uma interface **Costumer** e colocar em ambos porem essa estratégia não seria a melhor.
  ```ts
  export interface Costumer {
    name: string;
    lastName: string;
    cpf: string;
    cnpj: string
  }
- Uma pessoa física possui name, lastName e cpf. Já uma pessoa jurídica possui dessa interface apenas name e cnpj.
- Se utilizar a mesma interface vai acabar obrigando um IndividualCostumer ter um cnpj e um EnterpriseCostumer ter lastName e cpf
- Então esse princípio nos ensina a separar bem essas obrigatoriedade quando for criar interface, tipos e classes abstratas.



<h2 style='color:rgb(1, 228, 39);'>
</h2>
