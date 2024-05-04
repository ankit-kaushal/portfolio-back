const express = require("express");
require("./src/db/conn");
const cors = require("cors");

const userRouter = require("./src/routers/user");
const projectRouter = require("./src/routers/project");
const workRouter = require("./src/routers/work");
const profileRouter = require("./src/routers/profile");

const app = express();
const port = process.env.PORT || 4080;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(projectRouter);
app.use(workRouter);
app.use(profileRouter);

app.get("/test", async (req, res)=>{
    res.send("ImGroot");
})

app.listen(port, ()=>{
    console.log(`Connected Successfully at ${port}`);
})