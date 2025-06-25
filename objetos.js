/* 
objetos no javascript são coleções de dados organizados com chave:valor
objetos servem para representar coisas do mundo real como pessoas, carros, produtos
*/

let pessoa = {
    nome: "alexandre",
    idade: 40,
    profissao: "programador",
    saudacao: () => {
        return `ola, meu nome é ${pessoa.nome} e gosto de programar`
    }
}

console.log(pessoa.nome)
console.log(pessoa.saudacao())

//adicionar novas propriedades
pessoa.corPreferida = "vermelho"
console.log(pessoa)

//remover uma propriedade
delete pessoa.corPreferida
console.log(pessoa)

//misturando array com objetos

let pessoas = [
    {
        nome : "alexandre",
        idade : "24",
        email : "alexandre@gmail.com"
    },
    {
        nome : "maria",
        idade : "24",
        email : "alexandre@gmail.com"        
    },
    {
        nome : "alexandre",
        idade : "24",
        email : "alexandre@gmail.com"        
    }
]

    console.log(pessoas[1].nome);