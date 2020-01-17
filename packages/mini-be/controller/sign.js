const { dbRetrieve, dbNewUser, comparePwd } = require('../module/handledb');
const jwt = require('../jwt/token')

const signUp = async ctx => {
  const retrieveResult = await dbRetrieve(ctx.request.body.email);
  if (retrieveResult === null) {
    ctx.response.body = 'Sign up success!';
    dbNewUser(ctx.request.body);
  } else {
    ctx.response.body = 'User already existed!';
  }
};

const signIn = async ctx => {
  const useremail = ctx.request.body.email
  const retrieveResult = await dbRetrieve(useremail);

  if (retrieveResult === null) {
    ctx.response.body = 'user not exists!';
    return;
  }

  const checkResult = await comparePwd(
    retrieveResult.dataValues.password,
    ctx.request.body.password
  );

  if (checkResult) {
    let token = jwt.creatToken(useremail)
    ctx.response.body = {
      status: 200,
      description: 'sign in success!',
      token: token
      };
    console.log(token)
  } else {
    ctx.response.body = {
      status: 400,
      description: 'password not right!'
      };
  }
};

module.exports = {
  signUp,
  signIn
};
