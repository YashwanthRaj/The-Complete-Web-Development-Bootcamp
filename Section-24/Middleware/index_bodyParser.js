import express from "express";
import bodyParser from "body-parser";

import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    // console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req,res) => {
    console.log(req.body);   // The .body is here becaue of the middle ware. It creates an object with the input from form
    console.log("The users street Name is: " + req.body.street);
    console.log("The users pet Name is: " + req.body.pet)

    res.send("Logged succesfully");
    // res.send("The users pet Name is: " + req.body.pet)

});

app.listen(port, () => {
    console.log("Server started!!")
});