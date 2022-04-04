const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

// api key is in public access for demo purpose only
const API_KEY = "42cce37d8eac5bdd6595ee0d7421af1f";

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
    origin: "https://api.openweathermap.org"
};
  
app.use(cors(corsOptions));


//Serve static assets if in production mode
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'));
    });
}

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, 'client/build'))); 

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// get coordinates of the user's choice location 
function getCoordinates(city) {
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`)
        .then(resp => [resp.data[0].lat, resp.data[0].lon])
        .catch(err => err);
}

app.get('/api/search', async (req, res) => {
    const city = req.query.city;
    const coordinates = await getCoordinates(city);
    const API_CALL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=${API_KEY}`;

    const LOCATION_CALL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${API_KEY}`

    // get city for which the forecast is received
    const location = await axios.get(LOCATION_CALL)
        .then(resp => resp.data)
        .catch(err => err.response.data)

    // get forecast
    const weather = await axios.get(API_CALL)
        .then(resp => {
            resp.data.location = {city:location[0].name, country:location[0].country};
            return resp.data
        })
        .catch(err => err.response.data)
    // return data to front
    res.json(weather)
})

app.listen(port, () => console.log(`Listening on port ${port}`));
