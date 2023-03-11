const express = require("express");
const app = express();

// Conexão com o banco de dados
const connection = require("./database/database");

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão realizada com o banco de dados.")
    })
    .catch((msgError) =>{
        console.log(msgError);
    })
// Models 
const perguntaModel = require("./model/Perguntas");

// Configurando no Express o EJS como view engine.
app.set('view engine','ejs');
app.use(express.static('public'));

// Utilizando o Body Parser já incluido no express
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Configurando as rotas
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/perguntas",(req,res)=>{
    res.render("perguntas");
});

app.post("/salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Teste Título: " + titulo + " " + "Descrição: " + descricao);
})

app.listen(3000,()=>{
    console.log("Servidor executando.");
});