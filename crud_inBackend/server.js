const express = require("express");

const app = express();
const port = 3000;

// middleware for accepting or parse json data 
app.use(express.json());

let users = [];



// Create
app.post("/create", (req, res) => {
    let body = req.body;
    users.push(body);
    res.send("User created");
});

//delete
app.delete("/delete/:id",(req,res)=>{
     let {id} =req.params; //req.params parameter ki value leta hai mean id ki 
     let userData =users.filter((val)=>val.id!==id);
     users=userData; //user data ko user me update kr rhe hai 
     res.send("User deleted");
});

//update
app.put("/update/:id",(req,res)=>{
    let {id} =req.params;
    let {name} =req.body;
    let updatedUser =users.map((val)=>val.id==id ?{...val,name}:val);
    users=updatedUser;
    res.send("updated user sucessfully");
})

// Get - Read
app.get("/", (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); 