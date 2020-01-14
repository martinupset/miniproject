const dbUsers = require('../model/User');
//使用加密包bcrypt
const bcrypt = require('bcrypt')
//genSalt方法接受一个数值作为参数，越大，生成随机字符串的复杂度越高

const dbRetrieve = email =>
  dbUsers.findOne({
    where: {
      email
    }
  });

const dbNewUser = async ({ email, name, password }) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log(hashedPassword)
  await dbUsers.create({
    email,
    name,
    password: hashedPassword
  });
};

const comparePwd = (hashedPassword, inputPassword) => bcrypt.compare(inputPassword, hashedPassword)

module.exports = {
  dbRetrieve,
  dbNewUser,
  comparePwd
};
