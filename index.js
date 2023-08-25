const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port=3001
app.use(cors({origin: true, credentials: true}));
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "blog",
  });
  //db.connect(function(err) {
  //  if (err) throw err;
  //  console.log("Connected!");
 // });

app.post("/create", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const body = req.body.body;


  db.query(
    "INSERT INTO myblog (title, author, body) VALUES (?,?,?)",
    [title, author, body],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.get("/blogs", (req, res) => {
    db.query("SELECT * FROM myblog", (err, result) => {
    // console.log(result)
     
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.put("/update", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    db.query(
      "UPDATE myblog SET title = ? WHERE id = ?",
      [title, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM myblog WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(process.env.PORT||port, () => {
    console.log("Yey, your server is running on port 3001");
  });