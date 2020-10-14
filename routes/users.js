import express from 'express';

//initlaize router

const router = express.Router();

//path to users
router.get('/users', (req, res) => {
  res.send('Hello');
});

