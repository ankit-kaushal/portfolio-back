const express = require("express");
require("../src/db/conn");

const userRouter = require("./routers/user")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.get("/", async (req, res)=>{
    res.send("ImGroot");
})

app.listen(port, ()=>{
    console.log(`Connected Successfully at ${port}`);
})