const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: 'Failed to fetch user' });
    }
    res.json(user);
  });
});