const https = require('https');
const url = "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=78420792cdac464da286f5052d2ce008";

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
        console.log(weather.list[0].main.temp);
    });
});