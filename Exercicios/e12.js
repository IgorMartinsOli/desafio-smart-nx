/* ● E.12 Considere o objeto:
const pessoa = {
"nome": "Dev",
"sobrenome":"smart",
"idade":"26","cargo":"analista de sistemas",
"documento":"123.345.678-90"
}
Crie uma função que rece um objeto com o formato acima descrito e deleta o campo
"documento". a função deve devolver o objeto atualizado.*/

const pessoa = {
    "nome": "Dev",
    "sobrenome":"smart",
    "idade":"26",
    "cargo":"analista de sistemas",
    "documento":"123.345.678-90"
}

let removerPropriedadeDocumento = (objeto) => {
    delete objeto.documento
    return objeto
}

console.log(removerPropriedadeDocumento(pessoa))