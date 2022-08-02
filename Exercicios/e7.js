/*● E.7 Imprima uma mensagem de saudação com o nome completo para cada um
dos objetos. O nome deve ter a primeira letra maiúscula.
7.
8. Ex.:
9. Olá, Fulano de tal!
10. Olá, Juca da silva!
11. .../*/

let datas = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},{id:2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},{id:3,
    nome: 'matheus', sobrenome: 'garcia', idade: 28}, {id: 4, nome:  'gabriel', sobrenome: 'pinheiro', idade: 21}]

let saudarTodos = (datas) => {
    for(let i = 0; i < datas.length; i++) {
        let nome = `${datas[i].nome}`
        console.log(`Olá, ${nome[0].toUpperCase() + nome.substring(1)} ${datas[i].sobrenome}`)
    }
}

saudarTodos(datas);