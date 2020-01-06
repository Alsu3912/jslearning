// module.exports = getForecastAlsu;
const fetch = require('node-fetch');

class FetchResult {
    constructor(success, fail) {
        this.success = success;
        this.fail = fail;
    }
}

function myFuckingFetch(url) {
    return fetch(url)
        .then(response => response.json())
        .then(r => new FetchResult(r, null))
        .catch(err => new FetchResult(null, err.message))
}

async function getForecast(myFetchFunction) {
        const geopositionUrl = `http://api.ipstack.com/check?access_key=289f00517cb7a7e8ad80d73f48ad0901`;
        let geopositionResponse = await myFetchFunction(geopositionUrl);
        if (geopositionResponse.success == null) {
            return console.log(geopositionResponse.fail);
        }
        let cityID = geopositionResponse.success.location.geoname_id;
        const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=4a810a5579889c847679509b27b543bf&units=metric`;
        let forecastResponse = await myFetchFunction(forecastUrl);
        if (forecastResponse.success == null) {
            return console.log(forecastResponse.fail);
        }
        let forecast = forecastResponse["success"]["list"][0];
        return console.log(forecast);
}
getForecast(myFuckingFetch);