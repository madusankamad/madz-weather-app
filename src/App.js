import React, { Component } from 'react';
import {WeatherContainer} from './components/WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App Goes Here
          <WeatherContainer/>
      </div>
    );
  }
}

export default App;
