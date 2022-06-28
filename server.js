const express = require("express");

const PORT = 7000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
