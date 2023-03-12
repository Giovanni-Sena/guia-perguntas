const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    // Opções de automaticas timestamps com os campos createdAt e updatedAt
    timestamps: true,
  
    // Personalizando o campo no model
    createdAt: 'datacadastro',
  
    // Personalizando o campo no model
    updatedAt: 'datamodificado'
  });

Pergunta.sync({force:false});