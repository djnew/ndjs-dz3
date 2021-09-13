const yargs = require('yargs/yargs');

const Weather = require('./weather.js');
const config = require('./config.js');

const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $ yarn start -c [city name]')
  .option('city',{
    alias: 'c',
    describe: 'the name of the city to get the weather'
  })
  .argv;

new Weather(config.apiKey).getWeather(argv.city);

