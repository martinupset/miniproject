const dbTodoList = require('../model/todoList');

const dbNewTodo = async ( description, userId ) => {
  const updateTime = new Date()
  await dbTodoList.create({
    description,
    status: 'todo',
    updateAt:updateTime.toLocaleString(),
    userId
  })
};

const showTodo =  async ctx => {
  console.log('miao',ctx.query)
   await dbTodoList.findAll({
    order: [['id', 'ASC']],
    where: {userId: ctx.query.userId}
  })
  .then(result => {
    ctx.set('Cache-control', 'max-age=3600')
    ctx.response.body = result
  })
  .catch(err => {console.log(err)})
}

const deleteTodo = async id =>{
  await dbTodoList.destroy({
    where: {
      id: id
    }
  })
}

const changeTodo = async (id, description,status) =>{
  if(description != null){
    await dbTodoList.update({description}, {
      where:{id}
    })
  }
  if(status != null){
    await dbTodoList.update({status}, {
      where:{id}
    })
  }
}




module.exports = {
  dbNewTodo,
  showTodo,
  deleteTodo,
  changeTodo
}
