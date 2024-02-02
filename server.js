const express = require("express"); 
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/synthcareer_customer"); 

const UserSchema = new mongoose.Schema({
   name:String
})

const UserModel = mongoose.model("users", UserSchema);

app.get("/users", async (req, res) => {
   try {
      
      const user = await UserModel.find().exec(); 
      res.json(user);
   } catch (err) {
      console.log(err);   
   }
});

app.listen(5000, () => {
   console.log("Customer Server working on 5000");
});