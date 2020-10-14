import express from 'express';
import bodyParser from 'body-parser';
// allows us to take incoming post request

//added user routes
import usersRoutes from './routes/users.js';

const app = express();
//call it as a function
const PORT = 5000;
//using different as its normal 3000



//intialiaze body parser
app.use(bodyParser.json());
//using JSON Data

app.use('/users', usersRoutes);

//Create route
app.get('/', (req, res) => res.send('Hello from Homepage.'));

//call the port you want to listen on
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

