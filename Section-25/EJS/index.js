import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    // res.send("<h1>Hello World!!</h1>");
    const today = new Date();
    const day = today.getDay();
    let dayTypeUser = "a weekday";
    let adviceUser = "Its time to work hard";

    if (day === 0 || day === 6) {
        dayTypeUser = "a weekend";
        adviceUser = "Its time to partyy"
    } 

    res.render("index.ejs", {
        dayType: dayTypeUser,
        advice: adviceUser,
    })

});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});