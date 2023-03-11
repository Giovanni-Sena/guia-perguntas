const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Pergunta = connection.define('PERGUNTAS',{
    TITULO:{
        type: DataTypes.STRING,
        allowNull: false
    },
    DESCRICAO:{
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force:false});