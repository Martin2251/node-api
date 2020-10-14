import express from 'express';

//initlaize router

const router = express.Router();

const users = [
  {
    firstName: "Adam",
    lastName: "Johnson",
    age: 100
  },
  {
    firstName: "Adam",
    lastName: "Eve",
    age: 100
  }
  ]

//path to users
router.get('/', (req, res) => {
  console.log(users);

  res.send(users);
});

export default router;

