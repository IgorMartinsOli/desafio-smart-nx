// E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todosjuntos.

let imprimirStringJuntas = (...strings) => {
    let auxString ='';

    for(string in strings) {auxString += (strings[string])}
    return auxString;
}

console.log(imprimirStringJuntas('teste', 'teste2'));