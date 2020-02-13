const { Sequelize} = require('sequelize');

module.exports = new Sequelize('project', 'root', 'password',  {
  host: 'localhost',    //数据库地址,默认本机
  port:'3306',
  dialect: 'mysql',
  pool: {   //连接池设置
    max: 5, //最大连接数
    min: 0, //最小连接数
    idle: 10000
  },
 });
