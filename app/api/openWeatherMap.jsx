var axios= require('axios');


const OPEN_WEATHER_MAP_URL='https://api.openweathermap.org/data/2.5/weather?appid=91c3222256659fa5e23f9e66d26561ef&units=imperial';

//91c3222256659fa5e23f9e66d26561ef

module.exports={
  getTemp:function(location){
    var encodedLocation=encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    return axios.get(requestUrl).then(function(res){
      debugger;
      
      if(res.data.cod && res.data.message){
          throw new Error(res.data.message); 
        }else{
          return res.data.main.temp;
        }
    },function(res){
        throw new Error(res.data.message);
    });
  }
}




