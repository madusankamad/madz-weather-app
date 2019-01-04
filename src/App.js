import React, { Component } from 'react';
import WeatherComponent from './components/WeatherComponentLink';
import FilterBar from './components/FilterComponents/FilterBar';
import {Provider} from 'react-redux';
import {Container} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
        <Provider store={this.props.store}>
            <div className="App">
                <Container>
                    <FilterBar/>
                </Container>
                <WeatherComponent/>
            </div>
        </Provider>
    );
  }
}

export default App;
    