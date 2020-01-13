const dbUsers = require('../model/User');

const dbRetrieve = email =>
  dbUsers.findOne({
    where: {
      email
    }
  });

const dbNewUser = async ({ email, name, password }) => {
  await dbUsers.create({
    email,
    name,
    password
  });
};

const comparePwd = (hashedPassword, inputPassword) => {return(hashedPassword == inputPassword)}

module.exports = {
  dbRetrieve,
  dbNewUser,
  comparePwd
};
