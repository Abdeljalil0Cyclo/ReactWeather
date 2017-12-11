var axios = require('axios');


const OPEN_WEATHER_MAP_URL = "https://api.apixu.com/v1/current.json?key=b68f9158b7de4edabe013248171112";

//91c3222256659fa5e23f9e66d26561ef
//b68f9158b7de4edabe013248171112

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.current) 
      {
        return res.data.current.temp_f;
      }else if(res.response.data.error) {
        throw new Error(res.response.data.error.message);
      }
    }).catch(function(res) {
       throw new Error(res.response.data.error.message);
    });
  }
}