import React, { Component } from 'react';
import WeatherComponent from './components/WeatherComponentLink';
import FilterBar from './components/FilterComponents/FilterBar';
import {Provider} from 'react-redux';
import {Container, Grid} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
        <Provider store={this.props.store}>
            <Container style={{width:700}}  className="App">
                    <Grid>
                        <Grid.Row >
                            <FilterBar/>
                        </Grid.Row>
                        <Grid.Row >
                            <WeatherComponent/>
                        </Grid.Row>
                    </Grid>

            </Container>
        </Provider>
    );
  }
}

export default App;
    