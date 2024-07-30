// Create Web Server
// Create a new web server using the express.js framework
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('You are trying to create a new comment.');
});

// Read all comments
app.get('/comments', (req, res) => {
  res.send('You want to see all comments.');
});

// Read one comment
app.get('/comments/:id', (req, res) => {
  res.send('You want to see a comment with ID: ' + req.params.id);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('You want to update a comment with ID: ' + req.params.id);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('You want to delete a comment with ID: ' + req.params.id);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/comments');
});
// End of comments.js