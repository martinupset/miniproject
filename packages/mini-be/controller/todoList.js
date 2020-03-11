const { dbNewTodo, deleteTodo, changeTodo} = require('../module/handleTodoList');

const addItem = ctx => {
  const description = ctx.request.body.description;
  if (description != null) {
    ctx.response.body = 'Add item success!';
    dbNewTodo(description);
  } else {
    ctx.response.body = 'Please Input something';
  }
};

const deleteItem = ctx =>{
  const id = ctx.request.body.id;
  console.log(id)
  if(id != null){
    ctx.response.body = 'delete item success'
    deleteTodo(id)
  }
  else{
    ctx.response.body = 'delete failed'
  }
}
// const showItems =  async ctx => {
//   await showTodo(ctx)
// }
const changeItem = async ctx =>{
  const {id,description,status} = ctx.request.body
  await changeTodo(id,description,status)
  ctx.response.body = 'Item changed'
}

module.exports = {
  addItem,
  deleteItem,
  changeItem
}
