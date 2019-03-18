const express = require('express');
const server = express();
const cors = require('cors');
const db = require('./data/db');

const port = 4000;

server.use(express.json());
server.use(cors());

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
  const userId = req.params.is;
  db.findById(userId)
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
  const { body: user } = req;
  if (!user.name || !user.bio) {
    res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
  } else {
    db.insert(user)
      .then(newUser => {
        res.status(201).json(newUser);
      })
      .catch(error => {
        res.status(500).json({ error: 'There was an error while saving the user to the database' });
      });
  }
});

server.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const { body: user } = req;
  if (!user.name || !user.bio) {
    res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
  } else {
    db.update(userId, user)
      .then(updatedCount => {
        if (!updatedCount) {
          res.status(400).json({ message: 'The user with the specified ID does not exist.' });
        } else {
          db.findById(userId).then(user => {
            res.json(user);
          });
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'The user information could not be modified.' });
      });
  }
});

server.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  db.remove(userId)
    .then(deletedCount => {
      if (!deletedCount) {
        res.status(404).json({ message: 'The user with the specified ID does not exist.' });
      } else {
        res.json({ message: `The user with ID ${userId} was deleted.` });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'The user could not be removed' });
    });
});

server.listen(port, () => {
  console.log(`\nServer running on localhost:${port}`);
});
