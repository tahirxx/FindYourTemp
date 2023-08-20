import express from 'express';
import exhbars from 'express-handlebars';
import fetch from 'node-fetch';


const app = express();

const port = 3000;

//use() func is middleware to parse json data
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
  console.log('hello from backend to frontend!');
});

//create POST route for /weather
app.post('/weather', (req, res) => {
  const cityName = req.body.cityName; //get cityName from JSON payload.   

  //respond w/ the received data 

  res.json({message: `Received cityName: ${cityName}`})
});