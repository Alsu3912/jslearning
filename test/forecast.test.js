const getForecast = require('../src/forecast');
const FetchError = require('node-fetch');

test.skip('JSON promise', async () => {
    const func1 = function (url) {
        return new Promise((resolve, reject) => {
            if (url == `http://api.ipstack.com/check?access_key=289f00517cb7a7e8ad80d73f48ad0901`) {
                var geoObject = {
                    ip: '158.181.77.125',
                    city: 'Halle (Saale)',
                    location:
                    {
                        geoname_id: 2911522,
                        calling_code: '49',
                        is_eu: true
                    }
                }
                resolve(geoObject);
            } else if (url == `http://api.openweathermap.org/data/2.5/forecast?id=2911522&APPID=4a810a5579889c847679509b27b543bf`) {
                var forecastObject = {
                    cod: '200',
                    message: 0,
                    cnt: 40,
                    list:
                        [{
                            dt: 1576778400,
                            main:
                            {
                                temp: 279.08,
                                feels_like: 275.5
                            },
                            weather: [[Object]],
                            clouds: { all: 99 },
                            wind: { speed: 3.25, deg: 170 }
                        }]
                }
                resolve(forecastObject);
            } else {
                const errorReject = new Error('ooops');
                reject(errorReject);
            };
        }
        )
    };
    const forecast = await getForecast(func1);
    const expectedResult = {
        dt: 1576778400,
        main:
        {
            temp: 279.08,
            feels_like: 275.5
        },
        weather: [[Object]],
        clouds: { all: 99 },
        wind: { speed: 3.25, deg: 170 }
    }
    expect(forecast).toEqual(expectedResult);
});

test('', () => {
    
})