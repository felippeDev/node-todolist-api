module.exports = function (app) {
  let docs = require('../controllers/docsController')
  let todoList = require('../controllers/todoListController');

  app.route('/')
    .get(docs.showDocs);

  app.route('/tasks')
    .get(todoList.getAllTasks)
    .post(todoList.createTask);

  app.route('/tasks/:taskId')
    .get(todoList.getTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);
};
