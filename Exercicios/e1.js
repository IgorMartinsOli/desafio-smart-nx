//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.
let maiorString = (string1, string2) => {
    return string1.length > string2.length ? string1 : string2;
}

console.log(maiorString("carro", "moto"));
console.log(maiorString("carro", "motoss"));