Esse repositio é dividio em 2 partes, uma de exercicio e uma de API.<br>

A primeira parte, do exercicio(que está dentro da pasta 'exercicios' no diretorio raiz) é composta por uma resolução do exercicios propostos, sendo eles o seguinte:<br>
e1.js Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.<br>
e2.js E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.<br>
e3.js Crie uma função que recebe vários argumentos do tipo string e imprime todosjuntos.<br>
e4.js Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.<br>
e5.js Dado o dicionário {'a': 4, 'e' :3 ,'i' :1 , 's': 5 } substitua os números na frase 'T35t3 d3 35t4g1o'pelos valores de suas respectivas keys, por exemplo a frase ol4 ficaria ola.<br>
e6.js Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.
e7.js Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.<br>
Ex.:<br>
Olá, Fulano de tal!<br>
Olá, Juca da silva!<br>
.../<br>
e8.js Imprima a soma das idades (dica: utilize reduce)<br>
e9.js Imprima o objeto se existir alguem com menos 25 anos.<br>
e10.js Imprima todos os elementos em que a idade é menor que 30 anos.<br>
e11.js Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.<br>
e12.js Considere o objeto:<br>
const pessoa = {<br>
"nome": "Dev",<br>
"sobrenome":"smart",<br>
"idade":"26","cargo":"analista de sistemas",<br>
"documento":"123.345.678-90"<br>
}<br>
Crie uma função que rece um objeto com o formato acima descrito e deleta o campo "documento". a função deve devolver o objeto atualizado.<br>

E a segunda parte é composta por uma API de posts, aonde temos posts e os posts tem comentarios, utilizei as seguintes tecnologias:<br>
"dependencies": {<br>
    "express": "^4.18.1",<br>
    "mysql2": "^2.3.3",<br>
    "sequelize": "^6.21.3"<br>
  },<br>
  "devDependencies": {<br>
    "nodemon": "^2.0.19",<br>
    "sequelize-cli": "^6.4.1"<br>
  }<br>
<br>
Tenho as seguintes rotas de post:<br>
GET /posts<br>
Retorna todos os posts com os comentarios<br><br>

GET /post/:postId<br>
Retorna o post do id passado em params com os comentarios<br><br>

POST /post/new<br>
Adiciona um post com dados vindo do body (description, urlImage)<br><br>

DELETE /post/:postId<br>
Deleta um post com o ID vindo do params<br><br>

E as rotas de comentarios:<br>

GET /posts/:postId/coment<br>
Retorna o post e comentarios dele, pelo id enviado em params <br><br>

POST /posts/:postId/coment<br>
Persiste no BD um comentario do post do id vindo de params (não pode ser nulo no bd), e do body {description, urlImage} <br><br>

DELETE /posts/:postId/coment/:comentId'<br>
Deleta um comentario passado em params (comentId), antes verifica se o post passado em params existe (postId)
