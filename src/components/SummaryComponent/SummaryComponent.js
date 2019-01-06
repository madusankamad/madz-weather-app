import React from "react";
import {connect} from "react-redux";
import {Container, Grid} from "semantic-ui-react";
import styled from "styled-components";


const SummaryComponent = (props) => {
    const {pressure, humidity, wind} = props.summary;


    return (<Container style={{width: '50%', top: 60, position: 'relative'}} className='summay-box'>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Titles>Pressure : {pressure && pressure}</Titles>
                    <Titles>Humidity : {humidity && humidity}</Titles>
                    <Titles>Wind : {wind && wind} </Titles>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>)
};


const mapStateToProps = (state) => {
    return {
        summary: state.mainForcast.summary ? state.mainForcast.summary : []
    }
};

export default connect(mapStateToProps)(SummaryComponent);

const Titles = styled.p`
  line-height: 10px;
    padding: 0;
    color: #878787;
    font-size: 15px;
`;
