const { Sequelize} = require('sequelize');
const db = require('../config/db')

const todoList = db.define('todoList', {
  description: {type: Sequelize.STRING},
  status: {type: Sequelize.STRING},
  updateAt: {type: Sequelize.STRING}
},{
  freezeTableName: true,
  timestamps: false,
}
)

module.exports = todoList
