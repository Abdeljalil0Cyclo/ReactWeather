var React = require ('react');
var WeatherForm =require('WeatherForm');
var WeatherMessage =require('WeatherMessage');
var openWeatherMap=require('openWeatherMap');


var Weather = React.createClass({
  getInitialState :function(){
    return {
     isLoading :false
    }
  },
  handleSearch:function(location){   
    var that =this;
 
    this.setState({isLoading:true});
    openWeatherMap.getTemp(location).then(function(temp){
        that.setState({
        location : location,
        temp: temp,
        isLoading:false
        });
    },function(errorMessage){
      
      that.setState({isLoading:false});
      alert(errorMessage);
      
    });

  },
   render :function(){
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;
     function renderMessage(){
       if(isLoading){
          return <h3>Fetchinf wheather ... </h3>
          }else if(location && temp){
            return <WeatherMessage  temp={temp} location={location}></WeatherMessage>
          }
     }
    return (
      <div>
         <h3>this is the weather </h3>
         <WeatherForm onSearch={this.handleSearch}></WeatherForm>
         {renderMessage()}
      </div>
      
    );
  } 
});
module.exports=Weather;