module.exports = getForecast;
const fetch = require('node-fetch');

class FetchResult {
    constructor(success, fail) {
        this.success = success;
        this.fail = fail;
    }
}

async function transform(thirdPart, url) {
    let result = new FetchResult("", "");
    let forecast = await thirdPart(url);
    if (response.ok) {
        let forecastJson = await response.json();
        result.success = forecastJson['list'][0];
    } else {
        response.catch(function(error) {
            result.fail = error;
        })
    }
    return result;
}

async function getForecast(fetcher) {

    const geopositionUrl = `http://api.ipstack.com/check?access_key=289f00517cb7a7e8ad80d73f48ad0901`;
    let geopositionPesponse = await fetcher(geopositionUrl);
    let geoposition = await geopositionPesponse.json();
    let cityID = geoposition.location.geoname_id;
    const forecastUrl = `http://api2.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=4a810a5579889c847679509b27b543bf&units=metric`;
    // let forecast = await fetcher(forecastUrl);
    return transform(fetcher, forecastUrl);
}


// return forecast['list'][0];


getForecast(url => fetch(url))
    // .then(data => data.json()))
    .then(r => console.log(r))
    // .catch(e => console.error(e))
