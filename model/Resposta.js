const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Resposta = connection.define('respostas',{
    descricaoresposta:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    idpergunta:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    // Opções de automaticas timestamps com os campos createdAt e updatedAt
    timestamps: true,
  
    // Personalizando o campo no model
    createdAt: 'datacadastro',
  
    // Personalizando o campo no model
    updatedAt: 'datamodificado'
});

Resposta.sync({force:false});

module.exports = Resposta;