const router = require("express").Router();

router.get("/", (request, response) => {
  return response.status(200).send({
    message: "Let's build Todos CRUD API",
  });
});

module.exports = router;
