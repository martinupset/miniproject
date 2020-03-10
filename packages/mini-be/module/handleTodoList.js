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


module.exports = {
  dbNewTodo,
  showTodo,
  deleteTodo
}
