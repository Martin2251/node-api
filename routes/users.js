import express from 'express';

//initlaize router

const router = express.Router();

const users = [
{
    firstName: "Adam",
    lastName: "Johnson",
    age: 100
}
]

//path to users
router.get('/', (req, res) => {
  res.send('Hello');
});

export default router;

