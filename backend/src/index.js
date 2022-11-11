const express = require("express");
const cors = require("cors");
const {userRoutes} = require("./routes/user.route")
const {productsRoutes} = require("./routes/product.route")
const {adminRoutes} = require("./routes/admin.route")
const cartRoutes = require("./routes/cart.route")

const { connection } = require("./config/db");
const {authentication} = require("./middlewares/authentication")

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use(cors());

app.use("/user", userRoutes)

app.use("/admin", adminRoutes)

app.use("/products", productsRoutes)

app.use(authentication)

app.use("/carts", cartRoutes)

app.listen(8080, async () => {
  try {
    await connection;
    
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connnecting to DB");
    console.log(err);
  }
  console.log(`listening on PORT ${PORT}`);
});
