import React from 'react';
import {connect} from 'react-redux';
import {Radio, Container, Grid} from 'semantic-ui-react';
import {changeForcastDataRange} from '../../_actions/filterActions';


const SummaryComponent = (props) => {
    const {pressure,humidity,wind} = props.summary;


    return (<Container style={{width:'50%', top:60, position:'relative'}} className='summay-box'>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <p>Pressure : {pressure && pressure}</p>
                    <p>Humidity : {humidity && humidity}</p>
                    <p>Wind : {wind && wind} </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>)
};


const mapStateToProps = (state) => {
    return {
        summary: state.mainForcast.summary?state.mainForcast.summary:[]
    }
};



export default connect(mapStateToProps)(SummaryComponent);