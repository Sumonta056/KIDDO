const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const http = require("http");
const Server = require("socket.io").Server;
const server1 = http.createServer(app);
const io = new Server(server1, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "childtherap",
});

app.post("/signup", (req, res) => {
  console.log("here");
  // First, check if the phone number already exists in the database
  const phoneCheckSql = "SELECT * FROM user WHERE phone = ?";
  const phoneToCheck = req.body.phone; // Change to req.body.phone

  db.query(phoneCheckSql, [phoneToCheck], (phoneCheckErr, phoneCheckData) => {
    if (phoneCheckErr) {
      return res.json(phoneCheckErr);
    }

    // If there is a user with the same phone number, return a message
    if (phoneCheckData.length > 0) {
      console.log("Phone number already registered");
      return res.json("phone");
    }

    // If the phone number is not found in the database, proceed with registration
    const sql = "INSERT INTO user (`name`, `phone`, `password`) VALUES (?)"; // Update to insert phone
    const values = [req.body.name, req.body.phone, req.body.password]; // Change email to phone

    db.query(sql, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }

      return res.json("success");
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE `phone` = ? AND `password` = ?"; // Change email to phone

  db.query(sql, [req.body.phone, req.body.password], (err, data) => {
    // Change email to phone

    if (err) {
      return res.json(err);
    }

    if (data.length > 0) {
      return res.json("success");
    } else {
      return res.json("error");
    }
  });
});
// Route to fetch all books
app.get("/api/books", (req, res) => {
  const query = "SELECT * FROM books";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching books data from MySQL:", err);
      res.json({ error: "Internal Server Error" });
    } else {
      res.json({ books: result });
    }
  });
});

// Route to fetch book data by book_id
app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM books WHERE book_id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error fetching book data from MySQL:", err);
      res.json({ error: "Internal Server Error" });
    } else {
      if (result.length === 0) {
        res.json({ error: "Book not found" });
      } else {
        const bookData = result[0];
        res.json(bookData);
      }
    }
  });
});


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log("We are connected");

  socket.on("chat", (chat) => {
    io.emit("chat", chat);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server1.listen(5001, () => console.log("Listening to port 5001"));
