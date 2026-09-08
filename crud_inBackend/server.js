const express = require("express");

const app = express();
const port = 3000;

// middleware
app.use(express.json());

let users = [{
    name: "motorola",
    age: 20,
}];

let body;

// Create
app.post("/create", (req, res) => {
    body = req.body;
    res.send(body);
});

// Get - Read
app.get("/", (req, res) => {
    res.send(body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});