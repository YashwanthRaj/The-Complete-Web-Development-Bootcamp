import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
// app.use(morgan("combined"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send("<h1>Express</h1>")
});

app.listen(port, () => {
    console.log("Server Started!!");
});