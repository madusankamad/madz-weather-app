import React, { Component } from 'react';
import WeatherComponent from './components/WeatherComponentLink';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
        <Provider store={this.props.store}>
            {console.log(this.props.store)}
            <div className="App">
                <WeatherComponent/>
            </div>
        </Provider>
    );
  }
}

export default App;
    