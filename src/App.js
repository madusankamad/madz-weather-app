import React, {Component} from "react";
import WeatherComponent from "./components/WeatherComponentLink";
import FilterBar from "./components/FilterComponents/FilterBar";
import BackgroundChanger from "./components/BackgroundChanger/BackgroundChanger";
import {Provider} from "react-redux";
import {Container, Grid} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Container className="App">
                    <Grid>
                        <Grid.Row style={{background:'#FCFCFC'}}>
                            <FilterBar/>
                        </Grid.Row>
                        <Grid.Row >
                            <WeatherComponent/>
                        </Grid.Row>
                    </Grid>
                    <BackgroundChanger/>
                </Container>
            </Provider>
        );
    }
}

export default App;
    