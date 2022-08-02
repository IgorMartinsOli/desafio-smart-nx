//E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.
function maiorString(string1, string2) {
    return string1.length > string2.length ? string1 : string2;
}

// E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.
function imprimeMaiorString(maiorString, string1, string2) {
    console.log(maiorString(string1, string2));
}

imprimeMaiorString(maiorString, 'hello', 'worldss');
imprimeMaiorString(maiorString, 'helloss', 'world');