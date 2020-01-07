var koa = require('koa')
var app = new koa()
var route = require('koa-route')
const User = require('./model/User')
require('dotenv').config()

//1.假如访问根目录则返回hello word
//2.假如不是根目录则返回其他东西

// const main = (ctx) => {// koa提供的context对象
//   if(ctx.request.path === '/'){
//     ctx.response.body = 'hello world'
//   }else{
//     ctx.response.type = 'html'
//     ctx.response.body = '<a href = "/">fuck</a>'
//   }
// }
const PORT = process.env.PORT
const db = require('./config/db')

var log3 = new Promise((res, rej) =>{
  setTimeout(() => {
    console.log('three')
    res()
  })
})

db.authenticate()
.then(()=>console.log('db connected'))
.catch(err => (console.log('err:' + err)))

const data = (ctx) => {
  User.findAll()
  .then(user => {
    console.log(user)
    // ctx.response.body = {user}
  })
  .catch(err => {console.log(err)})
}
const main = (ctx) => {
  ctx.response.body = 'hello world'
}

const other = (ctx) => {
  ctx.response.body = 'fuck koa'
}

const back = async function(ctx,next) {
  ctx.response.redirect('/')
  next()
  await log3()
}//重定向

app.use(route.get('/', main)) //1. 路径   2. CTX函数
app.use(route.get('/other', other))
app.use(route.get('/back', back))
app.use(route.get('/data',data))

app.listen(PORT)
