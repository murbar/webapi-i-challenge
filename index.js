const express = require('express');
const server = express();
const db = require('./data/db');

const port = 4000;

server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ error: 'The users information could not be retrieved.' });
    });
});

server.get('/api/users/:id', (req, res) => {
  db.findById(req.params.id)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: 'The user with the specified ID does not exist.' });
      } else {
        res.json(user);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'The user information could not be retrieved.' });
    });
});

server.post('/api/users', (req, res) => {
  res.send('Hello world');
});

server.put('/api/users/:id', (req, res) => {
  res.send('Hello world');
});

server.delete('/api/users/:id', (req, res) => {
  res.send('Hello world');
});

server.listen(port, () => {
  console.log(`\nServer running on localhost:${port}`);
});
