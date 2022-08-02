// E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.
let data = 'teste 1 de 2 string 3'

let removerNumeros = (string) => {
    return string.replace(/\d/g, '[removido]')
}

console.log(removerNumeros(data))