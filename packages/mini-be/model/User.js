const { Sequelize} = require('sequelize');
const db = require('../config/db')

const User = db.define('Users', {
  email: {type: Sequelize.STRING},
  password: {type: Sequelize.STRING},
  name: {type: Sequelize.STRING}
},{
  freezeTableName: true,
  timestamps: false,
}
)

module.exports = User
