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
const modPergunta = require("./model/Perguntas");

// Configurando no Express o EJS como view engine.
app.set('view engine','ejs');
app.use(express.static('public'));

// Utilizando o Body Parser já incluido no express
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Configurando as rotas
app.get("/",(req,res)=>{
    // Selecionando todos os dados salvos na tabele com o raw: true não carregando dados adicionais
    modPergunta.findAll({raw: true, order:[
        ['id','DESC'] // ASC = Crescente | DESC = Decrescente
    ]}).then(perguntas =>{
        res.render("index",{ // Incluindo os dados do retorno para uma variavel para uso na index.ejs
            perguntas: perguntas
        });
    })
});

app.get("/perguntas",(req,res)=>{
    res.render("perguntas");
});

app.post("/salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    modPergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect("/");
    });
});

app.listen(3000,()=>{
    console.log("Servidor executando.");
});