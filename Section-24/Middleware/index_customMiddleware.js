import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log("The request method is: ", req.method);
    console.log("The request URL method is: ", req.url);
    next()
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello!!");
});

app.listen(port, () => {
    console.log("Server Started!!");
});