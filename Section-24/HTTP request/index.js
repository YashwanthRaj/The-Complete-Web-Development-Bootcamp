import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {  // Endpoint home page
    res.send("<h1>Hello World!!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>You have entered the about page</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>You have entered the contact page</h2>");
});

// Testing in postman
app.post("/register", (req,res) => {
    res.sendStatus(201);
});

app.put("/user/yash" , (req,res) => {
    res.sendStatus(200);
});

app.patch("/user/yash" , (req,res) => {
    res.sendStatus(200);
});

app.delete("/user/yash" , (req,res) => {
    res.sendStatus(200);
});

// Starting the server
app.listen(port, () => {
    console.log('Server started at port ',port)
});