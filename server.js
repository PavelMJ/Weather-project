import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
 const KEY = "Wt52VB1aWbvyGcarDSV7vT2OSSZZ1J3G"


app.get('/autocomplete/:city', (req, res) => {
  const city = req.params.city;

  const apiUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`;
  const apiKey = KEY

  const url = `${apiUrl}?apikey=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => res.json(data
		))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.get('/currentconditions/:cityKey', (req, res) => {
  const cityKey = req.params.city;

  const apiUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const apiKey = KEY

  const url = `${apiUrl}${cityKey}?apikey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => res.json({
			success:true,
			data,
		}
		))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.get('/forecasts/:cityKey', (req, res) => {
  const cityKey = req.params.city;

  const apiUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const apiKey = KEY

  const url = `${apiUrl}${cityKey}?apikey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => res.json({
			success:true,
			data,
		}
		))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});





app.listen(4444, (err)=>{
	if(err){ return console.error(err)}
	return console.log("server runing on port 4444");
})