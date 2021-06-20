const request = require('request');

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=c59e83d76e55d4754487c69bc6297a1d&query='+longitude+','+latitude;

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error){
            callback('Unable to find location.', undefined);
        } else {
            let str;
            if(body.current.is_day === 'yes'){
                str = 'a Nice Day'
            } else {
                str = 'a Good Night'
            }
            console.log();
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out. Have ${str}!`)
        }
    })
};

module.exports = forecast