const express = require("express");
const app = express();
const cors = require("cors"); //giao tiếp giữa các page không bị chặn
const cookieParser = require("cookie-parser"); //trung gian để phân tích cú pháp cookie
const mongoose = require("mongoose"); //import db
const dotenv = require("dotenv"); //cấu hình env

//router
const productRouter = require("./src/v1/routers/productRouter"); //liên quan đến product

dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// connect database
mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

//routers
app.use("/v1/products", productRouter);

app.listen(8000, () => {
  console.log(`SERVER IS RUNNING! http://localhost:8000`);
});
