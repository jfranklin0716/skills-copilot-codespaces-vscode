// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.json
const comments = require('./comments.json');

// Set up a route
app.get('/', (req, res) => {
  res.send('Welcome to the comments page!');
});

// Set up a route for all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Set up a route for a specific comment
app.get('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  res.json(comments[commentId]);
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});