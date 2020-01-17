const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path');
const privateKey = fs.readFileSync(path.resolve(__dirname, '../key/private.key'))
const publicKey = fs.readFileSync(path.resolve(__dirname, '../key/public.key'))

function creatToken(payload){
  payload.ctime=Date.now()
  return jwt.sign(payload, privateKey, {algorithm: 'RS256', expiresIn: '15min'})
}

function checkToken(token){
  return new Promise((resovle,reject) => {
    jwt.verify(token,publicKey,(err,data)=>{
      if(err){reject('incorrect token')}
      resovle(data)
    })
  })
}

module.exports={
  creatToken,checkToken
}
