//iniciando a aplicação
const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

//definindo a porta
const porta = 1000;
app.listen(porta, () => console.log('executando. Porta', porta));

app.get("/medicos", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'alunos',
        database: 'hospital',
        password : 'alunos'
    })

    connection.query('SELECT * FROM medicos', (err, results) =>{
        res.json(results)
        console.log(results)
    })
})