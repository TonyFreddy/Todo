const express = require('express');
const app = express();
const cors = require("cors");
require("./connexion/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(cors()); 
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(2000, ()=>{
    console.log("server started");
});