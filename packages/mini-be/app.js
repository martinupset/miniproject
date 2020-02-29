var koa = require('koa')
var route = require('koa-route')
const User = require('./model/User')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
require('dotenv').config()
const {signIn, signUp} = require('./controller/sign');
const {addItem, deleteItem} = require('./controller/todoList')
const {showTodo} = require('./module/handleTodoList')

const PORT = process.env.PORT
const db = require('./config/db')
var app = new koa()

//解决cookie跨域
app.use(async(ctx,next) => {
  ctx.set('Access-Control-Allow-Credentials', true);
  await next()
})

db.authenticate()
.then(()=>console.log('db connected'))
.catch(err => (console.log('err:' + err)))

//get data list
const data = async (ctx) => {
  await User.findAll({where: {email:'1234@163.com'}, attributes: ['password']})
  .then(user => {
    ctx.response.body = user.password
    console.log(user)
  })
  .catch(err => {console.log(err)})
}


const main = (ctx) => {
  ctx.response.body = 'hello world'
}


const back = async function(ctx,next) {
  ctx.response.redirect('/')
  next()
  await log3()
}//重定向

//use middleware to fix cross-domain
app.use(
  cors({
    origin: '*',
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
);

app.use(bodyParser());

app.use(route.get('/', main)) //1. 路径   2. CTX函数
app.use(route.get('/back', back))
app.use(route.get('/data',data))
app.use(route.post('/signIn', signIn))
app.use(route.post('/signUp', signUp))
app.use(route.post('/addItem', addItem))
app.use(route.get('/showTodo', showTodo))
app.use(route.delete('/deleteItem', deleteItem))

app.listen(PORT)
