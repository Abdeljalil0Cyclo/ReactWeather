var React = require('react');
var WeatherForm = require('WeatherForm');
var ErrorModel = require('ErrorModel');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false 
    }
  },
  handleSearch: function(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location:undefined,
      temp:undefined
    });
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(e) {
      //debugger;
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount :function(){
    var location = this.props.location.query.location;
    if(location && location.length > 0)
      {
        this.handleSearch(location);
        window.location.hash ='#/';
      }
  },
  componentWillReceiveProps :function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0)
      {
        this.handleSearch(location);
        window.location.hash ='#/';
      }
  },
  render: function() {
    var {location,temp,isLoading,errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h1 className = "text-center"> Fetching wheather... </h1>
      } else if (location && temp) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>
      }
    }
    function renderError() {
      if(typeof errorMessage  === 'string') {
        
        return ( 
          <ErrorModel message={errorMessage}/>
        )
      }
    }
    return ( 
      <div>
        <h1 className ="text-center page-title" > Get Weather </h1> 
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()} 
        {renderError() } 
      </div>

    );
  }
});
module.exports = Weather;