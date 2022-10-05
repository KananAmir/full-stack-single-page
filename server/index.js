const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const bodyParser = require("body-parser");
const { validationResult } = require("express-validator");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((cors()))
mongoose.connect(
  "mongodb+srv://amirovkanan:amirov1532@cluster0.mzcry9b.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

//DB TABLE
const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  birthDate: String,
  email: String,
});

const Users = mongoose.model("Users", usersSchema);

//Get All Users 
app.get("/users", (req, res) => {
  Users.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

// Get by Id
app.get('/users/:id', (req, res) => {

    let id = req.params.id;

    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc)
                res.json(doc);
            else
                res.status(404).json({ "message": "Not found!" })
        }
        else {
            res.status(500).json(err)
        }
    })

})

// Post New User
app.post("/users", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var user = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    email: req.body.email,
  });
  user.save();
  res.send("Success!!");
});

//Update by Id
app.put('/users/:id', (req, res) => {

    let id = req.params.id;

    Users.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.json({ 'message': 'success' });
        }
        else {
            res.status(500).json(err);
        }
    })
})

//Delete by Id
app.delete('/users/:id', (req, res) => {

    let id = req.params.id;

    Users.findByIdAndDelete(id, (err) => {
        if (!err)
            res.json({ 'messagae': 'Success!' })
        else
            res.status(500).json(err)
    })
})

app.listen(8080, () => {
  console.log("Server is running!!");
});