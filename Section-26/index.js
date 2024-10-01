import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {blogPosts});
});

app.post("/updateForm", (req,res) => {
    blogPosts.forEach(element => {
        if(element.name == req.body.element) {
            element.name = req.body.name;
            element.date = req.body.date;
            element.description = req.body.description;
        }
    });
    res.render("index.ejs", {blogPosts});
});

app.post("/viewPost", (req,res) => {
    let blog = req.body;
    // console.log(blog);
    res.render("blogpost.ejs", {blog})
});

app.post("/createPost", (req,res) => {
    blogPosts.push(req.body);
    res.render("index.ejs", {blogPosts})
});

app.listen(port,() => {
    console.log(`Listening from port ${port}`);
});

let blogPosts = [
    {name: "Wind", date: "01/01/2023", description: "I really really Love Wind!!" },
    {name: "Rain", date: "02/01/2023", description: "I really really Love Rain!!" },
    {name: "Mountain", date: "03/01/2023", description: "I really really Love Mountain!!" },
    {name: "Sun", date: "04/01/2023", description: "I really really Love Sun!!" },
    {name: "Sea", date: "05/01/2023", description: "I really really Love Sea!!" },
]