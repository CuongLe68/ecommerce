const express = require("express");
const app = express();
const cors = require("cors"); //giao tiếp giữa các page không bị chặn
const cookieParser = require("cookie-parser"); //trung gian để phân tích cú pháp cookie
const mongoose = require("mongoose"); //import db
const dotenv = require("dotenv"); //cấu hình env
const port = process.env.PORT || 3000

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

// Page Home
app.get("/", (req, res) => {
  res.send('SERVER ON')
})

//routers
const productRouter = require("./src/v1/routers/productRouter"); //liên quan đến product
app.use("/v1/products", cors({ origin: '*' }), productRouter);

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<")
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING! http://localhost:${port}`);
});
