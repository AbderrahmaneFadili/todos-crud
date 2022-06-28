const router = require("express").Router();
const {
  allTodos,
  createTodo,
  deleteTodo,
} = require("../controllers/Todo.controllers");

router.get("/", (request, response) => {
  return response.status(200).send({
    message: "Let's build Todos CRUD API",
  });
});

router.get("/todos", allTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
