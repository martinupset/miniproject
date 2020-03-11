const dbTodoList = require('../model/todoList');

const dbNewTodo = async ( description ) => {
  const updateTime = new Date()
  await dbTodoList.create({
    description,
    status: 'todo',
    updateAt:updateTime.toLocaleString()
  })
};

const showTodo =  async ctx => {
   await dbTodoList.findAll({
    order: [['id', 'ASC']]
  })
  .then(result => {
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
