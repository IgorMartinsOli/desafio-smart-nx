// E.5 Dado o dicionário {'a': 4, 'e' :3 ,'i' :1 , 's': 5 } substitua os números na frase 'T35t3 d3 35t4g1o'pelos valores de suas respectivas keys, por exemplo a frase ol4 ficaria ola.
let data = {'a': 4, 'e' :3 ,'i' :1 , 's': 5}
let stringBase = 'T35t3 d3 35t4g1o'

let decrypt = (string) => {
    let dataReturn = string.replace(/4/g,'a').replace(/3/g, 'e').replace(/1/g, 'i').replace(/5/g, 's')
    return dataReturn
}

console.log(decrypt(stringBase));