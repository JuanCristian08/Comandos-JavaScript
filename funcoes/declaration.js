//função declariation - declarando uma declaração
/**
 1. Palavra reservada function
 2. nome da função
 3. () parenteses
 4. {} chaves - dentro das chaves é o corpo (escopo) da função
 */
function saudacao() {
    console.log("executando saudacao");
}

//chamando a função
comRetorno();

//funcção sem retorno
function semRetorno() {
    console.log("essa função não retorna nada");
}

//função com retorno
function comRetorno() {
    return 1 + 1;
}
let resultado = comRetorno();
console.log(comRetorno());

//funções podem ter parametros
//parametros são uma forma de injetar um valor dentro do corpo da função
function comParametro(mensagem) {
    console.log(mensagem);
}
comParametro("olá, essa é uma mensagem de saudação");

 function comParametro(valor1, valor2){
    return valor1 + valor2;
 }

 console.log(comParametro(10, 20));

 //passando parametros com valores padrão

 function parametrosPadrao(valor1 = 0, valor2 = 0) {
    return valor1 + valor2;
 }
 console.log(parametrosPadrao(350, 150)); 