const getForecast = require('../src/forecast').getForecast;
const FetchResult = require('../src/forecast').FetchResult;
const DailyForecast = require('../src/forecast').DailyForecast;

test ('We send a null as a parameter to getForecast', async () => {
    let error = new TypeError('myFetchFunction is not a function');
    async function invoke() {
        return await getForecast(null);
    }
    await expect(invoke()).rejects.toThrow(error);
})

test ('We send an undefined as a parameter to getForecast', async () => {
    let error = new TypeError('myFetchFunction is not a function');
    async function invoke() {
        return await getForecast(undefined);
    }
    await expect(invoke()).rejects.toThrow(error);
})

test ('We send a number as a parameter to getForecast', async () => {
    let error = new TypeError('myFetchFunction is not a function');
    async function invoke() {
        return await getForecast(42);
    }
    await expect(invoke()).rejects.toThrow(error);
})

test ('We send a text as a parameter to getForecast', async () => {
    let error = new TypeError('myFetchFunction is not a function');
    async function invoke() {
        return await getForecast('ftch');
    }
    await expect(invoke()).rejects.toThrow(error);
})

test ('We send nothing as a parameter to getForecast', async () => {
    let error = new TypeError('myFetchFunction is not a function');
    async function invoke() {
        return await getForecast();
    }
    await expect(invoke()).rejects.toThrow(error);
})

test('Everithing ok => we are getting DailyForecast', async () => {
    const forecast = await getForecast(allCasesFunction(new FetchResult(correctGeo, null),
        new FetchResult(correctForecast, null)));
    const correctResult = new DailyForecast("Halle", 3.75, 4.11, 3.42, 1033, 89);
    expect(forecast).toEqual(correctResult + "1");
})

test('We caught an error in the first url', async () => {
    const firstErrorString = 'request to first url failed, reason: getaddrinfo ENOTFOUND';
    const secondErrorString = 'request to first url failed, reason: getaddrinfo ENOTFOUND';
    const forecast = await getForecast(allCasesFunction(new FetchResult(null, firstErrorString), 
        new FetchResult(null, secondErrorString)));
    const errorResult = new FetchResult(null, firstErrorString);
    expect(forecast).toEqual(errorResult);
})

test('We caught an error in the second url', async () => {
    const secondErrorString = 'request to first url failed, reason: getaddrinfo ENOTFOUND';
    const forecast = await getForecast(allCasesFunction(new FetchResult(correctGeo, null), 
        new FetchResult(null, secondErrorString)));
    const errorResult = new FetchResult(null, secondErrorString);
    expect(forecast).toEqual(errorResult);
})

const allCasesFunction = function (firstFetchResult, secondFetchResult) {
    return async function (url) {
        return new Promise((resolve, reject) => {
            if (url == `http://api.ipstack.com/check?access_key=289f00517cb7a7e8ad80d73f48ad0901`) {
                resolve(firstFetchResult);
            } else if (url == `http://api.openweathermap.org/data/2.5/forecast?id=2911522&APPID=4a810a5579889c847679509b27b543bf&units=metric`) {
                resolve(secondFetchResult);
            } else {
                throw new Error('impossible scenario');
            }
        });
    }
}
const correctGeo = {
    ip: '158.181.78.5',
    type: 'ipv4',
    continent_code: 'EU',
    continent_name: 'Europe',
    country_code: 'DE',
    country_name: 'Germany',
    region_code: 'ST',
    region_name: 'Saxony-Anhalt',
    city: 'Halle (Saale)',
    zip: '06108',
    latitude: 51.50215148925781,
    longitude: 11.95497989654541,
    location:
    {
        geoname_id: 2911522,
        capital: 'Berlin',
        languages: [Array],
        country_flag: 'http://assets.ipstack.com/flags/de.svg',
        country_flag_emoji: '🇩🇪',
        country_flag_emoji_unicode: 'U+1F1E9 U+1F1EA',
        calling_code: '49',
        is_eu: true
    }
}
const correctForecast = {
    cod: '200',
    message: 0,
    cnt: 40,
    list:
        [{
            dt: 1578258000,
            main:
            {
                temp: 4.11,
                feels_like: 0.12,
                temp_min: 3.75,
                temp_max: 4.11,
                pressure: 1033,
                sea_level: 1033,
                grnd_level: 1020,
                humidity: 89,
                temp_kf: 0.36
            },
            weather:
                [{
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }],
            clouds: { all: 100 },
            wind: { speed: 3.42, deg: 239 },
            sys: { pod: 'n' },
            dt_txt: '2020-01-05 21:00:00'
        }],
        city: {
            id: 2911522,
            name: "Halle",
            coord: {
                lat: 51.5,
                lon: 12
            },
            country: "DE",
            timezone: 3600,
            sunrise: 1580539882,
            sunset: 1580572770
        }
}