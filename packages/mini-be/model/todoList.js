const { Sequelize} = require('sequelize');
const db = require('../config/db')

const todoList = db.define('todoList', {
  description: {type: Sequelize.STRING},
  status: {type: Sequelize.STRING},
  updateAt: {type: Sequelize.STRING},
  userId: {type: Sequelize.INTEGER}
},{
  freezeTableName: true,
  timestamps: false,
}
)

module.exports = todoList
