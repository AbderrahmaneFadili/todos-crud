const express = require("express");
const router = require("./routes/routes");
const mongoos = require("mongoose");
const dotenv = require("dotenv");

const PORT = 7000;

const app = express();

app.use(router);

//config .env envirement
dotenv.config();

mongoos
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
