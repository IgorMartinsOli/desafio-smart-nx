//● E.9 Imprima o objeto se existir alguem com menos 25 anos.

let datas = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},{id:2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},{id:3,
    nome: 'matheus', sobrenome: 'garcia', idade: 28}, {id: 4, nome:  'gabriel', sobrenome: 'pinheiro', idade: 21}]

let verificaMenorQue25 = (datas) => {
    for(data in datas) {
        if(datas[data].idade < 25) {
            console.log(datas[data]);
        }
    }
}

// FIXME: está retornando um undefined no final
console.log(verificaMenorQue25(datas));