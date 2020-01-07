const { Sequelize} = require('sequelize');
const db = require('../config/db')

const users = db.define('t_user'/*自定义表名*/, {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,       //主键
      autoIncrement: true,    //自增
  },
  //用户名
  username: {
      type: Sequelize.STRING,
      validate:{
        isEmail: true,   //类型检测,是否是邮箱格式
      }
  },
  //密码
  pwd: {
      type: Sequelize.STRING(10),
      allowNull: false,//不允许为null
  },
  //状态
  status: {
      type: Sequelize.INTEGER,
       defaultValue: 0,//默认值是0
  },
  //昵称
  name: {
      type: Sequelize.STRING
  },
  //token
  token: {
      type: Sequelize.UUID
  },
  create_time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
  }
}, {
  //使用自定义表名
  freezeTableName: true,
  //去掉默认的添加时间和更新时间
  timestamps: false,
  // indexes:[
  //   //普通索引,默认BTREE
  //     {
  //         unique: true,
  //         fields: ['pid']
  //     },
  //  ]
});

//同步:没有就新建,有就不变
// users.sync();
//先删除后同步
users.sync({
  force: true
});
