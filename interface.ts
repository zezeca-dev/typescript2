interface Ilivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    exibirDetalhes(): string;
}

class Livro implements Ilivro{
    constructor(
        public titulo: string,
        public ano: number,
        public isbn: string,
        public preco: number,
        public autor: string,
        public editora: string,
        public estoque: number
    ) {}

    exibirDetalhes(): string {
        return `${this.titulo}, (${this.ano}), ${this.editora}, ISBN: ${this.isbn}, Preço: R${this.preco}, Estoque: ${this.estoque}`;
    }
}