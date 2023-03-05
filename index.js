const express = require("express");
const app = express();
// Configurando no Express o EJS como view engine.
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(3000,()=>{
    console.log("Servidor executando.");
});