import express from 'express';
import bodyParser from 'body-parser';
// allows us to take incoming post request

const app = express();
//call it as a function
const Port =5000;
//using different as its normal 3000

//intialiaze body parser
app.use(bodyParser.json());
//using JSON Data

//call the port you want to listen on
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

