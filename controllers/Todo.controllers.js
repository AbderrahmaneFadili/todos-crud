const Todo = require("../models/todo.model");

//get all todos
const allTodos = (request, response) => {
  Todo.find((error, todos) => {
    if (error) {
      return response.send(error);
    } else {
      return response.send(todos);
    }
  });
};

//create todo
const createTodo = (request, response) => {
  const todo = new Todo({
    title: request.body.title,
    completed: request.body.completed,
    description: request.body.description,
  });

  todo.save((error, todo) => {
    if (error) {
      return response.status(500).send(error);
    } else {
      return response.status(200).send(todo);
    }
  });
};

module.exports = {
  allTodos,
  createTodo,
};
