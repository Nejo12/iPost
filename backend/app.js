// ZbikuYk1qKPqZMxN
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect(
    "mongodb+srv://Nejo:ZbikuYk1qKPqZMxN@cluster0-dzldd.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected To Database.");
  })
  .catch(() => {
    console.log("Connection Failed.");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);

  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sdnfeif",
      title: "First server-side post",
      content: "This is coming from the server [1]"
    },
    {
      id: "elrf4",
      title: "Second server-side post",
      content: "This is coming from the server [2]"
    },
    {
      id: "4rfg4r",
      title: "Third server-side post",
      content: "This is coming from the server [3]"
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  });
});

module.exports = app;
