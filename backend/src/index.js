const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // definir que será utilizado json para as requisições
app.use(routes);

app.listen(3333);



/*
    Métodos HTTP:

    GET: Buscar/listar uma informação no back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/*
    Tipos de parâmetros:

    Query: parâmetros nomeados enviados na rota após "?" (Filtros, paginação...)
    Route: parâmetros utilizados para identificar recursos (/rota/:id, ex)
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

*/

/*
    DB:

    SQL: MySQL, SQLite, PostgreSQL, Oracle, ...
    NoSQL: MongoDB, CouchDB, ...
*/

