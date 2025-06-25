let variavelString = "Alexandre"
let nome
let valor
let numero = 10
let numeroDecimal = 10.5
let booleana = true
let indefinido = undefined
let nulo = null
let tipoArray = []
let tipoObjeto = {}

const pi = 1.32
const TX_CAMBIO = 10

console.log(1 + 1); //operador de adição
console.log('1' + '1'); //quando tenho valores de string o + vira operador de concatenação
console.log(10 - 5); // subtração
console.log(10 * 2); // multiplicação
console.log(10 / 2); // divisão
console.log(10 % 2); //resto de divisão (módulo)
console.log(10 ** 2); //exponenciação

numero++  //incremento
numero-- //decremento

//operadores de atribuição
let vlaor = 10 // atribuição simples
valor += 10 // atribuição com adição

//atribuição com concatentação em caso de string
let professor = "Diego"
professor += "Bracellos"
console.log(professor)

valor -= 3 //atribuição com subtração
valor *= 2 //atribuição com multiplicação
valor /= 3 //atribuição com divisão
valor %= 3 //atribuição com módulo 

//operadores de comparação
console.log(1 == 1) // comparação de igualdade de valor
console.log('10' == 1) // comparação apenas de valor, portanto true
console.log(1 === 1) // comparação de valor e tipo
console.log('1' === 1) // comparação de tipo e valor string é diferente de tipo number
console.log(1 != 2) // diferente de no valor
console.log ('1' != 1) // esta comparando apenas o valor, portanto falso
console.log('1' !== 1) // compara valor e tipo, portanto true
console.log(10 > 5) // compara se o valor
console.log(10 >= 10) // compara se o valor é maior ou igual
console.log(5 < 10) // compara se o 5 é menor que 10
console.log(10 <= 10) // compara se 10 é menor ou igual a 10

// operadores lógios
console.log(true && true) // significado e onde ambas as condições precisam ser true
console.log(true || false) // || significa onde uma das condições for true, o resultado será true
console.log(!true) // ! é uma negação. se for true inverte para false e se for false, inverte para true

// operador ternário
console.log(10 > 8 ? 'o numero é maior' : 'o numero é menor');
let resultado = 10 > 5 ? 'nota maxima' : 'nota minima'

//operadores especiais
console.log(typeof 100); // retorna o tipo de dado de uma expressão ou variável
//console.log(auto instanceof Array); // verifica se o objeto foi criado a partir de um construtor
console.log(nome ?? 'sem nome') //operador de coalescencia nula

// constroles de decisão
if(true == 10){
    console.log("aqui vai o codigo se for true");
} else {
    console.log("aqui vai para o codigo se  for true");
}

let idade = 10
if (idade < 10){
    console.log("criança")
} else if(idade < 18) {
    console.log("adolescente")
} else if(idade < 30) {
    console.log("jovem")
} else if(idade < 50){
    console.log("adulto")
} else {
    console.log("idoso")
}

//switch
let horario = 8
switch (horario){
    case 10:
        console.log("8 badalos")
        break;
    case 12:
        console.log("12 badalos")
        break;
    case 18:
        console.log("6 badalos")
        break;
    default:
        console.log("1 badalo")
}

//array (lista, vetor)

let pessoas = ["maria", "jose", "joao"]
let comidas = [
    "pizza",
    "feijoada",
    "churrasco"
]

let misturado = ["string", 10, true]

//array com matriz

let matriz = [
    [1,2,3],
    [4,5,6]
]

let matriz2 = [
    [
        [1,2,3]
    ],
    [
        [4,5,6],
        [7,8,9]
    ]
]

let pacientes = [
    [
        "jose",
        [35, 1.75, 120]
    ],
    [
        "maria",
        [55, 1.55, 100]
    ],
    [
        "thiago",
        [18, 1.77, 80]
    ]
]
//acessando valores
/* console.log(pessoas[1]);
console.log(matriz [1][1]);
console.log(matriz2[1][1][2]);
console.log(pacientes[0][0]);
console.log("idade:", pacientes[0][1][0]);
console.log("altura:", pacientes[0][1][1]);
console.log("peso:", pacientes[0][1][2]); */

// funções para array
let frutas = ["caju", "banana", "melancia", "kiwi" ]
console.log(frutas)
frutas.push("manga") //adiciona um novo item ao final do array
console.log(frutas)

frutas.pop() //remove o ultimo item do array
console.log(frutas)

frutas.unshift("melancia")
console.log(frutas)

frutas.shift() //remove o primeiro elemento de um array
console.log(frutas)

console.log(frutas.indexOf('banana')) //busca o indice de um item

console.log(frutas.includes("melancia")) // verifica se existe um elemento no array 

//ordernar um array
console.log(frutas.sort())

//inverter a ordem  do array
console.log(frutas.reverse())

//retornar um pedaço do array
console.log(frutas.slice(1)) //pega a partir da posicao inicial ate o final
console.log(frutas.slice(1,3)) //pega a partir da posição inical ate a posição final definida

//adicionar ou remover elemntos a partir de uma posição
console.log(frutas)

frutas.splice(1, 2) // remove 1 item a partir da posição 1
console.log(frutas)

//adicionar itens
frutas.splice(1, 0, 'Melão')
console.log(frutas)

//editar um item do array
frutas[0] = "melancia doce"
console.log(frutas)
