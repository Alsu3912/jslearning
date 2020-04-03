import fetch from 'node-fetch'; 

interface FetchResultLocation {
    readonly location: Location;
}

interface Location {
    readonly geoname_id: number;
}

interface FetchResultWeather {
    readonly list: Array<ListWeather>;
    readonly city: City;
}

interface ListWeather {
    readonly main: MainWeather;
    readonly wind: Wind;
}

interface City {
    readonly name: string;
}

interface MainWeather {
    readonly temp_min: number;
    readonly temp_max: number;
    readonly pressure: number;
    readonly humidity: number;
}

interface Wind {
    readonly speed: number;
}

export class DailyForecast {
    public city: string;
    public temperatureMin: number;
    public temperatureMax: number;
    public windSpeed: number;
    public pressure: number;
    public humidity: number;
    constructor(city: string, temperatureMin: number, temperatureMax: number, windSpeed: number, pressure: number, humidity: number) {
        this.city = city;
        this.temperatureMin = temperatureMin;
        this.temperatureMax = temperatureMax;
        this.windSpeed = windSpeed;
        this.pressure = pressure;
        this.humidity = humidity;
    }
}

export class ErrorResponse {
    error: any;
    constructor(error: any) {
        this.error = error;
    }
}

export async function httpFetcher(url: string): Promise<any> {
    return fetch(url, undefined)
        .then(response => response.json())
        .catch(err => new ErrorResponse(err))
}

export async function getForecast(myFetchFunction: (url: string)=>Promise<any>) {
    const geopositionUrl: string = `http://api.ipstack.com/check?access_key=289f00517cb7a7e8ad80d73f48ad0901`;
    let geopositionResponse = await myFetchFunction(geopositionUrl);
    if (geopositionResponse  instanceof ErrorResponse) {
        return geopositionResponse;
    }
    const geoposition: FetchResultLocation = geopositionResponse;
    let cityID: number = geoposition.location.geoname_id;
    const forecastUrl: string = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=4a810a5579889c847679509b27b543bf&units=metric`;
    let forecastResponse = await myFetchFunction(forecastUrl);
    if (forecastResponse instanceof ErrorResponse) {
        return forecastResponse;
    }
    let forecast: FetchResultWeather = forecastResponse;
    let forecastToday: ListWeather = forecast.list[0];
    let city: string = forecast.city.name;
    let temperatureMin: number = forecastToday.main.temp_min;
    let temperatureMax: number = forecastToday.main.temp_max;
    let windSpeed: number = forecastToday.wind.speed;
    let pressure: number = forecastToday.main.pressure;
    let humidity: number = forecastToday.main.humidity;
    let outputForecast: DailyForecast = new DailyForecast(city, temperatureMin, temperatureMax, windSpeed, pressure, humidity);
    return outputForecast;
}

module.exports.getForecast = getForecast;
module.exports.httpFetcher = httpFetcher;
module.exports.DailyForecast = DailyForecast;