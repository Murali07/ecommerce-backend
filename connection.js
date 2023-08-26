const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connectionStr = `${process.env.MONGO_URL}ecommerce`;

mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
