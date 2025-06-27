//arrow ou seta e a funcao mais utilizada no universo node js por ter uma sintaxe mais limpa e simples(ou nao)
// => representa a palavra function

let seta = () => {
    console.log('funcao arrow');
}

//sintaxe linha unica
let soma = (v1, v2) => v1 + v2

//usando como funcao anonima
const numeros = [2,4,6]
const dobrar = numeros.map(numero => numero * 2)//.map e um tipo de laco que percorre a lista'array' (numeros)
console.log(dobrar)