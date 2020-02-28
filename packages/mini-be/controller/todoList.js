const { dbNewTodo } = require('../module/handleTodoList');

const addItem = ctx => {
  const description = ctx.request.body.description;
  console.log(description)
  if (description != null) {
    ctx.response.body = 'Add item success!';
    dbNewTodo(description);
  } else {
    ctx.response.body = 'Please Input something';
  }
};

// const showItems =  async ctx => {
//   await showTodo(ctx)
// }

module.exports = {
  addItem
}
