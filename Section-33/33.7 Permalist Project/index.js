import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "password",
  port: 5432,
});
db.connect();

let items = [];

async function listElements() {
  const result = await db.query(
    "SELECT * FROM items;"
  );
  let items_returned = [];
  result.rows.forEach((item) => {
    items_returned.push(item);
  });
  // console.log(items_returned);
  return items_returned;
}

async function addItems(new_item) {
  const items = await listElements();
  const newElementId = items.length + 1;
  db.query("insert into items (id, title) values ($1,$2)", [newElementId, new_item])
}

app.get("/", async (req, res) => {
  items = await listElements();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const new_item = req.body.newItem;
  console.log(new_item);
  await addItems(new_item);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  // console.log(req.body);
  await db.query("update items set title = $1 where id = $2", [req.body.updatedItemTitle, req.body.updatedItemId]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  // console.log(req.body);
  await db.query("delete from items where id = $1", [req.body.deleteItemId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
