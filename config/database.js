const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL; 

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); 

const db = mongoose.connection; 

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", () => {
    console.log("Connected to MongoDB");
}); 

module.exports = mongoose; 