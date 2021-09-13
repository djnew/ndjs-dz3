const http = require('http');

class Weather {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  getWeather(city) {

    if (typeof city !== 'string' || city.length <= 0) {
      console.error('город не задан');
      process.exit(0);
    }

    http.get(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${city}&units=m`, (res) => {
      const { statusCode } = res;

      let error;
      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Ошибка запроса.\n' +
          `Код ошибки: ${statusCode}`);
      }

      if (error) {
        console.error(error.message);
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          this.weatherResultFromResponse(parsedData)
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (error) => {
      console.log(error)
    });
  }

  weatherResultFromResponse(response){
    if(typeof response.success === 'boolean' && !response.success){
      if(response.error.code === 615){
        console.log('Город не найден')
      }else {
        console.error(response.error.info);
      }
      return;
    }

    console.log(`Страна: ${response.location.country}`);
    console.log(`Город: ${response.location.name}`);
    console.log('-------------------------------');
    console.log(`Температура: ${response.current.temperature}°`);
    console.log(`Скорость ветра: ${response.current.wind_speed}км/ч`);
  }
}


module.exports = Weather;
