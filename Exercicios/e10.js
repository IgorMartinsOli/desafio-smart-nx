// ● E.10 Imprima todos os elementos em que a idade é menor que 30 anos.

let datas = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},{id:2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},{id:3,
nome: 'matheus', sobrenome: 'garcia', idade: 28}, {id: 4, nome:  'gabriel', sobrenome: 'pinheiro', idade: 21}]


let verificaMenorQue30 = (datas) => {
    for(data in datas) {
        if(datas[data].idade < 30) {
            console.log(datas[data].idade);
        }
    }
}

// FIXME: está retornando um undefined no final
console.log(verificaMenorQue30(datas));