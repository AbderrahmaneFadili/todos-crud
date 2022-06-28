const express = require("express");
const router = require("./routes/routes");
const mongoos = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = 7000;

const app = express();

//config .env envirement
dotenv.config();

mongoos
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
