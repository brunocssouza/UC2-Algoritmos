import { SaborPizza } from "./SaborPizza"

export class Pizza {
    private sabor:string;
    private tamanho:string;
    private preco:SaborPizza;

    constructor(saborRecebido:string, tamanhoRecebido:string, valorRecebido:SaborPizza) {
        this.sabor = saborRecebido;
        this.tamanho = tamanhoRecebido;
        this.preco = valorRecebido
    }

    public setSabor(saborRecebido:string):void {
        this.sabor = saborRecebido
    }
    public setTamanho(tamanhoRecebido:string):void {
        this.tamanho = tamanhoRecebido
    }
    public setPreco(precoRecebido:SaborPizza):void {
        this.preco = precoRecebido
    }

    public getSabor():string {
        return this.sabor
    }
    public getTamanho():string {
        return this.tamanho
    }
    public getPreco():SaborPizza {
        return this.preco
    }

    public descricao():string {
        return `Pizza: ${this.sabor} | Tamanho: ${this.tamanho} | Preço: R$${this.preco},00`
    }
}

let pizza1 = new Pizza("Entreveiro", "Grande", SaborPizza.entreveiro)
console.log(pizza1.descricao())