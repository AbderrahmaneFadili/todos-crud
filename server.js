const express = require("express");
const router = require("./routes/routes");

const PORT = 7000;

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
