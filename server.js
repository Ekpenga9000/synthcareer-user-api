const express = require("express"); 
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes"); 

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
   console.log("Customer Server working on 5000");
});