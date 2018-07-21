const https = require('https');

const displayMessage = (currentTemp) => {
    let tempInDegree = currentTemp - 273.15;
    let msg = `The current temperature is ${Math.floor(tempInDegree)} degrees`;
    console.log(msg);
}

const getWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78420792cdac464da286f5052d2ce008`;
    const request = https.get(url, response => {
        let body = "";
        // Heppens when data stream is started
        response.on('data', data => {
            // Read the data
            body += data.toString();
        });

        // End stream
        response.on('end', () => {
            // Parsing to JSON
            let weather = "";
            weather = JSON.parse(body);
            // Print out message 
            displayMessage(weather.main.temp);
        });
    });
}

let city = process.argv.slice(2);
getWeather(city);
