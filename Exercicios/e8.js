// E.8 Imprima a soma das idades (dica: utilize reduce)

let datas = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},{id:2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},{id:3,
    nome: 'matheus', sobrenome: 'garcia', idade: 28}, {id: 4, nome:  'gabriel', sobrenome: 'pinheiro', idade: 21}]

var valorInicial = 0;
var soma = datas.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual.idade;
}, valorInicial)

console.log(soma)