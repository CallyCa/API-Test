# API de games

Este é um exemplo de API para ser utilizado em crud de lojas.

## Endpoints


### GET /games
Este endpoint é responsavel por trazer do banco de dados todos os registros dos games cadastrador.
#### PARAMETROS
Nenhum
#### Respostas
##### OK 200
Caso essa resposta aconteça você vai receber a listagem de todos os games.

Exempolo de Resposta:
```
[
    {
        "id": 1,
        "title": "Minecraft history mod",
        "year": 2019,
        "price": 150,
        "createdAt": "2020-05-06T18:44:04.000Z",
        "updatedAt": "2020-05-07T15:26:14.000Z"
    },
    {
        "id": 2,
        "title": "Minecraft",
        "year": 2012,
        "price": 100,
        "createdAt": "2020-09-06T20:09:50.000Z",
        "updatedAt": "2020-09-06T20:09:50.000Z"
    },
    {
        "id": 3,
        "title": "Call of Duty Warzone",
        "year": 2019,
        "price": 200,
        "createdAt": "2020-09-07T13:28:17.000Z",
        "updatedAt": "2020-09-07T13:28:17.000Z"
    }

```


### POST  /games
Este endpoint é responsavel por cadastrar um novo game, ele prescisa do token de autorização e do game para ser salvo no banco.

```
{
    "title": "Titulo do Jogo",
    "year": "Ano do Jogo",
    "price": Preço do Jogo,
}
```

### PUT /games
Esse endpoint é utilizado para atualizar um game, ele prescisa do id do games, o id tem que ser mandado na url.
Exemplo:

(http://localhost:8080/games/6)


```
{
    "title": "Novo Titulo do Jogo",
    "year": "Novo Ano do Jogo",
    "price": Novo Preço do Jogo,
}
```

##### Resposta
```
{
    "message": "Atualizado com Sucesso!"
}
```